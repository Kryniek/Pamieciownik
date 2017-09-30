var headerPointerOutEvent = function () {
    const VISIBILITY_HIDDEN = 'hidden';

    var headerStyle = document.getElementById(HEADER_ID).style;
    var hamburgerButtons = Array.from(document.getElementsByClassName(HAMBURGER_BUTTON_CLASS));

    headerStyle.setProperty('transition', 'width 0.35s linear');
    headerStyle.setProperty('width', '52px');

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
        const LEFT_STYLE_VALUE_TO_SUBTRACT = 200;

        var squareButtonGroupElementStyle = squareButtonGroupElement.style;
        var squareButtonGroupElementLeft = window.getComputedStyle(squareButtonGroupElement).getPropertyValue('left');
        squareButtonGroupElementLeft = parseInt(squareButtonGroupElementLeft.replace('px', ''));

        if (squareButtonGroupElementLeft === 300) {
            squareButtonGroupElementStyle.setProperty('left', squareButtonGroupElementLeft - LEFT_STYLE_VALUE_TO_SUBTRACT + 'px');
            document.getElementById(CURRENT_MONTH_ID).style.setProperty('left', '50%');
        }
    }
};