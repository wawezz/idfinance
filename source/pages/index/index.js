import '../../components/base/base';
import './styles.scss';
import $ from 'jquery';
import 'slick-carousel';

$(".slider-wrapper").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 980,
            settings: {
                slidesToShow: 3,
                dots: false,
                prevArrow: false,
                nextArrow: false
            }
        },
        {
            breakpoint: 740,
            settings: {
                slidesToShow: 2,
                dots: false,
                prevArrow: false,
                nextArrow: false
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                dots: false,
                prevArrow: false,
                nextArrow: false
            }
        }
    ]
});