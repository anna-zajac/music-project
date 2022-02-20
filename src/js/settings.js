
export const select = {
  templateOf: {
    songs: '#template-song',
  },
  containerOf: {
    pages: '#pages',
    songList: '.songs_list',
    homePage: '.home-wrapper',
    search: '.search-wrapper',
    discover: '.discover-wrapper',
  },
  nav: {
    links: '.main-nav a',
  }
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
  },
};

export const templates = {
  homeSong: Handlebars.compile(document.querySelector(select.templateOf.songs).innerHTML),
};