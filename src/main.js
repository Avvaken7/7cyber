import './style.css';

import 'swiper/css';
import 'swiper/css/navigation';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
        modules: [Navigation],
        direction: 'horizontal',
        loop: true,
        slidesPerView: 6,
        navigation: {
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
        },
});