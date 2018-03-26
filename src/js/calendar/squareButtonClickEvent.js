var squareButtonClickEvent = function () {
    const me = this;

    (function init() {
        addRightPanelParentSpanElements();
    })();

    function addRightPanelParentSpanElements() {
        var rightPanel = getRightPanelWithStyleSet();
        var requestedMonth = getRequestedMonth();
        var requestedDay = getRequestedDay();
        var requestedDayBirthdayUsers = getRequestedDayBirthdayUsers(requestedMonth, requestedDay);
        var requestedDayNamedayUsers = getRequestedDayNamedayUsers(requestedMonth, requestedDay);

        var rightPanelParentSpanElement = document.createElement(SPAN_TAG);

        requestedDayBirthdayUsers.forEach(function (user) {
            let rightPanelSpanElement = getRightPanelSpanElementWithUserElement(user, true);

            rightPanelParentSpanElement.appendChild(rightPanelSpanElement);
        });

        requestedDayNamedayUsers.forEach(function (user) {
            let rightPanelSpanElement = getRightPanelSpanElementWithUserElement(user, false);

            rightPanelParentSpanElement.appendChild(rightPanelSpanElement);
        });

        rightPanel.appendChild(rightPanelParentSpanElement);
    };

    function getRightPanelSpanElementWithUserElement(user, isBirthday) {
        var userFullNameWithAge = user.name + ' ' + user.surname + ', ';
        var userYearsOldNumber = new Date().getFullYear() - new Date(user.born).getFullYear();
        userFullNameWithAge += userYearsOldNumber;
        userFullNameWithAge += (isBirthday) ? ' urodziny' : ' imieniny';

        var rightPanelSpanElement = document.createElement(SPAN_TAG);
        var spanH2Node = document.createElement(H2_TAG);
        spanH2Node.textContent = userFullNameWithAge;

        rightPanelSpanElement.appendChild(spanH2Node);

        // var userImgSrc = user.imgSrc;
        //for now it will be null
        //#43 Allow users images to be viewed.
        var userImgSrc = null;

        if (userImgSrc) {
            const USER_IMG_SRC = '../img/users/';

            let spanIMGNode = document.createElement(IMG_TAG);
            spanIMGNode.src = USER_IMG_SRC + userImgSrc;

            rightPanelSpanElement.appendChild(spanIMGNode);
        } else {
            let spanH1Node = document.createElement(I_TAG);
            let spanH1NodeClassList = spanH1Node.classList;
            spanH1NodeClassList.add('fa');
            spanH1NodeClassList.add('fa-user-times');

            rightPanelSpanElement.appendChild(spanH1Node);
        }

        return rightPanelSpanElement;
    };

    function getRequestedDay() {
        var requestedDay = null;
        var children = me.children;

        for (let childIndex in children) {
            let child = children[childIndex];
            let isH1Element = child.tagName === H1_TAG;

            if (isH1Element) {
                requestedDay = parseInt(child.textContent);
            }
        }

        return requestedDay;
    };

    function getRequestedMonth() {
        var requestedMonth = null;
        var currentMonthElement = document.getElementById(CURRENT_MONTH_ID);
        var children = currentMonthElement.children;

        for (let childIndex in children) {
            let child = children[childIndex];
            let isH1Element = child.tagName === H1_TAG;

            if (isH1Element) {
                requestedMonth = getMonthNumberByMonthName(child.textContent);
            }
        }

        return requestedMonth;
    };

    function getRightPanelWithStyleSet() {
        var rightPanel = document.getElementById(RIGHT_PANEL_ID);
        var rightPanelStyle = rightPanel.style;

        removeAllRightPanelChilds(rightPanel);

        var rightPanelWidth = (isDevice()) ? '75%' : '50%';

        rightPanelStyle.setProperty('transition', 'width 0.3s linear');
        rightPanelStyle.setProperty('width', rightPanelWidth);

        return rightPanel;
    };

    function removeAllRightPanelChilds(rightPanel) {
        var rightPanelChildren = rightPanel.children;

        for (let childIndex in rightPanelChildren) {
            let child = rightPanelChildren[childIndex];
            let isSpanElement = child.tagName === SPAN_TAG;

            if (isSpanElement) {
                rightPanel.removeChild(child);
            }
        }

    };

    function getRequestedDayBirthdayUsers(requestedMonth, requestedDay) {
        var users = usersJson().users;
        var requestedDayBirthdayUsers = [];

        users.forEach(function (user) {
            var bornDate = new Date(user.born);
            var bornMonth = bornDate.getMonth() + 1;
            var bornDay = bornDate.getDate();

            var isUserBornThisMonth = requestedMonth === bornMonth;
            var isUserBornThisDay = requestedDay === bornDay;

            if (isUserBornThisMonth && isUserBornThisDay) {
                requestedDayBirthdayUsers.push(user);
            }
        });

        return requestedDayBirthdayUsers;
    };

    function getRequestedDayNamedayUsers(requestedMonth, requestedDay) {
        var users = usersJson().users;
        var requestedDayNamedayUsers = [];

        users.forEach(function (user) {
            var nameDate = new Date(user.nameDate);
            var nameMonth = nameDate.getMonth() + 1;
            var nameDay = nameDate.getDate();

            var isUserNamedThisMonth = requestedMonth === nameMonth;
            var isUserNamedThisDay = requestedDay === nameDay;

            if (isUserNamedThisMonth && isUserNamedThisDay) {
                requestedDayNamedayUsers.push(user);
            }
        });

        return requestedDayNamedayUsers;
    };
};