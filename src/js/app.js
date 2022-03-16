import Home from './components/Home.js';
import Search from './components/Search.js';
import Discover from './components/Discover.js';
import {select, settings, classNames} from './settings.js';

const app = {

  initHome: function(){
    const thisApp = this;
    const homeElem = document.querySelector(select.containerOf.homePage);
    thisApp.homePage = new Home(homeElem, thisApp.data.songs);
  },

  initSearch: function(){
    const thisApp = this;

    const searchElem = document.querySelector(select.containerOf.searchPage);
    thisApp.searchPage = new Search(searchElem, thisApp.data.songs, thisApp.data.categories);
  },

  initDiscover: function(){
    const thisApp = this;

    const discoverElem = document.querySelector(select.containerOf.discoverPage);
    thisApp.discoverPage = new Discover(discoverElem, thisApp.data.songs);
  },

  initPages: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    
    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for(let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#','');
        thisApp.activatePage(id);

        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function(pageId){
    const thisApp = this;

    /* add class active to matching pages, remove from non-matching */
    for(let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    /* add class active to matching links, remove from non-matching */
    for(let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  initData: function(){
    const thisApp = this;

    thisApp.data = {};

    const urls = {
      songs: settings.db.url + '/' + settings.db.songs,
      authors: settings.db.url + '/' + settings.db.authors,
    };
    
    Promise.all([
      fetch(urls.songs),
      fetch(urls.authors),
    ])
      .then(function(allResponses){
        const songResponse = allResponses[0];
        const authorsResponse = allResponses[1];

        return Promise.all([
          songResponse.json(),
          authorsResponse.json(),
        ]);
      })
      .then(function ([songs, authors]){
        thisApp.parseData(songs, authors);
        thisApp.initHome();
        thisApp.initSearch();
        thisApp.initDiscover();
      });  
  },

  parseData(songs, authors){
    const thisApp = this;
    /*thisApp.data.songs = songs.map(function(song){
      return {...song, author: authors.find(function)}
    });
    thisApp.data.authors = authors;*/

    thisApp.data.songs = [];
    for(let song of songs){
      const author = authors.find(function(author){
        return author.id == song.author;
      });
      song.author = author.name;
      thisApp.data.songs.push(song);
    }

    thisApp.data.categories = [];
    for(let song of thisApp.data.songs){
      for(let category of song.categories){
        if(!thisApp.data.categories.includes(category)){
          thisApp.data.categories.push(category);
        }
      }
    }
  },

  init: function(){
    const thisApp = this;
    //console.log('*** App starting ***');
    //console.log('thisApp:', thisApp);
    //console.log('classNames:', classNames);
    //console.log('settings:', settings);

    thisApp.initData();
    thisApp.initPages();
  }

};

app.init();