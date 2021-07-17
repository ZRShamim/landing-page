const openclose = document.getElementById('nav-toggle');
const openMenu = document.getElementById('hamburger');
const closeMenu = document.getElementById('close');
const navList = document.getElementById('nav-list');

const toggle1 = document.getElementById('toggle-1');
const toggle2 = document.getElementById('toggle-2');
const toggle3 = document.getElementById('toggle-3');

const btnLearn = document.getElementById('btn-learn');
const btnFree = document.getElementById('btn-free');
const btnLogin = document.getElementById('btn-login');
const btnSign = document.getElementById('btn-sign');
const arrowRotation = document.getElementById('arrow');

// Main Menu Open-Close
openclose.addEventListener('click', () => {
  closeMenu.classList.toggle('hidden');
  openMenu.classList.toggle('hidden');
  navList.classList.toggle('show-menu');
});

// submenu
toggle1.addEventListener('click', () => {
  document.getElementById('toggle-menu-1').classList.toggle('hidden');
  // arrowRotation.classList.toggle('arrow-rot');
});

toggle2.addEventListener('click', () => {
  document.getElementById('toggle-menu-2').classList.toggle('hidden');
  // arrowRotation.classList.toggle('arrow-rot');
});

toggle3.addEventListener('click', () => {
  document.getElementById('toggle-menu-3').classList.toggle('hidden');
  // arrowRotation.classList.toggle('arrow-rot');
});

// btn Dynamic
btnLearn.addEventListener('click', () => {
  btnLearn.classList.add('btn-main-active');
  btnFree.classList.remove('btn-main-active');
});

btnFree.addEventListener('click', () => {
  btnLearn.classList.remove('btn-main-active');
  btnFree.classList.add('btn-main-active');
});
