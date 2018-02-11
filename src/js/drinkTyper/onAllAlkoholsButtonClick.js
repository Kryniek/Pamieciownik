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
        var spanElement = document.createElement(SPAN_TAG);

        spanElement.appendChild(getNewImgElement(alkohol));
        //TODO Usunąć jedno zdjęcie kiedy będzie zaimplementowane
        //dodawanie dwóch zdjęć w jednej funkcji
        spanElement.appendChild(getNewImgElement(alkohol));
        spanElement.appendChild(getNewDivElement(alkohol));

        return spanElement;
    };

    function getNewImgElement(alkohol) {
        var imgElement = document.createElement(IMG_TAG);
        imgElement.setAttribute('src', "../img/users/jm1992.jpg");

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