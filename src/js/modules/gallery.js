function gallery() {
  const gallery = document.querySelector('.gallery__wrapper'),  
        bigPhotoWrapper = gallery.querySelector('.photo'),
        bigPhoto = gallery.querySelector('.photo__img'),
        images = gallery.querySelectorAll('.gallery__img'),
        arrowNext = gallery.querySelector('.photo__arrow_next'),
        arrowPrev = gallery.querySelector('.photo__arrow_prev'),
        close = gallery.querySelector('.photo__close');

  images.forEach((el, index) => {
    el.setAttribute('data-index', index + 1);
  });

  function closePhoto() {
    bigPhoto.setAttribute('src', '');
    bigPhoto.setAttribute('data-index', '');
    bigPhotoWrapper.classList.remove('photo_active');
  }

  gallery.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('gallery__img')) {
      bigPhoto.setAttribute('src', evt.target.getAttribute('src'));
      bigPhoto.setAttribute('data-index', evt.target.getAttribute('data-index'));
      bigPhotoWrapper.classList.add('photo_active');
    } else if (evt.target.classList.contains('photo_active')) {
      closePhoto();
    }
  });

  close.addEventListener('click', closePhoto);

  function changeSlide(n) {
    let index = +bigPhoto.getAttribute('data-index');
    if ((index + n) < 1) {
      index = images.length;
    } else if ((index + n) > images.length) {
      index = 1;
    } else {
      index += n;
    }
    bigPhoto.setAttribute('data-index', index);
    bigPhoto.setAttribute('src', images[index - 1].getAttribute('src'));
  }

  arrowNext.addEventListener('click', () => {
    changeSlide(1);
  });
  arrowPrev.addEventListener('click', () => {
    changeSlide(-1);
  });

}



export default gallery;