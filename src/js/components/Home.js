import Song from './Song.js';
import {select} from '../settings.js';
import utils from '../utils.js';

class Home {
  constructor(element, songs){
    const thisHome = this;

    thisHome.data = {};
    thisHome.data.songs = songs;

    thisHome.getElements(element);
    thisHome.renderSongList();
  }

  getElements(element){
    const thisHome = this;

    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.songList = element.querySelector(select.containerOf.songList);
  }

  renderSongList(){
    const thisHome = this;

    for(let song of thisHome.data.songs){
      new Song(song, thisHome.dom.songList);
    }
  }
}

export default Home;