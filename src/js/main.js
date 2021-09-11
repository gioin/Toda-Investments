// Burger menu

const burger = document.querySelector('.burger');
const nav = document.querySelector('.bottom-part');

burger.addEventListener('click', function () {
  burger.classList.toggle('change');
  nav.classList.toggle('active');
});
