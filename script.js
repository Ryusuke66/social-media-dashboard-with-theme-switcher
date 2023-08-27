let themeSwitch = document.querySelector('input[type=checkbox]');
let body = document.querySelector('body');
let r = document.querySelector(':root');
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () => {
    themeSwitch.checked = true;
    body.classList.add('dark');
    r.style.setProperty('--primaryColor', 'white');
    r.style.setProperty('--secondaryColor', 'hsl(235, 29%, 69%)');
    localStorage.setItem('dark-mode','enabled');
};

const disableDarkMode = () => {
    themeSwitch.checked = false;
    body.classList.remove('dark');
    r.style.setProperty('--primaryColor', 'hsl(230, 17%, 14%)');
    r.style.setProperty('--secondaryColor', 'hsl(228, 12%, 44%)');
    localStorage.setItem('dark-mode', 'disabled');
};

if (darkMode === "enabled") {
    enableDarkMode();
} else {
    disableDarkMode();
}

themeSwitch.addEventListener('click', () => {
    darkMode = localStorage.getItem('dark-mode');
    if(darkMode === 'disabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});