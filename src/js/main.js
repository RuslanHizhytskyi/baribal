// import './helpers/postDate';
import scrollSmooth from './helpers/smooth-scroll.js';
import burger from './modules/header';
import language from './modules/language';
// import mainJS from './modules/main';
import gallery from './modules/gallery';
import mapLoad from './modules/contacs';
import master from './modules/masters'


scrollSmooth();
burger();
// mainJS();
language();

function mainWait() {
  gallery();
  mapLoad();
  master();
}

if (document.documentElement.clientWidth < 480) {
  window.addEventListener('scroll',
    function () {
      return setTimeout(mainWait, 200);
    }, {
      once: true
    });
} else {
  mainWait();
}
