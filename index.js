const closeIcon = document.querySelector(".close-menu__icon");
const mobileMenu = document.querySelector(".mobile-menu");
const menuIcon = document.querySelector(".hamburger-menu__icon");

closeIcon.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
})

menuIcon.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
})