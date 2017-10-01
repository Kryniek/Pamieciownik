var onLoadCalendar = function () {
    var now = new Date();
    var month = now.getMonth() + 1;
    var daysInMonth = getDaysCountInMonth(now.getFullYear(), month);
    var squareButtonGroupElement = document.getElementById(SQUARE_BUTTON_GROUP_ID);

    for (var counter = 0; counter < daysInMonth; counter++) {
        var squareButtonNode = document.createElement(DIV_TAG);
        squareButtonNode.classList.add(SQUARE_BUTTON_CLASS);

        var currentMonthH1Node = document.createElement(H1_TAG);
        currentMonthH1Node.textContent = counter + 1;
        squareButtonNode.appendChild(currentMonthH1Node);

        squareButtonGroupElement.appendChild(squareButtonNode);
    }

    var currentMonthElement = document.getElementById(CURRENT_MONTH_ID);
    var currentMonthH1Node = document.createElement(H1_TAG);
    currentMonthH1Node.textContent = getMonthNameByMonthNumber(month);

    currentMonthElement.appendChild(currentMonthH1Node);

    var users = usersJson().users;

    users.forEach(function (user) {
        var bornDate = new Date(user.born);
        var bornMonth = bornDate.getMonth() + 1;

        if (bornMonth === month) {
            var bornDay = bornDate.getDate();
            var squareButtonElement = Array.from(squareButtonGroupElement.children)[bornDay - 1];
            var squareButtonElementStyle = squareButtonElement.style;
            squareButtonElementStyle.setProperty('background-color', 'rgb(0, 130, 132)');
            squareButtonElementStyle.setProperty('border', '2px solid rgb(0, 130, 132)');

            var squareButtonH1Node = document.createElement(I_TAG);
            var squareButtonH1NodeClassList = squareButtonH1Node.classList;
            squareButtonH1NodeClassList.add('fa');
            squareButtonH1NodeClassList.add('fa-birthday-cake');

            squareButtonElement.appendChild(squareButtonH1Node);
        }
    });
};