const root = document.querySelector('html');
const switchBtn = document.querySelector('.switch-btn');
const content = document.querySelector('.content');
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu2')

switchBtn.addEventListener('click', () => {
    root.classList.toggle('dark');
});


menuToggle.addEventListener('click', () => {
    menu.classList.toggle('menu2--show');
});
