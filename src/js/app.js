import {settings, classNames} from './settings.js';

const app = {

  initData: function(){
    const thisApp = this;

    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.songs;

    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      })
      .then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);

        thisApp.data.songs = parsedResponse;

        thisApp.initSongs();
      });
    console.log('thisApp.data', JSON.stringyfy(thisApp.data));
  },

  init: function(){
    const thisApp = this;
    console.log('*** App starting ***');
    console.log('thisApp:', thisApp);
    console.log('classNames:', classNames);
    console.log('settings:', settings);

    thisApp.initData();
  }

};

app.init();