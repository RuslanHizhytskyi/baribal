function burger() {
  const burger = document.querySelector('.header__burger');
  function stopScroll() {
    if (burger.classList.contains('header__burger_active')) {
      document.body.style.cssText = `
        height: 100vh;
        overflow: hidden;
      `;
    } else {
      document.body.style.cssText = '';
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