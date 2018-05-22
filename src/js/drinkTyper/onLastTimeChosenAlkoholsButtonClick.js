var onLastTimeChosenAlkoholsButtonClick = function () {
    (function init() {
        hideShowAlkoholsButtonElement();

        createAlkoholsElements(true);

        addScrollEventIfIsFirefox();
    })();
};