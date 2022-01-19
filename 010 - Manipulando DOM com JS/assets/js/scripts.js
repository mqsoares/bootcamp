const title = document.getElementById('page-title');
const button = document.getElementById('mode-selector');
const footer = document.getElementsByTagName('footer')[0];
const body = document.getElementsByTagName('body')[0];

const darkModeClass = 'dark-mode';

button.addEventListener('click', changeMode);

function changeMode() {
    changeClasses();
    changeTxt();
}

function changeClasses() {
    title.classList.toggle(darkModeClass);
    button.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
}

function changeTxt() {
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';    
    
    if(body.classList.contains(darkModeClass)) {
        title.innerHTML = darkMode + ' ON';
        button.innerHTML = lightMode;
        return;
    }
    title.innerHTML = lightMode + ' ON';
    button.innerHTML = darkMode;     
}