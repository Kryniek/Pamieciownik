(function () {
    window.onload = onLoadCalendar();
    Array.from(document.getElementsByClassName(SQUARE_BUTTON_CLASS)).forEach(function (squareButton) {
        Array.from(squareButton.children).forEach(function (child) {
            if (child.tagName === I_TAG) {
                squareButton.addEventListener(CLICK_EVENT, squareButtonClickEvent);
            }
        });
    });
    document.getElementById(RIGHT_PANEL_BACK_BUTTON_ID).addEventListener(CLICK_EVENT, rightPanelBackButtonClickEvent);
})();