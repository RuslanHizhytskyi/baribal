function master() {
  $('.master').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    prevArrow: "<span class='master__arrow master__arrow_prev'><svg viewBox='0 0 34 40' width='34' height='40'><use xlink:href='#arrow_prev'></use></svg></span>",
    nextArrow: "<span class='master__arrow master__arrow_next'><svg viewBox='0 0 34 40' width='34' height='40'><use xlink:href='#arrow_next'></use></svg></span>",
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })
}


export default master;
