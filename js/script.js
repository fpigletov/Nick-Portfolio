window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),            
            burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });
});


