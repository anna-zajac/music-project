import {select, templates} from '../settings.js';
import utils from '../utils.js';


class Search{
  constructor(songs, authors, categories){
    const thisSearch = this;

    thisSearch.data = {};
    thisSearch.data.songs = songs;
    thisSearch.data.authors = authors;
    thisSearch.data.categories = categories;

    thisSearch.getElements();
    thisSearch.renderCategories();


  }

  getElements(element) {
    const thisSearch = this;

    thisSearch.dom ={};
    thisSearch.dom.wrapper = element;
    thisSearch.dom.selectCategory = document.querySelector(select.form.selectCategory);
    thisSearch.dom.searchSong = document.querySelector(select.containerOf.searchPage);
  }

  renderView(){
    const thisSearch = this;

    const generatedHTML = templates.songCategoryTemplate(thisSearch.data.categories);
    thisSearch.element = utils.createDOMFromHTML(generatedHTML);

    const categoryContainter = document.querySelector(select.containerOf.searchPage);

    categoryContainter.appendChild(thisSearch.element);
  
  }

}

export default Search;