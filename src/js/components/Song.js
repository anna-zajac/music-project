
import {templates} from '../settings.js';
import utils from '../utils.js';

class Song{
  constructor(song, wrapper){
    const thisSong = this;

  
    thisSong.song = song;
    thisSong.wrapper = wrapper;

    thisSong.renderSong();
  }

  renderSong(){
    const thisSong = this;

    const generatedHTML = templates.song(thisSong.song);
    const songDOM = utils.createDOMFromHTML(generatedHTML);

    thisSong.wrapper.appendChild(songDOM);
  }

}

export default Song;