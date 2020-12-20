// import './helpers/postDate';
import scrollSmooth from './helpers/smooth-scroll.js';
import burger from './modules/header';
import writeText from './modules/main';

function main() {
  scrollSmooth();
  burger();
  writeText();
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
