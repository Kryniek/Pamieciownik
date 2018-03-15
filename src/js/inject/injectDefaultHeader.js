var injectDefaultHeader = function () {
    (function injectDefaultHeader() {
        var htmlPageName = getHtmlPageName();
        var headerButtons = getHeaderButtonsByPageName(htmlPageName);
        var headerElement = document.getElementById(HEADER_ID);

        headerElement.appendChild(getMainHamburgerButtonNode());

        if (headerButtons !== null) {
            headerButtons.forEach(function (button) {
                headerElement.appendChild(getHamburgerButtonNode(button));
            });
        }
    })();

    function getMainHamburgerButtonNode() {
        var mainHamburgerButtonNode = document.createElement(DIV_TAG);
        mainHamburgerButtonNode.id = MAIN_HAMBURGER_BUTTON_ID;
        mainHamburgerButtonNode.classList.add(HAMBURGER_BUTTON_CLASS);

        var mainHamburgerButtonFontAwesomeNode = getFontAwesomeTagByClassAndHref('fa-bars', '#');
        mainHamburgerButtonNode.appendChild(mainHamburgerButtonFontAwesomeNode);

        return mainHamburgerButtonNode;
    };

    function getHamburgerButtonNode(button) {
        var hamburgerButtonNode = document.createElement(DIV_TAG);
        hamburgerButtonNode.classList.add(HAMBURGER_BUTTON_CLASS);

        var hamburgerButtonFontAwesomeNode = getFontAwesomeTagByClassAndHref(button.iClass, button.aTagHref);
        hamburgerButtonNode.appendChild(hamburgerButtonFontAwesomeNode);

        var h2Node = document.createElement(H2_TAG);
        h2Node.textContent = button.h2TextContent;
        hamburgerButtonNode.appendChild(h2Node);

        return hamburgerButtonNode;
    };

    function getHeaderButtonsByPageName(htmlPageName) {
        var result = null;
        var headerButtons = getHeaderButtons();

        headerButtons.forEach(function (buttons) {
            if (buttons.pageName === htmlPageName) {
                result = buttons.buttons;
                return;
            }
        });

        return result;
    };

    function getHeaderButtons() {
        return [{
            id: 1,
            pageName: DRINK_TYPER_HTML_FILE_NAME,
            buttons: [{
                id: 1,
                aTagHref: '../../index.html',
                iClass: getIClassByHeaderButtonId(1),
                h2TextContent: getH2TextContentByHeaderButtonId(1)
            }, {
                id: 2,
                aTagHref: 'calendar.html',
                iClass: getIClassByHeaderButtonId(2),
                h2TextContent: getH2TextContentByHeaderButtonId(2)
            }, {
                id: 3,
                aTagHref: 'drinkTyper.html',
                iClass: getIClassByHeaderButtonId(3),
                h2TextContent: getH2TextContentByHeaderButtonId(3)
            }]
        }, {
            id: 2,
            pageName: INDEX_HTML_FILE_NAME,
            buttons: [{
                id: 1,
                aTagHref: 'index.html',
                iClass: getIClassByHeaderButtonId(1),
                h2TextContent: getH2TextContentByHeaderButtonId(1)
            }, {
                id: 2,
                aTagHref: 'src/view/calendar.html',
                iClass: getIClassByHeaderButtonId(2),
                h2TextContent: getH2TextContentByHeaderButtonId(2)
            }, {
                id: 3,
                aTagHref: 'src/view/drinkTyper.html',
                iClass: getIClassByHeaderButtonId(3),
                h2TextContent: getH2TextContentByHeaderButtonId(3)
            }]
        }, {
            id: 3,
            pageName: CALENDAR_HTML_FILE_NAME,
            buttons: [{
                id: 1,
                aTagHref: '../../index.html',
                iClass: getIClassByHeaderButtonId(1),
                h2TextContent: getH2TextContentByHeaderButtonId(1)
            }, {
                id: 2,
                aTagHref: 'calendar.html',
                iClass: getIClassByHeaderButtonId(2),
                h2TextContent: getH2TextContentByHeaderButtonId(2)
            }, {
                id: 3,
                aTagHref: 'drinkTyper.html',
                iClass: getIClassByHeaderButtonId(3),
                h2TextContent: getH2TextContentByHeaderButtonId(3)
            }]
        }, {
            id: 4,
            pageName: DRINK_TYPER_RESULT_HTML_FILE_NAME,
            buttons: [{
                id: 1,
                aTagHref: '../../index.html',
                iClass: getIClassByHeaderButtonId(1),
                h2TextContent: getH2TextContentByHeaderButtonId(1)
            }, {
                id: 2,
                aTagHref: 'calendar.html',
                iClass: getIClassByHeaderButtonId(2),
                h2TextContent: getH2TextContentByHeaderButtonId(2)
            }, {
                id: 3,
                aTagHref: 'drinkTyper.html',
                iClass: getIClassByHeaderButtonId(3),
                h2TextContent: getH2TextContentByHeaderButtonId(3)
            }]
        }];
    };

    function getH2TextContentByHeaderButtonId(headerButtonId) {
        var result = null;
        var headerButtonsH2TextContent = getH2TextContent();

        headerButtonsH2TextContent.forEach(function (headerButtonTextContent) {
            if (headerButtonTextContent.headerButtonsId === headerButtonId) {
                result = headerButtonTextContent.textContent;
                return;
            }
        });

        return result;
    };

    function getH2TextContent() {
        return [{
            id: 1,
            headerButtonsId: 1,
            textContent: 'Główna'
        }, {
            id: 2,
            headerButtonsId: 2,
            textContent: 'Kalendarz'
        }, {
            id: 3,
            headerButtonsId: 3,
            textContent: 'Co pijemy?'
        }];
    };

    function getIClassByHeaderButtonId(headerButtonId) {
        var result = null;
        var headerButtonsIClass = getIClass();

        headerButtonsIClass.forEach(function (headerButtonIClass) {
            if (headerButtonIClass.headerButtonsId === headerButtonId) {
                result = headerButtonIClass.iClass;
                return;
            }
        });

        return result;
    };

    function getIClass() {
        return [{
            id: 1,
            headerButtonsId: 1,
            iClass: 'fa-home'
        }, {
            id: 2,
            headerButtonsId: 2,
            iClass: 'fa-calendar'
        }, {
            id: 3,
            headerButtonsId: 3,
            iClass: 'fa-beer'
        }];
    };
};
