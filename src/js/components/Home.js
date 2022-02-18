import Song from './Song.js';

import {select} from '../settings.js';

class Home {
  constructor(element, songs){
    const thisHome = this;

    thisHome.data = {};
    thisHome.data.songs = songs;

    thisHome.render(element);
    thisHome.getElements();
  }

  getElements(element){
    const thisHome = this;

    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.songList = thisHome.dom.wrapper.querySelector(select.containerOf.songList);
  }

  renderSongList(){
    const thisHome = this;

    for(let song in thisHome.data.songs){
      new Song(thisHome.data.songs[song]);
    }

  }
}

export default Home;