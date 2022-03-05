import {select, templates} from '../settings.js';
import utils from '../utils.js';

class Discover {
  constructor(element, songs, authors, categories) {
    const thisDiscover = this;

    thisDiscover.data = {};
    thisDiscover.data.songs = songs;
    thisDiscover.data.authors = authors;
    thisDiscover.data.categories = categories;

    console.log('thisDiscover.data.categories', thisDiscover.data.categories);

    thisDiscover.getElements(element);
    thisDiscover.renderSonginMenu();

  }

  getElements(element){
     
    const thisDiscover = this;

    thisDiscover.dom = {};
    thisDiscover.dom.wrapper = element;
    thisDiscover.dom.songDiscover = document.querySelector(select.containerOf.discoverPage);
  }

  renderSonginMenu(){
    const thisDiscover = this;

    const generatedHTML = templates.song(thisDiscover.data.songs);
    thisDiscover.element = utils.createDOMFromHTML(generatedHTML);
    const wrapper = document.querySelector(select.containerOf.discoverPage);
    wrapper.appendChild(thisDiscover.element);
  }


}

export default Discover;