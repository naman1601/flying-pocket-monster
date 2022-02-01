import img_torchic from './images/torchic.png';
import img_magikarp from './images/magikarp.png';
import img_togepi_egg from './images/togepi_egg.png';
import img_ivysaur from './images/ivysaur.png';

function createMenuCard(imageSource, text, price) {
    const menuCard = document.createElement('div');
    menuCard.classList.add('menu-card');

    const menuCardImageContainer = document.createElement('div');
    menuCardImageContainer.classList.add('menu-card-image-container');
    const menuCardImage = new Image();
    menuCardImage.src = imageSource;
    menuCardImageContainer.appendChild(menuCardImage);
    menuCard.appendChild(menuCardImageContainer);

    const menuCardTextContainer = document.createElement('div');
    menuCardTextContainer.classList.add('menu-card-text-container');
    const menuCardText = document.createElement('div');
    menuCardText.classList.add('menu-card-text');
    menuCardText.textContent = text;
    menuCardTextContainer.appendChild(menuCardText);
    menuCard.appendChild(menuCardTextContainer);

    const menuCardPriceContainer = document.createElement('div');
    menuCardPriceContainer.classList.add('menu-card-price-container');
    const menuCardPrice = document.createElement('div');
    menuCardPrice.classList.add('menu-card-price');
    menuCardPrice.textContent = price;
    menuCardPriceContainer.appendChild(menuCardPrice);
    menuCard.appendChild(menuCardPriceContainer);

    return menuCard;
};

function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuTextContainer = document.createElement('div');
    menuTextContainer.classList.add('menu-text-container');
    menuTextContainer.textContent = 'Check out our amazing menu. We have something for everyone!';
    menu.appendChild(menuTextContainer);

    const menuCardContainer = document.createElement('div');
    menuCardContainer.classList.add('menu-card-container');

    menuCardContainer.appendChild(createMenuCard(img_torchic, 'Simple and traditional,'
    + ' torchic-ken soup for the soul!', '$255.00'));

    menuCardContainer.appendChild(createMenuCard(img_magikarp, 'A live Magikarp with a 30% evolution chance!'
    + ' Eat it in time or risk getting eaten! Recommended for the adventurous.', '$129.00'));

    menuCardContainer.appendChild(createMenuCard(img_togepi_egg, 'Nothing like a fresh Togepi-Egg omellete'
    + ' to start the day with!', '$175.00'));

    menuCardContainer.appendChild(createMenuCard(img_ivysaur, 'Are you vegan, or just dieting?'
    + ' Worry not! Our Ivysaur salad is a healthy and delicious choice!', '$002.00'));

    menu.appendChild(menuCardContainer);
    return menu;
}

function loadMenu() {
    const main = document.querySelector('.main');
    main.innerHTML = '';
    main.appendChild(createMenu());
};

export default loadMenu;