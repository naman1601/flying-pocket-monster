import './style.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

const createNavButton = function(name) {
    const NavButton = document.createElement('div');
    NavButton.classList.add('nav-button');
    NavButton.classList.add('nav-button-' + name.toLowerCase());
    NavButton.textContent = name;
    return NavButton;
};

const activateNavButton = function(button) {
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach((navButton) => {
        navButton.classList.remove('active-nav-button');
    });

    button.classList.add('active-nav-button');
};

const createNavbar = function () {
    const navBar = document.createElement('nav');
    navBar.classList.add('navbar');

    const navHome = createNavButton('Home');
    navHome.addEventListener('click', () => {
        activateNavButton(navHome);
        loadHome();
    });

    const navMenu = createNavButton('Menu');
    navMenu.addEventListener('click', () => {
        activateNavButton(navMenu);
        loadMenu();
    });

    const navContact = createNavButton('Contact');
    navContact.addEventListener('click', () => {
        activateNavButton(navContact);
        loadContact();
    });

    navBar.appendChild(navHome);
    navBar.appendChild(navMenu);
    navBar.appendChild(navContact);

    return navBar;
}

const createHeader = function() {
    const header = document.createElement('header');

    const headerTitle = document.createElement('div');
    headerTitle.classList.add('header-title');
    headerTitle.textContent = 'Flying Pockét Monster';

    const navBar = createNavbar();

    header.appendChild(headerTitle);
    header.appendChild(navBar);

    return header;
};

const createMain = function() {
    const main = document.createElement('div');
    main.classList.add('main');
    return main;
};

const createFooter = function() {
    const footer = document.createElement('footer');
    footer.textContent = 'made by naman1601';
    return footer;
};

const contentArea = document.querySelector('.content');

contentArea.appendChild(createHeader());
contentArea.appendChild(createMain());
contentArea.appendChild(createFooter());

activateNavButton(document.querySelector('.nav-button-home'));
loadHome();