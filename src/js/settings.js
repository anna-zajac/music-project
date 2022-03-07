
export const select = {
  templateOf: {
    songs: '#template-song',
    category: '#template-category',
    select: '#template-category-select',
  },
  containerOf: {
    pages: '#pages',
    songList: '.songs_list',
    homePage: '.home-wrapper',
    searchPage: '.search-wrapper',
    discoverPage: '.discover-wrapper',
  },
  nav: {
    links: '.main-nav a',
  },

  form: {
    selectCategory: '#category',
    button: '.search-button',
    input: '#search_song',
    found: '.found',
  },
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3131' : ''),
    songs: 'songs',
    authors: 'authors',
  },
};

export const templates = {
  song: Handlebars.compile(document.querySelector(select.templateOf.songs).innerHTML),
  songCategoryTemplate: Handlebars.compile(document.querySelector(select.templateOf.category).innerHTML),
  selectCategoryTemplate: Handlebars.compile(document.querySelector(select.templateOf.select).innerHTML),
};