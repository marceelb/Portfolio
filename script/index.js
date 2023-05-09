const root = document.querySelector('html');
const switchBtn = document.querySelector('.switch-btn');
const content = document.querySelector('.content');
const menuToggle = document.querySelector('.menu-toggle');
const menuResponsive = document.querySelector('.menu-responsive')

switchBtn.addEventListener('click', () => {
    root.classList.toggle('dark');
});


menuToggle.addEventListener('click', () => {
    menuResponsive.classList.toggle('menu-responsive--show');
});
