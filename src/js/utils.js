
const utils = {}; // eslint-disable-line no-unused-vars

utils.createDOMFromHTML = function(htmlString) {
  let div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
};

utils.resetWrapper = function(wrapper){
  wrapper.innerHTML = '';
};

utils.initPlayer = function(select){
  console.log('test');
  // eslint-disable-next-line no-undef
  GreenAudioPlayer.init({
    selector: select + ' .player', // inits Green Audio Player on each audio container that has class "player"
    stopOthersOnPlay: true
  });

};

utils.makeid= function(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};


export default utils;