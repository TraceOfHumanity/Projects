$(function () {
  $('.slider1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    fade: true,
    asNavFor: '.slider2'
  });
  $('.slider2').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider1',
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    arrows: true,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1131,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          vertical: false,
          verticalSwiping: false,
          centerMode: false,

        }
      },
    ]
  });
  $('.slider__video').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    vertical: false,
    arrows: false,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    // variableWidth: true,
    // centerMode: true,
    rows: 2,
    responsive: [
      {
        breakpoint: 1131,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          rows: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          slidesPerRow: 1,
          rows: 1,
          arrows: true,
        }
      },

    ]
  });
})