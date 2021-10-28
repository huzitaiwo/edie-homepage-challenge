// refrences from the DOM
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const designGrids = document.querySelectorAll('.design-image-grid > div');
const cards = document.querySelectorAll('.card');
const brands = document.querySelectorAll('.card__brand');
const cardButtons = document.querySelectorAll('.card__button');

// reponsive navbar

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  
    //   toggle hamburger and close icon
    if (navLinks.classList.contains("active")) {
      hamburger.src = "./icons/close.svg";
    } else {
      hamburger.src = "./icons/hamburger.svg";
    }
});

// checked the viewport for the interaction: 1000px and above;
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