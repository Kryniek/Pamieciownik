var headerPointerOutEvent = function () {
    (function init() {
        setHeaderStyle();

        showButtonsDescription();

        moveCalendarElementsToFitHeader();
    })();

    function setHeaderStyle() {
        var width = isDevice() ? '120px' : '52px';
        var headerStyle = document.getElementById(HEADER_ID).style;

        headerStyle.setProperty('transition', 'width 0.35s linear');
        headerStyle.setProperty('width', width);
    };

    function showButtonsDescription() {
        const VISIBILITY_HIDDEN = 'hidden';
        var hamburgerButtons = getHamburgerButtons();

        hamburgerButtons.forEach(function (hamburgerButton) {
            var isHamburgerButton = hamburgerButton.className === HAMBURGER_BUTTON_CLASS;

            if (isHamburgerButton) {
                hamburgerButton.childNodes.forEach(function (hamburgerButtonChildNode) {
                    var isH2Element = hamburgerButtonChildNode.nodeName === H2_TAG;

                    if (isH2Element) {
                        hamburgerButtonChildNode.style.setProperty('visibility', VISIBILITY_HIDDEN);
                    }
                });
            }
        });
    };

    function getHamburgerButtons() {
        var hamburgerButtonsTrueArray = [];
        var hamburgerButtons = document.getElementsByClassName(HAMBURGER_BUTTON_CLASS);

        for (let hamburgerButtonIndex in hamburgerButtons) {
            let hamburgerButton = hamburgerButtons[hamburgerButtonIndex];
            let isHTMLElement = hamburgerButton instanceof HTMLElement;

            if (isHTMLElement) {
                hamburgerButtonsTrueArray.push(hamburgerButton);
            }
        }

        return hamburgerButtonsTrueArray;
    };

    function moveCalendarElementsToFitHeader() {
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
};