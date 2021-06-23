const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchButton = document.querySelector('#theme-switch-toggle');

switchButton.addEventListener('change', switchThemeonScreen);


function switchThemeonScreen(event) {
    if (event.target.checked === true) {
       changeClassOnBody(Theme.DARK, Theme.LIGHT)
    } else {
       changeClassOnBody(Theme.LIGHT, Theme.DARK)
    }
}


function changeClassOnBody(place, cancel) {
   document.body.classList.add(place),
   document.body.classList.remove(cancel);
}

