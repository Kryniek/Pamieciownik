var onWhatWeDrinkTodayButtonClick = function () {
    (function init() {
        let lastTimeChosenAlkohols = getOnlyLastTimeChosenAlkohols();

        let isSelected = isAnyAlkoholSelected(lastTimeChosenAlkohols);

        if (isSelected) {
            disableAllButtons();

            showLoading();

            drawAlkohol(lastTimeChosenAlkohols);

            setTimeout(function () {
                redirectToNextPage();
            }, 3000);
        }
    })();

    function isAnyAlkoholSelected(lastTimeChosenAlkohols) {
        return lastTimeChosenAlkohols.length !== 0;
    };

    function disableAllButtons() {
        let whatWeDrinkTodayButton = document.getElementById(WHAT_WE_DRINK_TODAY_BUTTON_ID);
        let lastTimeChosenAlkoholsButton = document.getElementById(LAST_TIME_CHOSEN_ALKOHOLS_BUTTON_ID);
        let allAlkoholsButton = document.getElementById(ALL_ALKOHOLS_BUTTON_ID);

        whatWeDrinkTodayButton.removeEventListener(CLICK_EVENT, onWhatWeDrinkTodayButtonClick);
        lastTimeChosenAlkoholsButton.removeEventListener(CLICK_EVENT, onLastTimeChosenAlkoholsButtonClick);
        allAlkoholsButton.removeEventListener(CLICK_EVENT, onAllAlkoholsButtonClick);
    };

    function showLoading() {
        let loadingElement = document.getElementById(LOADING_ID);

        let iElement = document.createElement(I_TAG);
        iElement.setAttribute('aria-hidden', true);

        let iElementClasses = iElement.classList;
        iElementClasses.add('fa');
        iElementClasses.add('fa-spinner');

        loadingElement.appendChild(iElement);
    };

    function drawAlkohol(lastTimeChosenAlkohols) {
        let localStorage = window.localStorage;
        let randomAlkohol = getRandomAlkohol(lastTimeChosenAlkohols);

        localStorage.setItem(RANDOM_ALKOHOL_LOCAL_STORAGE_ID, JSON.stringify(randomAlkohol));
    };

    function getRandomAlkohol(lastTimeChosenAlkohols) {
        let randomAlkohol = null;
        let randomAlkoholId = getRandomAlkoholId(lastTimeChosenAlkohols);

        lastTimeChosenAlkohols.forEach(function (lastTimeChosenAlkohol) {
            if (lastTimeChosenAlkohol.id === randomAlkoholId) {
                randomAlkohol = lastTimeChosenAlkohol;
                return;
            }
        });

        return randomAlkohol;
    };

    function getRandomAlkoholId(lastTimeChosenAlkohols) {
        let lastTimeChosenAlkoholsIds = [];

        lastTimeChosenAlkohols.forEach(function (alkohol) {
            lastTimeChosenAlkoholsIds.push(alkohol.id);
        });

        let lastTimeChosenAlkoholsIdsLength = lastTimeChosenAlkoholsIds.length;
        let randomAlkoholIdIndex = (lastTimeChosenAlkoholsIdsLength === 1) ? 0 : Math.floor((Math.random() * lastTimeChosenAlkoholsIds.length) + 0);

        return lastTimeChosenAlkoholsIds[randomAlkoholIdIndex];
    };

    function redirectToNextPage() {
        let drinkTyperResultWindowLocationHref = window.location.href.replace(DRINK_TYPER_HTML_FILE_NAME, DRINK_TYPER_RESULT_HTML_FILE_NAME);

        window.location.replace(drinkTyperResultWindowLocationHref);
    };
};