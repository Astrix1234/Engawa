'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.carousel', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 4,
    speed: 3000,
    centeredSlides: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    freeMode: {
      enabled: true,
      momentum: false,
    },
    grabCursor: true,
    slideClass: 'carousel__item',
    wrapperClass: 'carousel__track',
  });
  swiper.el.addEventListener('click', () => {
    swiper.autoplay.start();
  });
});
