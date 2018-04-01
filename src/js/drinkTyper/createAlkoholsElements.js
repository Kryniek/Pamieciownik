var createAlkoholsElements = function (createOnlyLastTimeChosenAlkohols) {
    (function init() {
        removeAlkoholsElementIfExists();

        var allAlkohols = (createOnlyLastTimeChosenAlkohols) ? getOnlyLastTimeChosenAlkohols() : alhohols();
        var alkoholsElement = document.getElementById(ALKOHOLS_ID);

        alkoholsElement.appendChild(getAlkoholsBackButtonElement());

        var mainSpanElement = document.createElement(SPAN_TAG);

        allAlkohols.forEach(function (alkohol) {
            var alkoholElement = getAlkoholElementWithSupplementedInnerTags(alkohol);

            mainSpanElement.appendChild(alkoholElement);
        });

        alkoholsElement.appendChild(mainSpanElement);
    })();

    function removeAlkoholsElementIfExists() {
        let alkoholsElement = document.getElementById(ALKOHOLS_ID);

        while (alkoholsElement.hasChildNodes()) {
            alkoholsElement.removeChild(alkoholsElement.firstChild);
        }

        if (alkoholsElement.hasAttribute('hidden')) {
            alkoholsElement.removeAttribute('hidden')
        }
    };

    function getAlkoholsBackButtonElement() {
        let aElement = document.createElement(A_TAG);
        aElement.setAttribute('id', ALKOHOLS_BACK_BUTTON_ID);

        aElement.onclick = function () {
            let alkoholsElement = document.getElementById(ALKOHOLS_ID);
            let showAlkoholsButtonElement = document.getElementById(SHOW_ALKOHOLS_BUTTON_ID);

            alkoholsElement.setAttribute('hidden', true);
            showAlkoholsButtonElement.removeAttribute('hidden', false);
        };

        let iElement = document.createElement(I_TAG);
        iElement.setAttribute('aria-hidden', true);

        let iElementClasses = iElement.classList;
        iElementClasses.add('fa');
        iElementClasses.add('fa-chevron-circle-left');

        aElement.appendChild(iElement);

        return aElement;
    };

    function getAlkoholElementWithSupplementedInnerTags(alkohol) {
        var aElement = getAElement(alkohol.id);

        var imgElements = getNewImgElements(alkohol);

        imgElements.forEach(function (imgElement) {
            aElement.appendChild(imgElement);
        });

        aElement.appendChild(getAlkoholH2Element(alkohol));
        aElement.appendChild(getNewDivElement(alkohol));

        return aElement;
    };

    function getAlkoholH2Element(alkohol){
        var h2Element = document.createElement('H2');
        h2Element.textContent = alkohol.name;

        return h2Element;
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