const openMenu = document.getElementById('hamburger');
const closeMenu = document.getElementById('close');
const navList = document.getElementById('nav-list');
const toggle = document.getElementById('toggle');

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

// toggle.addEventListener('click', () => {
//   document.getElementById('toggle-menu').classList.toggle('hidden');
// });
