'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const investorSection = document.querySelector('#investor');
  const investorList = document.querySelector('.investor__list');
  const headerHeight = 150;
  const margin = 150;

  function handleScroll() {
    const sectionTop = investorSection.getBoundingClientRect().top;
    const sectionBottom = investorSection.getBoundingClientRect().bottom;
    const viewportHeight = window.innerHeight;

    if (
      sectionTop <= viewportHeight / 3 + headerHeight &&
      sectionBottom > headerHeight
    ) {
      investorList.classList.add('visible');
    }

    if (sectionBottom < 0 + margin || sectionTop > viewportHeight - margin) {
      investorList.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', handleScroll);

  handleScroll();
});
