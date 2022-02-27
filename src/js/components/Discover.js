
class Discover {
  constructor(element, songs, authors, categories) {
    const thisDiscover = this;

    thisDiscover.data = {};
    thisDiscover.data.songs = songs;
    thisDiscover.data.authors = authors;
    thisDiscover.data.categories = categories;

    thisDiscover.getElements(element);

  }

  getElements(element){
     
    const thisDiscover = this;

    thisDiscover.dom = {};
    thisDiscover.dom.wrapper = element;

  }
}

export default Discover;