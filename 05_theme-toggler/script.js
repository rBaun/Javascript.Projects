const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const aboutImage = document.getElementById('about-image');
const projectsImage = document.getElementById('projects-image');
const contactImage = document.getElementById('contact-image');
const textBox = document.getElementById('text-box');

function changeImagesThemeTo(theme) {
    aboutImage.src = `img/about-${theme}.svg`;
    projectsImage.src = `img/projects-${theme}.svg`;
    contactImage.src = `img/contact-${theme}.svg`;
}

function onLightModeSelected() {
    document.documentElement.setAttribute('data-theme', 'light');
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    changeImagesThemeTo('light');
}

function onDarkModeSelected() {
    document.documentElement.setAttribute('data-theme', 'dark');
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    changeImagesThemeTo('dark');
}

function onToggleTheme(event) {
    if(event.target.checked) {
        localStorage.setItem('theme', 'dark');
        onDarkModeSelected();
    }
    else {
        localStorage.setItem('theme', 'light');
        onLightModeSelected();
    }
}

toggleSwitch.addEventListener('change', onToggleTheme);

const currentTheme = localStorage.getItem('theme');
if(currentTheme === 'light') {
    onLightModeSelected();
}
if(currentTheme === 'dark') {
    toggleSwitch.checked = true;
    onDarkModeSelected();
}