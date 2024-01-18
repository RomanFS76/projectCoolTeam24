let burgerMenu = document.querySelector('.burger-menu');
let backdrop = document.querySelector('.backdrop');
let closeButton = document.querySelector('.close-button');

burgerMenu.addEventListener('click', openMobMenu);

function openMobMenu () {
    backdrop.classList.toggle('is-open');
}

closeButton.addEventListener('click', closeMobMenu);

function closeMobMenu () {
    backdrop.classList.remove('is-open');
}

