var headerPointerOutEvent = function () {
    const VISIBILITY_HIDDEN = 'hidden';

    var headerStyle = document.getElementById(HEADER_ID).style;
    var hamburgerButtons = Array.from(document.getElementsByClassName(HAMBURGER_BUTTON_CLASS));

    var width = isDevice() ? '120px' : '52px';

    headerStyle.setProperty('transition', 'width 0.35s linear');
    headerStyle.setProperty('width', width);

    hamburgerButtons.forEach(function (hamburgerButton) {
        if (hamburgerButton.className === HAMBURGER_BUTTON_CLASS) {
            hamburgerButton.childNodes.forEach(function (hamburgerButtonChildNode) {
                if (hamburgerButtonChildNode.nodeName === H2_TAG) {
                    hamburgerButtonChildNode.style.setProperty('visibility', VISIBILITY_HIDDEN);
                }
            });
        }
    });

    var squareButtonGroupElement = document.getElementById(SQUARE_BUTTON_GROUP_ID);

    if (squareButtonGroupElement) {
        let LEFT_STYLE_VALUE_TO_SUBTRACT = isDevice() ? 300 : 200;

        let squareButtonGroupElementStyle = squareButtonGroupElement.style;
        let squareButtonGroupElementLeft = window.getComputedStyle(squareButtonGroupElement).getPropertyValue('left');
        squareButtonGroupElementLeft = parseInt(squareButtonGroupElementLeft.replace('px', ''));

        if (squareButtonGroupElementLeft === (isDevice() ? 450 : 300)) {
            squareButtonGroupElementStyle.setProperty('left', squareButtonGroupElementLeft - LEFT_STYLE_VALUE_TO_SUBTRACT + 'px');
            document.getElementById(CURRENT_MONTH_ID).style.setProperty('left', '50%');
        }
    }
};