import Song from './Song.js';

import {select} from '../settings.js';

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

    thisHome.initPlayer();

  }

  initPlayer(){
    // eslint-disable-next-line no-undef
    GreenAudioPlayer.init({
      selector: '.player', // inits Green Audio Player on each audio container that has class "player"
      stopOthersOnPlay: true
    });
  }
}

export default Home;