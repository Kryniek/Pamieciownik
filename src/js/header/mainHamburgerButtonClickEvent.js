var mainHamburgerButtonClickEvent = function () {
    const VISIBILITY_VISIBLE = 'visible';

    var headerStyle = document.getElementById(HEADER_ID).style;
    var hamburgerButtons = Array.from(document.getElementsByClassName(HAMBURGER_BUTTON_CLASS));

    var width = isDevice() ? '420px' : '200px';

    headerStyle.setProperty('transition', 'width 0.35s linear');
    headerStyle.setProperty('width', width);

    hamburgerButtons.forEach(function (hamburgerButton) {
        if (hamburgerButton.className === HAMBURGER_BUTTON_CLASS) {
            hamburgerButton.childNodes.forEach(function (hamburgerButtonChildNode) {
                if (hamburgerButtonChildNode.nodeName === H2_TAG) {
                    hamburgerButtonChildNode.style.setProperty('visibility', VISIBILITY_VISIBLE);
                }
            });
        }
    });

    var squareButtonGroupElement = document.getElementById(SQUARE_BUTTON_GROUP_ID);

    if (squareButtonGroupElement) {
        let LEFT_STYLE_VALUE_TO_ADD = isDevice() ? 300 : 200;

        let squareButtonGroupElementStyle = squareButtonGroupElement.style;
        let squareButtonGroupElementLeft = window.getComputedStyle(squareButtonGroupElement).getPropertyValue('left');
        squareButtonGroupElementLeft = parseInt(squareButtonGroupElementLeft.replace('px', ''));

        if (squareButtonGroupElementLeft < LEFT_STYLE_VALUE_TO_ADD) {
            squareButtonGroupElementStyle.setProperty('left', squareButtonGroupElementLeft + LEFT_STYLE_VALUE_TO_ADD + 'px');

            let currentMonthElement = document.getElementById(CURRENT_MONTH_ID);
            let currentMonthElementLeft = window.getComputedStyle(currentMonthElement).getPropertyValue('left');
            currentMonthElementLeft = parseInt(currentMonthElementLeft.replace('px', ''));

            currentMonthElement.style.setProperty('left', currentMonthElementLeft + LEFT_STYLE_VALUE_TO_ADD + 'px');
        }
    }
};