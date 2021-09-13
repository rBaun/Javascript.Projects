const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const aboutImage = document.getElementById('about-image');
const projectsImage = document.getElementById('projects-image');
const contactImage = document.getElementById('contact-image');
const textBox = document.getElementById('text-box');

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

function changeImagesThemeTo(theme) {
    aboutImage.src = `img/about-${theme}.svg`;
    projectsImage.src = `img/projects-${theme}.svg`;
    contactImage.src = `img/contact-${theme}.svg`;
}

function switchThemeTo(theme) {
    theme === DARK_THEME ? toggleSwitch.checked = true : toggleSwitch.checked = false;
    document.documentElement.setAttribute('data-theme', theme);
    changeImagesThemeTo(theme);
    nav.style.backgroundColor = theme === LIGHT_THEME ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = theme === LIGHT_THEME ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = theme === LIGHT_THEME ? 'Light Mode' : 'Dark Mode';

    theme === LIGHT_THEME ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
                        : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
}

function onToggleTheme(event) {
    if(event.target.checked) {
        localStorage.setItem('theme', DARK_THEME);
        switchThemeTo(DARK_THEME);
    }
    else {
        localStorage.setItem('theme', LIGHT_THEME);
        switchThemeTo(LIGHT_THEME);
    }
}

toggleSwitch.addEventListener('change', onToggleTheme);

const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
    switchThemeTo(currentTheme);
}