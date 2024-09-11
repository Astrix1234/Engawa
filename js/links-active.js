'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.menu__item');

  function setActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + 150 < sections[index].offsetTop) {}

    navLinks.forEach(link => link.classList.remove('active'));

    if (index > 0) {
      navLinks[index - 1].classList.add('active'); //
    }
  }

  setActiveLink();
  window.addEventListener('scroll', setActiveLink); //
});
