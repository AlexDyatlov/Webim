$(function(){

  $('.menu__btn').on('click', function(){
    $('.menu__list, .header__info').slideToggle(0);
  });

  new WOW().init();
  
});