$(function(){
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
    arrows: true,
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });
})