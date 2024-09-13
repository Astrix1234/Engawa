'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const designSection = document.querySelector('#design-office');
  const leftTexts = document.querySelectorAll('.design__text-left div');
  const rightTexts = document.querySelectorAll('.design__text-right div');
  const headerHeight = 150;
  const margin = 150;
  console.log(leftTexts);

  function handleScroll() {
    const sectionTop = designSection.getBoundingClientRect().top;
    const sectionBottom = designSection.getBoundingClientRect().bottom;
    const viewportHeight = window.innerHeight;

    if (sectionTop <= headerHeight && sectionBottom > headerHeight) {
      leftTexts.forEach(text => text.classList.add('slide-in-left'));
      rightTexts.forEach(text => text.classList.add('slide-in-right'));
    }
    if (sectionBottom < 0 + margin || sectionTop > viewportHeight - margin) {
      leftTexts.forEach(text => text.classList.remove('slide-in-left'));
      rightTexts.forEach(text => text.classList.remove('slide-in-right'));
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();
});
