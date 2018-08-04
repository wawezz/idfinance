import 'bootstrap';
import './styles.scss';
import 'normalize.css';
import $ from 'jquery';

$(function() {
    $(".fileGetter").change(function (){
      var fileName = $(this).val().split('\\').pop();
      $(".fileSetter").html(fileName);
    });
 });