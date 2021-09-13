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

function toggleDarkLightTheme(theme) {
    theme === 'dark' ? toggleSwitch.checked = true : toggleSwitch.checked = false;
    document.documentElement.setAttribute('data-theme', theme);
    changeImagesThemeTo(theme);
    nav.style.backgroundColor = theme === 'light' ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = theme === 'light' ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = theme === 'light' ? 'Light Mode' : 'Dark Mode';

    theme === 'light' ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
                        : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
}

function onToggleTheme(event) {
    if(event.target.checked) {
        localStorage.setItem('theme', 'dark');
        toggleDarkLightTheme('dark');
    }
    else {
        localStorage.setItem('theme', 'light');
        toggleDarkLightTheme('light');
    }
}

toggleSwitch.addEventListener('change', onToggleTheme);

const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
    toggleDarkLightTheme(currentTheme);
}