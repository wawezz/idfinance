import 'bootstrap';
import './styles.scss';
import 'normalize.css';
import $ from 'jquery';

$(function () {
  $(".fileGetter").change(function () {
    var fileName = $(this).val().split('\\').pop();
    $(".fileSetter").html(fileName);
  });

  $(document).on("mouseenter", ".header__menuItem", function () {
    if(!$('.header__nav').hasClass('burgered') && $(this).children('.header__menuDropdown').length > 0) $(this).children('.header__menuDropdown').toggleClass('collapsed');
  });

  $(document).on("mouseleave", ".header__menuItem", function () {
    if(!$('.header__nav').hasClass('burgered') && $(this).children('.header__menuDropdown').length > 0 )  $(this).children('.header__menuDropdown').toggleClass('collapsed');
  });

  $(document).on('click', '.header__burger', function(){
    $('.header__nav').toggleClass('collapsed');
    $('.header__nav').toggleClass('burgered');
    $('body').toggleClass('noscroll');
  });
  $(document).on('click', '.header__close', function(){
    $('.header__nav').toggleClass('collapsed');
    $('.header__nav').toggleClass('burgered');
    $('body').toggleClass('noscroll');
  });

  $(document).on('click', '.header__nav.burgered .header__menuLink', function(e){
    var element = $(this).parent('.header__menuItem').children('.header__menuDropdown');
    if(element.length > 0){
      e.preventDefault();
      element.toggleClass('collapsed');
    }
  });

  $(document).on('click', '.topBanner__down', function(){
    var top = $(".topBanner").offset().top;
    var height = $(".topBanner").height();

    var body = $("html, body");
    body.stop().animate({scrollTop:top + height + 1}, 500, 'swing', function() { 
       
    });

//    window.scrollTo(0, top + height + 1);
  });

});
