window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.main__link'),
    menuItem = document.querySelectorAll('.main__l'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('main__link_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('main__link_active');
        })
    })
})

