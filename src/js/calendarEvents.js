(function () {
    window.onload = onLoadCalendar();
    document.getElementById(RIGHT_PANEL_BACK_BUTTON_ID).addEventListener(CLICK_EVENT, rightPanelBackButtonClickEvent);
    document.getElementById(PREVIOUS_MONTH_BUTTON_ID).addEventListener(CLICK_EVENT, previousButtonClickEvent);
    document.getElementById(NEXT_MONTH_BUTTON_ID).addEventListener(CLICK_EVENT, nextBackButtonClickEvent);
})();