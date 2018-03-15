var injectRandomBackground = function () {
    (function init() {
        var headNode = document.head || document.getElementsByTagName('head')[0];
        var styleNode = decorateStyleNode();

        headNode.appendChild(styleNode);
    })();

    function decorateStyleNode() {
        var newBackgroundImageCssText = getNewBackgroundImageCssText();
        var styleNode = document.createElement('style');
        var styleNodeStyleSheet = styleNode.styleSheet;

        styleNode.type = 'text/css';

        if (!!styleNodeStyleSheet) {
            styleNodeStyleSheet.cssText = newBackgroundImageCssText;
        } else {
            styleNode.appendChild(document.createTextNode(newBackgroundImageCssText));
        }

        return styleNode;
    };

    function getNewBackgroundImageCssText() {
        var randomNumber = Math.floor((Math.random() * 7) + 1);
        var backgroundImageLocation = getBackgroundImageLocationByHtmlPageName();

        return 'body::after { background-image: url("' + backgroundImageLocation + 'background' + randomNumber + '.jpg"); }';
    };

    function getBackgroundImageLocationByHtmlPageName() {
        var backgroundImageLocation = null;
        var htmlPageName = getHtmlPageName();

        if (htmlPageName === INDEX_HTML_FILE_NAME) {
            backgroundImageLocation = 'src/img/background/';
        } else {
            backgroundImageLocation = '../img/background/';
        }

        return backgroundImageLocation;
    };
};