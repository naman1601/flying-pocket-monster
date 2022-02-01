import img_pc from './images/pc.png';

function createContactTextItem(heading, value) {
    const contactTextItem = document.createElement('div');
    contactTextItem.classList.add('contact-text-item');

    const contactTextItemHeading = document.createElement('div');
    contactTextItemHeading.classList.add('contact-text-item-heading');
    contactTextItemHeading.innerHTML = heading + ': ';

    const contactTextItemValue = document.createElement('div');
    contactTextItemValue.classList.add('contact-text-item-value');
    contactTextItemValue.innerHTML = value;

    contactTextItem.appendChild(contactTextItemHeading);
    contactTextItem.appendChild(contactTextItemValue);
    return contactTextItem;
};

function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const contactImageContainer = document.createElement('div');
    contactImageContainer.classList.add('contact-image-container');

    const contactImage = new Image();
    contactImage.classList.add('contact-image');
    contactImage.src = img_pc;
    contactImageContainer.appendChild(contactImage);

    const contactText = document.createElement('div');
    contactText.classList.add('contact-text');

    contactText.appendChild(createContactTextItem('Address', 'Flying Pockét Monster, Victory Road, Viridian City, Kanto'));
    contactText.appendChild(createContactTextItem('Phone', '+49 (0) 123 456 7890'));

    contact.appendChild(contactImageContainer);
    contact.appendChild(contactText);
    return contact;
}

function loadContact() {
    const main = document.querySelector('.main');
    main.innerHTML = '';
    main.appendChild(createContact());
};

export default loadContact;