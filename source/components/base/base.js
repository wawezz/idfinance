import 'bootstrap';
import './styles.scss';
import 'normalize.css';
import $ from 'jquery';

$(function() {
    $(".fileGetter").change(function (){
      var fileName = $(this).val().split('\\').pop();
      $(".fileSetter").html(fileName);
    });

    $(document).on("mouseenter", ".header__menuItem", function(){
      $(this).children('.header__menuDropdown').slideDown(400);
    });

    $(document).on("mouseleave", ".header__menuItem", function(){
      $(this).children('.header__menuDropdown').slideUp(400);
    });
 });