var createAlkoholsElements = function (createOnlyLastTimeChosenAlkohols) {
    (function init() {
        var allAlkohols = (createOnlyLastTimeChosenAlkohols) ? getOnlyLastTimeChosenAlkohols() : alhohols();
        var alkoholsElement = document.getElementById(ALKOHOLS_ID);

        var mainSpanElement = document.createElement(SPAN_TAG);

        allAlkohols.forEach(function (alkohol) {
            var alkoholElement = getAlkoholElementWithSupplementedInnerTags(alkohol);

            mainSpanElement.appendChild(alkoholElement);
        });

        alkoholsElement.appendChild(mainSpanElement);
    })();

    function getOnlyLastTimeChosenAlkohols() {
        let onlyLastTimeChosenAlkohols = [];
        let allAlkohols = alhohols();
        let localStorage = window.localStorage;
        let chosenAlkohols = JSON.parse(localStorage.getItem(CHOOSED_ALKOHOLS_LOCAL_STORAGE_ID)) || [];

        allAlkohols.forEach(function (alkohol) {
            if (chosenAlkohols.indexOf(alkohol.id) !== -1) {
                onlyLastTimeChosenAlkohols.push(alkohol);
            }
        });

        return onlyLastTimeChosenAlkohols;
    };

    function getAlkoholElementWithSupplementedInnerTags(alkohol) {
        var aElement = getAElement(alkohol.id);

        var imgElements = getNewImgElements(alkohol);

        imgElements.forEach(function (imgElement) {
            aElement.appendChild(imgElement);
        });

        aElement.appendChild(getNewDivElement(alkohol));

        return aElement;
    };

    function getAElement(alkoholId) {
        let aElement = document.createElement(A_TAG);

        let localStorage = window.localStorage;
        let chosenAlkohols = JSON.parse(localStorage.getItem(CHOOSED_ALKOHOLS_LOCAL_STORAGE_ID)) || [];

        chosenAlkohols.forEach(function (choosedAlkohol) {
            if (choosedAlkohol === alkoholId) {
                aElement.classList.add(CHOOSEN_ALKOHOL_A_CLASS);
                return;
            }
        });

        aElement.onclick = function () {
            let me = this;

            if (me.classList.contains(CHOOSEN_ALKOHOL_A_CLASS)) {
                removeAlkohol(me, alkoholId);
            } else {
                addAlkohol(me, alkoholId);
            }
        };

        return aElement;
    };

    function removeAlkohol(me, alkoholId) {
        let localStorage = window.localStorage;
        let chosenAlkohols = JSON.parse(localStorage.getItem(CHOOSED_ALKOHOLS_LOCAL_STORAGE_ID)) || [];

        chosenAlkohols.forEach(function (choosedAlkohol, choosedAlkoholId) {
            if (choosedAlkohol === alkoholId) {
                chosenAlkohols.splice(choosedAlkoholId, 1);
            }
        });

        localStorage.setItem(CHOOSED_ALKOHOLS_LOCAL_STORAGE_ID, JSON.stringify(chosenAlkohols));

        me.classList.remove(CHOOSEN_ALKOHOL_A_CLASS);
    };

    function addAlkohol(me, alkoholId) {
        let localStorage = window.localStorage;
        let chosenAlkohols = JSON.parse(localStorage.getItem(CHOOSED_ALKOHOLS_LOCAL_STORAGE_ID)) || [];
        let isAlkoholIdInLocalStorage = false;

        chosenAlkohols.forEach(function (choosedAlkohol) {
            if (choosedAlkohol === alkoholId) {
                isAlkoholIdInLocalStorage = true;
                return;
            }
        });

        if (!isAlkoholIdInLocalStorage) {
            chosenAlkohols.push(alkoholId);
        }

        localStorage.setItem(CHOOSED_ALKOHOLS_LOCAL_STORAGE_ID, JSON.stringify(chosenAlkohols));

        me.classList.add(CHOOSEN_ALKOHOL_A_CLASS);
    };

    function getNewImgElements(alkohol) {
        var imgElements = [];

        alkohol.images.forEach(function (image) {
            imgElements.push(getNewImgElement(image.src));
        });

        return imgElements;
    };

    function getNewImgElement(imageSrc) {
        var imgElement = document.createElement(IMG_TAG);
        imgElement.setAttribute('src', imageSrc);

        return imgElement;
    };

    function getNewDivElement(alkohol) {
        var divElement = document.createElement(DIV_TAG);
        divElement.classList.add(COVER_IMAGE_DIV_CLASS);

        divElement.appendChild(getNewH2Element(alkohol));

        return divElement;
    };

    function getNewH2Element(alkohol) {
        var h2Element = document.createElement(H2_TAG);
        h2Element.textContent = alkohol.name;

        return h2Element;
    };
};