function gallery() {
  const galleryWrapper = document.querySelector('.gallery__wrapper');
  const photoContainer = document.querySelector('.photo');
  function cloneSlides() {
      const bigPhotoSlider = galleryWrapper.cloneNode(true);
      bigPhotoSlider.classList.remove('gallery__wrapper');
      bigPhotoSlider.classList.add('photo__wrapper');
      photoContainer.appendChild(bigPhotoSlider);
      document.querySelectorAll('.photo__wrapper .gallery__wrapper_img').forEach(item => {
        item.classList.remove('gallery__wrapper_img');
        item.classList.add('photo__wrapper_img');
      })
  }
  function initGallerySlider() {
    $('.gallery__wrapper').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: "<span class='gallery__arrow gallery__arrow_prev'><svg viewBox='0 0 34 40' width='34' height='40'><use xlink:href='#arrow_prev'></use></svg></span>",
      nextArrow: "<span class='gallery__arrow gallery__arrow_next'><svg viewBox='0 0 34 40' width='34' height='40'><use xlink:href='#arrow_next'></use></svg></span>",
      dots: true,
      rows: 2,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            dots: false
          }
        },
      ]
    })
  }
  function initPhotoSlider() {
    $('.photo__wrapper').slick({

      arrows: true,
      prevArrow: "<span class='photo__arrow photo__arrow_prev'><svg viewBox='0 0 34 40' width='34' height='40'><use xlink:href='#arrow_prev'></use></svg></span>",
      nextArrow: "<span class='photo__arrow photo__arrow_next'><svg viewBox='0 0 34 40' width='34' height='40'><use xlink:href='#arrow_next'></use></svg></span>",
      dots: false,
    })
  }
  function openBigSlider(slideIndex) {
    console.log(slideIndex);
    $('.photo__wrapper').slick('slickGoTo', slideIndex );
    // setTimeout (() => {
      document.querySelector('.photo').classList.add('photo_active');
    // }, 250)
  }
  function closeBigSlider() {
    document.querySelector('.photo').classList.remove('photo_active');
  }


  cloneSlides();
  initGallerySlider();
  initPhotoSlider();


  galleryWrapper.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('gallery__img')) {
      openBigSlider(evt.target.getAttribute('data-index'));
    }
  });

  photoContainer.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('photo') || evt.target.classList.contains('photo__close')) {
      closeBigSlider();
    }
  });

}



export default gallery;
