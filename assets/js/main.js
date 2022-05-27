/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('#nav-menu');
const navOpen = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');

/*===== MENU SHOW  =====*/
// Validate if constant exists
if (navOpen) {
  navOpen.addEventListener('click', () => navMenu.classList.add('show-menu'));
}

/*===== MENU HIDDEN  =====*/
// Validate if constant exists
if (navClose) {
  navClose.addEventListener('click', () =>
    navMenu.classList.remove('show-menu')
  );
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = e => {
  e.preventDefault();
  navMenu.classList.remove('show-menu');
};

// Validate if constant exists
if (navLink.length !== 0) {
  navLink.forEach(link => link.addEventListener('click', linkAction));
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  distance: '90px',
  duration: 3000,
});

sr.reveal(`.home__data`, { origin: 'top', delay: 400 });
sr.reveal(`.home__img`, { origin: 'bottom', delay: 600 });
sr.reveal(`.home__footer`, { origin: 'bottom', delay: 800 });
