'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const investorSection = document.querySelector('#investor');
  const investorList = document.querySelector('.investor__list');
  const headerHeight = 150; // Wysokość nagłówka fixed

  function handleScroll() {
    const sectionTop = investorSection.getBoundingClientRect().top;
    const sectionBottom = investorSection.getBoundingClientRect().bottom;
    const viewportHeight = window.innerHeight;

    // Sprawdzamy, czy sekcja jest w 1/3 wysokości ekranu od góry
    if (
      sectionTop <= viewportHeight / 3 + headerHeight &&
      sectionBottom > headerHeight
    ) {
      investorList.classList.add('visible'); // Dodaje klasę, która pokazuje listę
    } else {
      investorList.classList.remove('visible'); // Usuwa klasę, ukrywając listę
    }
  }

  // Nasłuchiwanie zdarzenia scroll
  window.addEventListener('scroll', handleScroll);

  // Inicjalizacja na starcie, jeśli sekcja jest już w zasięgu widoku
  handleScroll();
});
