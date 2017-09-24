var mainHamburgerButtonClickEvent = function () {
    const HEADER_ID = 'header';
    const HAMBURGER_BUTTON_ID = 'hamburgerButton';

    var header = document.getElementById(HEADER_ID);
    var hamburgerButtons = Array.from(document.getElementsByClassName(HAMBURGER_BUTTON_ID));

    header.style.setProperty('transition', 'width 0.35s linear');
    header.style.setProperty('width', '150px');

    hamburgerButtons.forEach(function (hamburgerButton) {
        console.log('TODO: get child nodes and set them visible:true');
    });
};