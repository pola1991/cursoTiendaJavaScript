const menuEmail= document.querySelector('.navbar-email');
const menu= document.querySelector('.desktop-menu')


menuEmail.addEventListener('click', ToggleDesktopMenu);

function ToggleDesktopMenu() {
  menu.classList.toggle('inactive')
}

