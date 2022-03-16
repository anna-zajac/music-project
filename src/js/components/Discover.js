import {select} from '../settings.js';
import Song from './Song.js';

class Discover {
  constructor(element, songs) {
    const thisDiscover = this;

    thisDiscover.data = {};
    thisDiscover.data.songs = songs;


    thisDiscover.getElements(element);
    thisDiscover.randomSong();
  }

  getElements(element){

    const thisDiscover = this;

    thisDiscover.dom = {};
    thisDiscover.dom.wrapper = element;
    thisDiscover.dom.songDiscover = document.querySelector(select.containerOf.discoverPage);
  }

  randomSong(){
    const thisDiscover = this;

    const songsNumber = thisDiscover.data.songs.length;
    const random = Math.floor(Math.random() * songsNumber);

    new Song(thisDiscover.data.songs[random], thisDiscover.dom.songDiscover);


  }


}

export default Discover;