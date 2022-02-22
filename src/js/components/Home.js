import Song from './Song.js';

import {select} from '../settings.js';

class Home {
  constructor(element, songs, authors){
    const thisHome = this;

    thisHome.data = {};
    thisHome.data.songs = songs;
    thisHome.data.authors = authors;

    thisHome.getElements(element);
    thisHome.renderSongList();
  }

  getElements(element){
    const thisHome = this;

    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.songList = document.querySelector(select.containerOf.songList);
  }

  renderSongList(){
    const thisHome = this;

    for(let song in thisHome.data.songs){
      new Song(thisHome.data.songs[song], thisHome.dom.wrapper);
    }

  }
}

export default Home;