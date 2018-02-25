var onRandomResultLoad = function () {
    (function init() {
        let randomAlkohol = getRandomAlkohol();

        setImageElement(randomAlkohol.images);

        setNameElement(randomAlkohol.name);

        setDescriptionElement(randomAlkohol.description);
    })();

    function getRandomAlkohol() {
        return JSON.parse(window.localStorage.getItem(RANDOM_ALKOHOL_LOCAL_STORAGE_ID));
    };

    function setImageElement(randomAlkoholImages) {
        let randomResultImageElement = document.getElementById(RANDOM_RESULT_IMAGE_ID);

        randomResultImageElement.firstElementChild.setAttribute('src', randomAlkoholImages[1].src);
    };

    function setNameElement(randomAlkoholName) {
        let randomResultNameElement = document.getElementById(RANDOM_RESULT_NAME_ID);

        randomResultNameElement.firstElementChild.textContent = randomAlkoholName;
    };

    function setDescriptionElement(randomAlkoholDescription) {
        let randomResultDescriptionElement = document.getElementById(RANDOM_RESULT_DESCRIPTION_ID);

        randomResultDescriptionElement.firstElementChild.textContent = randomAlkoholDescription;
    };
};