var onLoadCalendar = function (requestedMonth) {
    (function init() {
        var now = new Date();
        var month = (!requestedMonth) ? now.getMonth() + 1 : requestedMonth;
        var squareButtonGroupElement = getSquareButtonGroupElement(now, month);

        setCurrentMonthElement(month);

        var users = usersJson().users;

        users.forEach(function (user) {
            addUserBornDay(user, month, squareButtonGroupElement);

            addUserNameDay(user, month, squareButtonGroupElement);
        });

        holidays().forEach(function (holiday) {
            addHoliday(holiday, month, squareButtonGroupElement);
        });

        addSquareButtonClickEvents();
    })();

    function addSquareButtonClickEvents() {
        var squareButtons = document.getElementsByClassName(SQUARE_BUTTON_CLASS);

        for (let squareButtonIndex in squareButtons) {
            let squareButton = squareButtons[squareButtonIndex];
            let squareButtonChildren = squareButton.children;

            for (let squareButtonChildIndex in squareButtonChildren) {
                let squareButtonChild = squareButtonChildren[squareButtonChildIndex];
                let isSpanTag = squareButtonChild.tagName === SPAN_TAG;

                if (isSpanTag) {
                    squareButton.addEventListener(CLICK_EVENT, squareButtonClickEvent);
                }
            }
        }
    };

    function getSquareButtonGroupElement(now, month) {
        var squareButtonGroupElement = document.getElementById(SQUARE_BUTTON_GROUP_ID);

        removeSquareButtonGroupElementChildNodes(squareButtonGroupElement);

        squareButtonGroupElement = createDaysInMonthNodes(squareButtonGroupElement, now, month);

        return squareButtonGroupElement;
    };

    function removeSquareButtonGroupElementChildNodes(squareButtonGroupElement) {
        var squareButtonGroupElementChildren = squareButtonGroupElement.children;
        var existsAnyNodesToRemove = !!squareButtonGroupElementChildren.length;

        while (existsAnyNodesToRemove) {
            for (let childIndex in squareButtonGroupElementChildren) {
                let child = squareButtonGroupElementChildren[childIndex];
                let isChildNode = child instanceof HTMLElement;

                if (isChildNode) {
                    squareButtonGroupElement.removeChild(child);
                }
            }

            existsAnyNodesToRemove = !!squareButtonGroupElementChildren.length
        }
    };

    function createDaysInMonthNodes(squareButtonGroupElement, now, month, today) {
        var daysInMonth = getDaysCountInMonth(now.getFullYear(), month);
        var today = now.getDate();

        for (let counter = 0; counter < daysInMonth; counter++) {
            let dayNumber = counter + 1;
            let isCurrentMonth = now.getMonth() + 1 === month;
            let isCurrentDay = dayNumber === today;

            let squareButtonNode = document.createElement(DIV_TAG);
            let squareButtonNodeClasses = squareButtonNode.classList;
            squareButtonNodeClasses.add(SQUARE_BUTTON_CLASS);

            if (isCurrentMonth && isCurrentDay) {
                squareButtonNodeClasses.add(TODAY_BUTTON_CLASS);
            }

            let currentDayH1Node = document.createElement(H1_TAG);
            currentDayH1Node.textContent = counter + 1;
            squareButtonNode.appendChild(currentDayH1Node);

            let dayOfWeekShortName = getDayOfWeekShortName(month - 1, dayNumber);
            let currentDayOfWeekPNode = document.createElement(P_TAG);
            currentDayOfWeekPNode.textContent = dayOfWeekShortName;
            squareButtonNode.appendChild(currentDayOfWeekPNode);

            squareButtonGroupElement.appendChild(squareButtonNode);
        }

        return squareButtonGroupElement;
    };

    function getDayOfWeekShortName(month, day) {
        var requestedDate = new Date();
        requestedDate.setMonth(month);
        requestedDate.setDate(day);

        return getDayOfWeekShortNameByHisNumber(requestedDate.getDay());
    };

    function setCurrentMonthElement(month) {
        var currentMonthElement = document.getElementById(CURRENT_MONTH_ID);
        var currentMonthH1Node = document.createElement(H1_TAG);
        currentMonthH1Node.textContent = getMonthNameByMonthNumber(month);

        removeCurrentMonthChildren(currentMonthElement);

        currentMonthElement.appendChild(currentMonthH1Node);
    };

    function removeCurrentMonthChildren(currentMonthElement) {
        var currentMonthElementChildren = currentMonthElement.children;
        var existsAnyNodesToRemove = !!currentMonthElementChildren.length;

        while (existsAnyNodesToRemove) {
            for (let childIndex in currentMonthElementChildren) {
                let child = currentMonthElementChildren[childIndex];
                let isChildNode = child instanceof HTMLElement;

                if (isChildNode) {
                    currentMonthElement.removeChild(child);
                }
            }

            existsAnyNodesToRemove = !!currentMonthElementChildren.length
        }
    };

    function addUserBornDay(user, month, squareButtonGroupElement) {
        var bornDate = new Date(user.born);
        var bornMonth = bornDate.getMonth() + 1;
        var hasUserBeenBornThisMonth = bornMonth === month;

        if (hasUserBeenBornThisMonth) {
            updateCalendarDayElementOnEvent(bornDate, 'BIRTHDAY', squareButtonGroupElement);
        }
    };

    function addUserNameDay(user, month, squareButtonGroupElement) {
        var nameDate = new Date(user.nameDate);
        var nameMonth = nameDate.getMonth() + 1;
        var hasUserNameDayThisMonth = nameMonth === month;

        if (hasUserNameDayThisMonth) {
            updateCalendarDayElementOnEvent(nameDate, 'NAME_DAY', squareButtonGroupElement);
        }
    };

    function addHoliday(holiday, month, squareButtonGroupElement) {
        var holidayMonth = holiday.month;
        var isHolidayThisMonth = holidayMonth === month;

        if (isHolidayThisMonth) {
            let holidayDate = new Date();
            holidayDate.setMonth(holidayMonth - 1);
            holidayDate.setDate(holiday.day);

            updateCalendarDayElementOnEvent(holidayDate, 'HOLIDAY', squareButtonGroupElement);
        }
    };

    function updateCalendarDayElementOnEvent(eventdate, eventType, squareButtonGroupElement) {
        const BIRTHDAY_EVENT_CLASS = 'fa-birthday-cake';
        const NAME_DAY_EVENT_CLASS = 'fa-gift';
        const HOLIDAY_EVENT_CLASS = 'fa-globe';

        var squareButtonElement = getEventDayNode(eventdate.getDate(), squareButtonGroupElement);
        var squareButtonH1Node = getSquareButtonH1Node(eventType, BIRTHDAY_EVENT_CLASS, NAME_DAY_EVENT_CLASS, HOLIDAY_EVENT_CLASS);

        var squareButtonSpanNode = document.createElement(SPAN_TAG);
        squareButtonSpanNode.appendChild(squareButtonH1Node);

        var spanNodeExists = false;
        var isBirthDayEvent = eventType === 'BIRTHDAY';
        var isNameDayEvent = eventType === 'NAME_DAY';
        var isHolidayEvent = eventType === 'HOLIDAY';

        var squareButtonElementChildren = squareButtonElement.children;
        for (let childIndex in squareButtonElementChildren) {
            let child = squareButtonElementChildren[childIndex];
            let isSpanTag = child.tagName === SPAN_TAG;

            if (isSpanTag) {
                spanNodeExists = true;

                let allowToAppendChild = true;
                let childChildren = child.children;
                for (let secondDepthChildIndex in childChildren) {
                    let secondDepthChild = childChildren[secondDepthChildIndex];
                    let isITag = secondDepthChild.tagName === I_TAG;

                    if (isITag) {
                        let secondDepthChildClasses = secondDepthChild.classList;

                        for (let thirdDepthChildIndex in secondDepthChildClasses) {
                            let thirdDepthChild = secondDepthChildClasses[thirdDepthChildIndex];
                            let isBirthDayEventClass = thirdDepthChild === BIRTHDAY_EVENT_CLASS;
                            let isNameDayEventClass = thirdDepthChild === NAME_DAY_EVENT_CLASS;
                            let isHolidayEventClass = thirdDepthChild === HOLIDAY_EVENT_CLASS;

                            if (isBirthDayEvent && isBirthDayEventClass) {
                                allowToAppendChild = false;
                            } else if (isNameDayEvent && isNameDayEventClass) {
                                allowToAppendChild = false;
                            } else if(isHolidayEvent && isHolidayEventClass){
                                allowToAppendChild = false;
                            }
                        }
                    }
                }

                if (allowToAppendChild) {
                    child.appendChild(squareButtonH1Node);
                }
            }
        }

        if (!spanNodeExists) {
            squareButtonElement.appendChild(squareButtonSpanNode);
        }
    };

    function getEventDayNode(eventDay, squareButtonGroupElement) {
        var squareButtonElement = null;
        var requestedEventDay = eventDay - 1;
        var squareButtonGroupElementChildren = squareButtonGroupElement.children;

        for (let childIndex in squareButtonGroupElementChildren) {
            let isRequestedEventDay = parseInt(childIndex) === requestedEventDay;

            if (isRequestedEventDay) {
                squareButtonElement = squareButtonGroupElementChildren[childIndex];
            }
        }

        var squareButtonElementStyle = squareButtonElement.style;
        squareButtonElementStyle.setProperty('background-color', 'rgb(0, 130, 132)');
        squareButtonElementStyle.setProperty('border', '2px solid rgb(0, 130, 132)');

        return squareButtonElement;
    };

    function getSquareButtonH1Node(eventType, BIRTHDAY_EVENT_CLASS, NAME_DAY_EVENT_CLASS, HOLIDAY_EVENT_CLASS) {
        var squareButtonH1Node = document.createElement(I_TAG);
        var squareButtonH1NodeClassList = squareButtonH1Node.classList;

        squareButtonH1NodeClassList.add('fa');

        var isBirthDayEvent = eventType === 'BIRTHDAY';
        var isNameDayEvent = eventType === 'NAME_DAY';
        var isHolidayEvent = eventType === 'HOLIDAY';

        if (isBirthDayEvent) {
            squareButtonH1NodeClassList.add(BIRTHDAY_EVENT_CLASS);
        } else if (isNameDayEvent) {
            squareButtonH1NodeClassList.add(NAME_DAY_EVENT_CLASS);
        } else if (isHolidayEvent) {
            squareButtonH1NodeClassList.add(HOLIDAY_EVENT_CLASS);
        }

        return squareButtonH1Node;
    };
};