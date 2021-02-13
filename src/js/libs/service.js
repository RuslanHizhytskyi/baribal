document.addEventListener('DOMContentLoaded', () => {


  const nodesForTranslate = document.querySelectorAll('[data-lang-ua]');
  const uaBtn = document.getElementById('ua');
  const ruBtn = document.getElementById('ru');

  let lang;

  if (localStorage.getItem('lang') === null) {
    lang = 'ru';
    localStorage.setItem('lang', lang);
  } else if (localStorage.getItem('lang') == 'ua') {
    translateToUA();
  }

  function changeLanguage(lang) {
    nodesForTranslate.forEach(el => el.innerHTML = el.getAttribute('data-lang-' + lang));
  }

  function translateToRU() {
    changeLanguage('ru');
    ruBtn.classList.add('header__language_active');
    uaBtn.classList.remove('header__language_active');
    lang = 'ru';
  }
  function translateToUA() {
    changeLanguage('ua');
    ruBtn.classList.remove('header__language_active');
    uaBtn.classList.add('header__language_active');
    lang = 'ua';
  }

  document.querySelector('.header__language').addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target.classList.contains('header__language_ru') && lang !== 'ru') {
      translateToRU()
    } else if (evt.target.classList.contains('header__language_ua') && lang !== 'ua') {
      translateToUA()
    }
    localStorage.setItem('lang', lang);
  });




  const burger = document.querySelector('.header__burger');

  function stopScroll() {
    if (burger.classList.contains('header__burger_active')) {
      document.body.classList.add('no_scroll');
    } else {
      document.body.classList.remove('no_scroll');
    }
  }
  document.querySelector('.header__burger_icon').addEventListener('click', (evt) => {
    burger.classList.toggle('header__burger_active');
    stopScroll();
  });
  document.querySelectorAll('.header__nav_item a').forEach(el => el.addEventListener('click', () => {
    burger.classList.remove('header__burger_active');
    stopScroll();
  }));


  const iframe = document.querySelector('.map__iframe');
  iframe.setAttribute('src', iframe.getAttribute('data-src'));



});

