var headerPointerOutEvent = function () {
    const HEADER_ID = 'header';

    var header = document.getElementById(HEADER_ID);

    header.style.setProperty('transition', 'width 0.35s linear');
    header.style.setProperty('width', '52px');
};