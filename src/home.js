import img_pikachu from './images/pikachu.png';
import img_mew from './images/mew.png';
import img_eevee from './images/eevee.png';

function newTextElementImage(imageSource) {
    const textElementImage = new Image();
    textElementImage.src = imageSource;
    return textElementImage;
};

function newTextElementText(text) {
    const textElementText = document.createElement('div');
    textElementText.classList.add('home-text-element-text');
    textElementText.textContent = text;
    return textElementText;
};

function newTextElement(imageSource, text, imageGoesLeft) {
    const textElement = document.createElement('div');
    textElement.classList.add('home-text-element');

    const textElementImageContainer = document.createElement('div');
    textElementImageContainer.classList.add('home-text-element-image-container');
    const textElementImage = newTextElementImage(imageSource);
    
    const textElementText = newTextElementText(text);

    textElementImageContainer.appendChild(textElementImage);

    if(imageGoesLeft) {
        textElement.appendChild(textElementImageContainer);
        textElement.appendChild(textElementText);

    } else {
        textElement.style.justifyContent= 'flex-end';
        textElement.appendChild(textElementText);
        textElement.appendChild(textElementImageContainer);
    }

    return textElement;
}

function newQuote(text) {
    const quote = document.createElement('blockquote');
    quote.classList.add('quote');
    quote.textContent = text;
    return quote;
}

function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const homeImageContainer = document.createElement('div');
    homeImageContainer.classList.add('home-image-container');
    const homeImage = new Image();
    homeImage.src = img_pikachu;
    homeImageContainer.appendChild(homeImage);
    home.appendChild(homeImageContainer);

    const homeText = document.createElement('div');
    homeText.classList.add('home-text');

    homeText.appendChild(newQuote('- "Good trainers breed their PokéMon. Great trainers train them for battle.'
    + ' But the best trainers EAT THEM!"'));
    homeText.appendChild(newTextElement(img_mew, 'Welcome to Flying Pockét Monster!', true));
    homeText.appendChild(newTextElement(img_eevee, 'We\'re the best PokéMon restaurant in the region! Since 2001, we have been'
    + ' serving authentic Kanto and Hoenn region flavours!', false));

    home.appendChild(homeText);

    return home;
};

function loadHome() {
    const main = document.querySelector('.main');
    main.innerHTML = '';
    main.appendChild(createHome());
};

export default loadHome;