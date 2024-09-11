'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const offerBar = document.querySelector('.offer');
  const mainPageSection = document.querySelector('#main-page');
  const headerHeight = document.querySelector('header').offsetHeight;

  window.addEventListener('scroll', () => {
    const mainPageTop = mainPageSection.getBoundingClientRect().top;

    if (
      mainPageTop <= headerHeight &&
      window.scrollY < mainPageSection.offsetTop + 10
    ) {
      offerBar.classList.remove('disappear');
      offerBar.classList.add('appear');
    } else {
      offerBar.classList.remove('appear');
      offerBar.classList.add('disappear');
    }
  });
});
