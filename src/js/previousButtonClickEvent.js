var previousButtonClickEvent = function () {
    var requestedMonth = null;
    var currentMonthElement = document.getElementById(CURRENT_MONTH_ID);

    Array.from(currentMonthElement.children).forEach(function (child) {
        if (child.tagName === H1_TAG) {
            requestedMonth = child.textContent;
        }
    });

    var requestedMonthNumber = getMonthNumberByMonthName(requestedMonth) - 1;

    if (requestedMonthNumber < 1) {
        requestedMonthNumber = 12;
    }

    onLoadCalendar(requestedMonthNumber);
};