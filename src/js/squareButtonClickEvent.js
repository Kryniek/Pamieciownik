var squareButtonClickEvent = function () {
    var me = this;
    var requestedDay = null;
    var requestedMonth = null;
    var currentMonthElement = document.getElementById(CURRENT_MONTH_ID);

    Array.from(me.children).forEach(function (child) {
        if (child.tagName === H1_TAG) {
            requestedDay = parseInt(child.textContent);
        }
    });

    Array.from(currentMonthElement.children).forEach(function (child) {
        if (child.tagName === H1_TAG) {
            requestedMonth = getMonthNumberByMonthName(child.textContent);
        }
    });

    var rightPanel = document.getElementById(RIGHT_PANEL_ID);
    var rightPanelStyle = rightPanel.style;

    rightPanelStyle.setProperty('transition', 'width 0.3s linear');
    rightPanelStyle.setProperty('width', '40%');

    var users = usersJson().users;
    var requestedDayBirthdayUsers = [];

    users.forEach(function (user) {
        var bornDate = new Date(user.born);
        var bornMonth = bornDate.getMonth() + 1;
        var bornDay = bornDate.getDate();

        if (requestedMonth === bornMonth && requestedDay === bornDay) {
            requestedDayBirthdayUsers.push(user);
        }
    });
    var rightPanelParentSpanElement = document.createElement(SPAN_TAG);

    requestedDayBirthdayUsers.forEach(function (user) {
        var userFullNameWithAge = user.name + ' ' + user.surname + ', ';
        var userYearsOldNumber = new Date().getFullYear() - new Date(user.born).getFullYear();
        userFullNameWithAge += userYearsOldNumber;

        var rightPanelSpanNode = document.createElement(SPAN_TAG);
        var spanH2Node = document.createElement(H2_TAG);
        spanH2Node.textContent = userFullNameWithAge;

        rightPanelSpanNode.appendChild(spanH2Node);

        var spanH1Node = document.createElement(I_TAG);
        var spanH1NodeClassList = spanH1Node.classList;
        spanH1NodeClassList.add('fa');
        spanH1NodeClassList.add('fa-user-times');

        rightPanelSpanNode.appendChild(spanH1Node);

        rightPanelParentSpanElement.appendChild(rightPanelSpanNode);
    });

    rightPanel.appendChild(rightPanelParentSpanElement);
};