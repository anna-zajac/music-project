
import {select, templates} from '../settings.js';
import utils from '../utils.js';

class Song{
  constructor(songs){
    const thisSong = this;

    thisSong.songs = songs;

    thisSong.renderSongs();
  }

  renderSongs(){
    const thisSong = this;

    const generatedHTML = templates.homeSong(thisSong.songs);
    const songDOM = utils.createDOMFromHTML(generatedHTML);

    const songContainer = document.querySelector(select.containerOf.songList);

    songContainer.appendChild(songDOM);
  }
}

export default Song;