const designGrids = document.querySelectorAll('.design-image-grid > div');
const cards = document.querySelectorAll('.card');
const brands = document.querySelectorAll('.card__brand');
const cardButtons = document.querySelectorAll('.card__button');

const desktop = window.matchMedia("(min-width: 1000px)")

if(desktop.matches) {

    cards.forEach((card,i) => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('active');
            brands[i].style.animation = 'scope_up 1.5s ease-in-out 2 alternate forwards';
            cardButtons[i].classList.add('active');
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('active');
            brands[i].style.animation = '';
            cardButtons[i].classList.remove('active');
        });
    });
    
};