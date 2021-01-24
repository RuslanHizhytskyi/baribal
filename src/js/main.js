// import './helpers/postDate';
import scrollSmooth from './helpers/smooth-scroll.js';
import burger from './modules/header';
import mainJS from './modules/main';
import gallery from './modules/gallery';
import mapLoad from './modules/contacs';
import master from './modules/masters'


scrollSmooth();
burger();
mainJS();

function mainWait() {
  gallery();
  mapLoad();
  master();
}

if (document.documentElement.clientWidth < 480) {
  window.addEventListener('scroll',
    function () {
      return setTimeout(mainWait, 1000);
    }, {
      once: true
    });
} else {
  mainWait();
}
