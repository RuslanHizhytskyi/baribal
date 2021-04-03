function burger() {
  const burger = document.querySelector('.header__burger');
  // header__logo_wrapper
  document.querySelector('.header__logo_wrapper').addEventListener('click', (evt) => evt.preventDefault());
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
}


export default burger;
