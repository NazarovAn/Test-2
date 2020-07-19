const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
const registartionButton = document.querySelector('.registration-button');
const registartionForm = document.querySelector('.registartion-form');
const closeButton = document.querySelector('.close');
const dimmer = document.getElementById('dimmer');

registartionButton.addEventListener('click', (ev) => {
  ev.preventDefault();
  registartionForm.classList.remove('hidden');
  dimmer.style.display = 'block';
});

closeButton.addEventListener('click', (ev) => {
  ev.preventDefault();
  registartionForm.classList.add('hidden');
  dimmer.style.display = 'none';
})

function checkScreenWidth() {
  if (screen.width < 600) {
    menu.classList.add('hidden');
    return;
  };

  menu.classList.remove('hidden');
  hamburgerMenu.classList.add('hidden');
};

checkScreenWidth();

window.addEventListener('resize', () => {
  checkScreenWidth();
});

hamburgerMenu.addEventListener('click', () => menu.classList.toggle('hidden'));


const imagesSrc = [
  './img/image.png',
  './img/image(reverse).png',
  './img/image(inverted).png',
]

const imageContainer = document.querySelector('.image-container');
const img = imageContainer.querySelector('img');

document.querySelectorAll('.slider-element').forEach((item, index) => {
  item.addEventListener('click', () => img.src = imagesSrc[index]);
});
