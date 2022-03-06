import {select, templates} from '../settings.js';
import utils from '../utils.js';
import Song from './Song.js';

class Discover {
  constructor(element, songs, categories, authors) {
    const thisDiscover = this;

    thisDiscover.data = {};
    thisDiscover.data.songs = songs;
    thisDiscover.data.songs = categories;
    thisDiscover.data.songs = authors;

    thisDiscover.getElements(element);
    thisDiscover.randomSong();
  }

  getElements(element){

    const thisDiscover = this;

    thisDiscover.dom = {};
    thisDiscover.dom.wrapper = element;
    thisDiscover.dom.songDiscover = document.querySelector(select.containerOf.discoverPage);
  }

  renderSongInMenu(){
    const thisDiscover = this;
    const generatedHTML = templates.song(thisDiscover.data.songs);

    thisDiscover.element = utils.createDOMFromHTML(generatedHTML);
    const wrapper = document.querySelector(select.containerOf.discoverPage);

    wrapper.appendChild(thisDiscover.element);
  }

  randomSong(){
    const thisDiscover = this;

    const songsNumber = thisDiscover.data.songs.length;
    const random = Math.floor(Math.random() * songsNumber);

    new Song(thisDiscover.data.songs[random], thisDiscover.dom.songDiscover);

    utils.initPlayer();
  }


}

export default Discover;