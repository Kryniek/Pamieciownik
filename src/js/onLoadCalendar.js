var onLoadCalendar = function () {
    var now = new Date();
    var month = now.getMonth() + 1;
    var daysInMonth = getDaysCountInMonth(now.getFullYear(), month);
    var squareButtonGroupElement = document.getElementById(SQUARE_BUTTON_GROUP_ID);

    for (var counter = 0; counter < daysInMonth; counter++) {
        var squareButtonNode = document.createElement(DIV_TAG);
        squareButtonNode.classList.add(SQUARE_BUTTON_CLASS);

        squareButtonGroupElement.appendChild(squareButtonNode);
    }

    var currentMonthElement = document.getElementById(CURRENT_MONTH_ID);
    var h1Node = document.createElement(H1_TAG);
    h1Node.textContent = getMonthNameByMonthNumber(month);

    currentMonthElement.appendChild(h1Node);
};