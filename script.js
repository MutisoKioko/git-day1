const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    console.log('Menu toggle clicked');
    navLinks.classList.toggle('active');
});