import '../../components/base/base';
import './styles.scss';
import $ from 'jquery';
import 'slick-carousel';

$(".infoBlock__slickWrapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
});