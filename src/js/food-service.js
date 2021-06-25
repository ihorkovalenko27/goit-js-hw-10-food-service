import menuItems from '../menu.json';
import foodServiceCards from '../templates/food-service.hbs';

// WORK WITH HANDLEBARS

const lisrService = document.querySelector('.js-menu');
const serviceMarkup = createServiceMarkUp(menuItems);

lisrService.insertAdjacentHTML('beforeend', serviceMarkup);

function createServiceMarkUp(menuItems) {
  return menuItems.map(foodServiceCards).join('');
}

// WORK WITH SWITCH

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchButton = document.querySelector('#theme-switch-toggle');

switchButton.addEventListener('change', switchThemeonScreen);

function switchThemeonScreen(event) {
  if (event.target.checked) {
    changeClassOnBody(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    changeClassOnBody(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

window.onload = checkTheme();

function checkTheme() {
  const localStorageData = localStorage.getItem('theme');

  if (localStorageData !== null && localStorageData === Theme.DARK) {
    document.body.className = localStorageData;
    switchButton.checked = true;
  }
}

function changeClassOnBody(place, cancel) {
  document.body.classList.add(place), document.body.classList.remove(cancel);
}
