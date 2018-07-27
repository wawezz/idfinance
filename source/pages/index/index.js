import '../../components/base/base';
import './styles.scss';
import $ from 'jquery';
import 'slick-carousel';

$(".slider-wrapper").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
});