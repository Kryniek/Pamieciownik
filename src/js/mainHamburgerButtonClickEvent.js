var mainHamburgerButtonClickEvent = function () {
    const VISIBILITY_VISIBLE = 'visible';

    var headerStyle = document.getElementById(HEADER_ID).style;
    var hamburgerButtons = Array.from(document.getElementsByClassName(HAMBURGER_BUTTON_CLASS));

    headerStyle.setProperty('transition', 'width 0.35s linear');
    headerStyle.setProperty('width', '200px');

    hamburgerButtons.forEach(function (hamburgerButton) {
        if (hamburgerButton.className === HAMBURGER_BUTTON_CLASS) {
            hamburgerButton.childNodes.forEach(function (hamburgerButtonChildNode) {
                if (hamburgerButtonChildNode.nodeName === H2_TAG) {
                    hamburgerButtonChildNode.style.setProperty('visibility', VISIBILITY_VISIBLE);
                }
            });
        }
    });
};