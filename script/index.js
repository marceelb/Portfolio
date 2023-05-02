const root = document.querySelector('html');
const switchBtn = document.querySelector('.switch-btn');
const content = document.querySelector('.content');

switchBtn.addEventListener('click', () => {
    root.classList.toggle('dark');
})