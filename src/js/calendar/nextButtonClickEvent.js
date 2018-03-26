var nextButtonClickEvent = function () {
    (function init() {
        loadNextMonth();
    })();

    function loadNextMonth() {
        var currentMonth = getCurrentMonthName();
        var requestedMonthNumber = getMonthNumberByMonthName(currentMonth) + 1;

        if (requestedMonthNumber > 12) {
            requestedMonthNumber = 1;
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