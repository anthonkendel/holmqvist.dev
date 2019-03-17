const DATA = {
    EMAIL: 'anthon.kendel@gmail.com',
    CONTACT: 'contact',
};

function showEmail(element) {
    const contactElement = document.querySelector('#contact a');

    contactElement.textContent = DATA.EMAIL;

    setTimeout(function () {
        contactElement.textContent = DATA.CONTACT;
    }, 10000);
}

document.addEventListener('DOMContentLoaded', function () {
    const contactElement = document.querySelector('#contact');

    contactElement.addEventListener('click', function () {
        showEmail(this);
    }); 
});