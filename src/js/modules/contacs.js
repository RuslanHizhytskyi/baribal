function mapLoad() {
  document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.querySelector('.map__iframe');
    iframe.setAttribute('src', iframe.getAttribute('data-src'));
  });
}

export default mapLoad;