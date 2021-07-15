const openMenu = document.getElementById('hamburger');
const closeMenu = document.getElementById('close');
const navList = document.getElementById('nav-list');
const toggle = document.getElementById('toggle');
const btnLearn = document.getElementById('btn-learn');
const btnFree = document.getElementById('btn-free');
const btnLogin = document.getElementById('btn-login');
const btnSign = document.getElementById('btn-sign');
const arrowRotaion = document.getElementById('arrow');
openMenu.addEventListener('click', () => {
  navList.classList.add('showmenu');
  navList.classList.remove('hidden');
  openMenu.classList.add('hidden');
  closeMenu.classList.remove('hidden');
});

closeMenu.addEventListener('click', () => {
  navList.classList.remove('showmenu');
  navList.classList.add('hidden');
  openMenu.classList.remove('hidden');
  closeMenu.classList.add('hidden');
});

toggle.addEventListener('click', () => {
  document.getElementById('toggle-menu').classList.toggle('hidden');
  arrowRotaion.classList.toggle('arrow-rot');
});

btnLearn.addEventListener('click', () => {
  btnLearn.classList.add('btn-main-active');
  btnFree.classList.remove('btn-main-active');
});

btnFree.addEventListener('click', () => {
  btnLearn.classList.remove('btn-main-active');
  btnFree.classList.add('btn-main-active');
});

btnLogin.addEventListener('click', () => {
  btnLogin.classList.add('btn-primary-active');
  btnSign.classList.remove('btn-primary-active');
});

btnSign.addEventListener('click', () => {
  btnLogin.classList.remove('btn-primary-active');
  btnSign.classList.add('btn-primary-active');
});
