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
    thisSearch.initPlayer();

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
  }

  renderCategorySelect(){
    const thisSearch = this;
    const generatedHTML = templates.selectCategoryTemplate(thisSearch.data.categories);
    thisSearch.categoryElem = utils.createDOMFromHTML(generatedHTML);

    const selectContainer = document.querySelector(select.containerOf.searchPage);
    selectContainer.appendChild(thisSearch.categoryElem);
  }

  initSearch(){
    const thisSearch = this;

    let numberOfSongs = 0;
    let matchedSongs = [];

    const categoriesSelect = document.getElementById('category');

    thisSearch.dom.button.addEventListener('click', function(event){
      event.preventDefault();
      utils.resetWrapper(thisSearch.dom.wrapper);
      thisSearch.dom.found.innerHTML = '';

      numberOfSongs = 0;
      matchedSongs = [];

      let selectedCategory = categoriesSelect.value;

      if(thisSearch.dom.input.value === '' & selectedCategory === 'first-option'){
        for(let song in thisSearch.data.songs) {
          matchedSongs.push(thisSearch.data.songs[song]);
        }
      } else {
        if(thisSearch.dom.input.value !== '' && selectedCategory === 'first-option'){
          for(let song in thisSearch.data.songs){
            if(thisSearch.data.songs[song].filename.toString().toUpperCase().includes(thisSearch.dom.input.value.toUpperCase())) {
              matchedSongs.push(thisSearch.data.songs[song]);
            }
          }
        } else {
          if(thisSearch.dom.input.value == '' && selectedCategory !== 'first-option')
            for(let song in thisSearch.data.songs){

              const songCategories = thisSearch.data.songs[song].categories;

              if (songCategories.includes(selectedCategory)){
                if(!matchedSongs.includes(thisSearch.data.songs[song])){
                  matchedSongs.push(thisSearch.data.songs[song]);
                }
              }
            } else {
            if(thisSearch.dom.input.value !== '' && selectedCategory !=='first-option')
              for (let song in thisSearch.data.songs){

                const songCategories = thisSearch.data.songs[song].categories;

                if(songCategories.includes(selectedCategory) && thisSearch.dom.input.value !== ''){
                  if(thisSearch.data.songs[song].filename.toString().toUpperCase().includes(thisSearch.dom.input.value.toUpperCase())){
                    matchedSongs.push(thisSearch.data.songs[song]);
                  }
                }
              }
          }
        }
      }

      for(let song of matchedSongs){
        new Song(song, thisSearch.dom.wrapper);
      }

      thisSearch.initPlayer();

      numberOfSongs = matchedSongs.length;
      numberOfSongs == 1 ? thisSearch.dom.found.innerHTML = 'We have found ${numberOfSongs} song...' : thisSearch.dom.found.innerHTML = 'We have found ${numberOfSongs} songs...';
    });

  }

  initPlayer(){
    // eslint-disable-next-line no-undef
    GreenAudioPlayer.init({
      selector: '.player', // inits Green Audio Player on each audio container that has class "player"
      stopOthersOnPlay: true
    });
  }
}

export default Search;