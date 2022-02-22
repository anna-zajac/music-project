import Home from './components/Home.js';
import Song from './components/Song.js';
import {select, settings, classNames} from './settings.js';

const app = {

  initHome: function(){
    const thisApp = this;

    const homeElem = document.querySelector(select.containerOf.homePage);

    thisApp.homePage = new Home(homeElem);
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

  initSong: function(){
    const thisApp = this;

    for(let song in thisApp.data.songs){
      new Song(thisApp.data.songs[song]);
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
      });  
  },

  parseData(songs, authors){
    const thisApp = this;
    thisApp.data.songs = songs;
    thisApp.data.authors = authors;
  },

  init: function(){
    const thisApp = this;
    console.log('*** App starting ***');
    console.log('thisApp:', thisApp);
    console.log('classNames:', classNames);
    console.log('settings:', settings);

    thisApp.initData();
    thisApp.initPages();
    thisApp.initHome();
  }

};

app.init();