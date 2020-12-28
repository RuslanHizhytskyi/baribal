// import './helpers/postDate';
import scrollSmooth from './helpers/smooth-scroll.js';
import burger from './modules/header';
import mainJS from './modules/main';
import gallery from './modules/gallery';
import mapLoad from './modules/contacs';

function main() {
  scrollSmooth();
  burger();
  mainJS();
  gallery();
  mapLoad();
}

main();

// if (document.documentElement.clientWidth < 480) {
//   window.addEventListener('scroll',
//     function () {
//       return setTimeout(main, 1000);
//     }, {
//       once: true
//     });
// } else {
//   main();
// };
