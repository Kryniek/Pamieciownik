var rightPanelBackButtonClickEvent = function () {
    (function init() {
        var rightPanelStyle = document.getElementById(RIGHT_PANEL_ID).style;

        rightPanelStyle.setProperty('transition', 'width 0.3s linear');
        rightPanelStyle.setProperty('width', '0%');
    })();
};