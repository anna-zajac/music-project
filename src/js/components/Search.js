import {select, templates} from '../settings.js';
import utils from '../utils.js';


class Search{
  constructor(element, songs, authors, categories){
    const thisSearch = this;

    thisSearch.data = {};
    thisSearch.data.songs = songs;
    thisSearch.data.authors = authors;
    thisSearch.data.categories = categories;

    thisSearch.getElements(element);
    thisSearch.renderCategories();
    this.renderCategorySelect();
  }

  getElements(element) {
    const thisSearch = this;

    thisSearch.dom ={};
    thisSearch.dom.wrapper = element;
    thisSearch.dom.selectCategory = document.querySelector(select.form.selectCategory);
    thisSearch.dom.searchSong = document.querySelector(select.containerOf.searchPage);
  }

  renderCategorySelect(){
    const thisSearch = this;
    const generatedHTML = templates.selectCategoryTemplate(thisSearch.data.categories);
    thisSearch.categoryElem = utils.createDOMFromHTML(generatedHTML);

    const selectContainer = document.querySelector(select.containerOf.searchPage);
    selectContainer.appendChild(thisSearch.categoryElem);
  }

  renderCategories(){
    const thisSearch = this;

    for(let category of thisSearch.data.categories){
      const linkHTML = {name: category};
      const categoriesSelect = templates.selectCategoryTemplate(linkHTML);

      const categorySelectDOM = utils.createDOMFromHTML(categoriesSelect);

      thisSearch.dom.selectCategory.appendChild(categorySelectDOM);
    }

  }
}

export default Search;