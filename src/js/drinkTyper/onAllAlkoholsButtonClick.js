var onAllAlkoholsButtonClick = function () {
    (function init() {
        hideShowAlkoholsButtonElement();

        createAlkoholsElements();
    })();

    function hideShowAlkoholsButtonElement() {
        var showAlkoholsButtonElement = document.getElementById(SHOW_ALKOHOLS_BUTTON_ID);

        showAlkoholsButtonElement.setAttribute('hidden', true);
    };

    function createAlkoholsElements() {
        var allAlkohols = alhohols();
        var alkoholsElement = document.getElementById(ALKOHOLS_ID);

        var mainSpanElement = document.createElement(SPAN_TAG);

        allAlkohols.forEach(function (alkohol) {
            var alkoholElement = getAlkoholElementWithSupplementedInnerTags(alkohol);

            mainSpanElement.appendChild(alkoholElement);
        });

        alkoholsElement.appendChild(mainSpanElement);
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

        aElement.onclick = function () {
            let me = this;
            let classes = me.classList;

            if (classes.contains(CHOOSEN_ALKOHOL_A_CLASS)) {
                classes.remove(CHOOSEN_ALKOHOL_A_CLASS);
            } else {
                classes.add(CHOOSEN_ALKOHOL_A_CLASS);
            }
        };

        return aElement;
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