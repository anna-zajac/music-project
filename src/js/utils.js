
const utils = {}; // eslint-disable-line no-unused-vars

utils.createDOMFromHTML = function(htmlString) {
  let div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
};

utils.resetWrapper = function(wrapper){
  wrapper.innerHTML = '';
};

utils.initPlayer = function(){
  // eslint-disable-next-line no-undef
  GreenAudioPlayer.init({
    selector: '.player', // inits Green Audio Player on each audio container that has class "player"
    stopOthersOnPlay: true
  });

};

export default utils;