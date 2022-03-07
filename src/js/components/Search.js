import {select, templates} from '../settings.js';
import utils from '../utils.js';
import Song from './Song.js';


class Search{
  constructor(element, songs, categories){
    const thisSearch = this;

    thisSearch.data = {};
    thisSearch.data.songs = songs;
    thisSearch.data.categories = categories;

    thisSearch.getElements(element);
    thisSearch.renderCategorySelect();
    thisSearch.initSearch();

  }

  getElements(element) {
    const thisSearch = this;

    thisSearch.dom = {};
    thisSearch.dom.wrapper = element;
    thisSearch.dom.selectCategory = document.querySelector(select.form.selectCategory);
    thisSearch.dom.searchSong = document.querySelector(select.containerOf.searchPage);
    thisSearch.dom.button = document.querySelector(select.form.button);
    thisSearch.dom.input = document.querySelector(select.form.input);
    thisSearch.dom.found = document.querySelector(select.form.found);
    thisSearch.dom.category = document.getElementById('category');
  }

  renderCategorySelect(){
    const thisSearch = this;
    const generatedHTML = templates.selectCategoryTemplate({categories:thisSearch.data.categories});
    thisSearch.categoryElem = utils.createDOMFromHTML(generatedHTML);


    thisSearch.dom.category.innerHTML = generatedHTML;
  }

  initSearch(){
    const thisSearch = this;

    thisSearch.dom.button.addEventListener('click', function(event){
      event.preventDefault();
      //utils.resetWrapper(thisSearch.dom.wrapper);
      thisSearch.dom.found.innerHTML = '';

      const matchedSongs = [];

      const selectedCategory = thisSearch.dom.category.value;
      const inputValue = thisSearch.dom.input.value;

      for(let song of thisSearch.data.songs){
        if (song.title.includes(inputValue) && (!selectedCategory || song.categories.includes(selectedCategory))){
          matchedSongs.push(song);
        }    
      
      }

      for(let song of matchedSongs){
        new Song(song, thisSearch.dom.found);
      }

      if(matchedSongs.length == 0){
        thisSearch.dom.found.innerHTML = 'No resutls';
      } else {
        thisSearch.dom.found.innerHTML = 'We have found' + matchedSongs.length + 'songs' + thisSearch.dom.found.innerHTML;
      }

     
    });

  }

}

export default Search;