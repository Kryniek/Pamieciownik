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
    
    Array.from(rightPanel.children).forEach(function (child) {
        if (child.tagName === SPAN_TAG) {
            rightPanel.removeChild(child);
        }
    });

    rightPanelStyle.setProperty('transition', 'width 0.3s linear');
    rightPanelStyle.setProperty('width', '50%');

    var users = usersJson().users;
    var requestedDayBirthdayUsers = [];
    var requestedDayNamedayUsers = [];

    users.forEach(function (user) {
        var bornDate = new Date(user.born);
        var bornMonth = bornDate.getMonth() + 1;
        var bornDay = bornDate.getDate();

        if (requestedMonth === bornMonth && requestedDay === bornDay) {
            requestedDayBirthdayUsers.push(user);
        }
        
        var nameDate = new Date(user.nameDate);
        var nameMonth = nameDate.getMonth() + 1;
        var nameDay = nameDate.getDate();
        
        if (requestedMonth === nameMonth && requestedDay === nameDay) {
            requestedDayNamedayUsers.push(user);
        }
    });
    
    var rightPanelParentSpanElement = document.createElement(SPAN_TAG);
    
    var addUserElementToRightPanelParentSpanElement = function(user, isBirthday){
        var userFullNameWithAge = user.name + ' ' + user.surname + ', ';
        var userYearsOldNumber = new Date().getFullYear() - new Date(user.born).getFullYear();
        userFullNameWithAge += userYearsOldNumber;
        userFullNameWithAge += (isBirthday)? ' urodziny' : ' imieniny';

        var rightPanelSpanNode = document.createElement(SPAN_TAG);
        var spanH2Node = document.createElement(H2_TAG);
        spanH2Node.textContent = userFullNameWithAge;

        rightPanelSpanNode.appendChild(spanH2Node);
        
        var userImgSrc = user.imgSrc;
        
        if(userImgSrc){
            var USER_IMG_SRC = '../img/users/';
            
            var spanIMGNode = document.createElement(IMG_TAG);
            spanIMGNode.src = USER_IMG_SRC + userImgSrc;

            rightPanelSpanNode.appendChild(spanIMGNode);
        } else {
            var spanH1Node = document.createElement(I_TAG);
            var spanH1NodeClassList = spanH1Node.classList;
            spanH1NodeClassList.add('fa');
            spanH1NodeClassList.add('fa-user-times');

            rightPanelSpanNode.appendChild(spanH1Node);
        }

        rightPanelParentSpanElement.appendChild(rightPanelSpanNode);
    };

    requestedDayBirthdayUsers.forEach(function (user) {
        addUserElementToRightPanelParentSpanElement(user, true);
    });
    
    requestedDayNamedayUsers.forEach(function (user) {
        addUserElementToRightPanelParentSpanElement(user, false);
    });

    rightPanel.appendChild(rightPanelParentSpanElement);
};