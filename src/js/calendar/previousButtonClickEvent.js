var previousButtonClickEvent = function () {
    (function init() {
        loadPreviousMonth();
    })();

    function loadPreviousMonth() {
        var currentMonth = getCurrentMonthName();
        var requestedMonthNumber = getMonthNumberByMonthName(currentMonth) - 1;

        if (requestedMonthNumber < 1) {
            requestedMonthNumber = 12;
        }

        onLoadCalendar(requestedMonthNumber);
    };

    function getCurrentMonthName() {
        var currentMonth = null;
        var currentMonthElement = document.getElementById(CURRENT_MONTH_ID);
        var currentMonthElementChildren = currentMonthElement.children;

        for (let childIndex in currentMonthElementChildren) {
            let child = currentMonthElementChildren[childIndex];

            if (child.tagName === H1_TAG) {
                currentMonth = child.textContent;
            }
        }

        return currentMonth;
    };
};