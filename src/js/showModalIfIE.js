var showModalIfIE = function () {
    (function init() {
        var userAgent = navigator.userAgent;
        var isIE = navigator.appName == 'Microsoft Internet Explorer' || !!(userAgent.match(/Trident/) || userAgent.match(/rv:11/));

        if (isIE) {
            createIEModalElement();
        }
    })();

    function createIEModalElement() {
        let ieModalElement = document.createElement(DIV_TAG);
        ieModalElement.id = IE_MODAL_ID;

        let h1Element = document.createElement(H1_TAG);
        h1Element.textContent = 'Strona nie obsługuje przeglądarki Internet Explorer';

        ieModalElement.appendChild(h1Element);

        document.body.appendChild(ieModalElement);
    };
};