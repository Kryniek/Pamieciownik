var onLoadCalendar = function (requestedMonth) {
    (function init() {
        var now = new Date();
        var month = (!requestedMonth) ? now.getMonth() + 1 : requestedMonth;
        var daysInMonth = getDaysCountInMonth(now.getFullYear(), month);
        var today = now.getDate();
        var squareButtonGroupElement = document.getElementById(SQUARE_BUTTON_GROUP_ID);

        Array.from(squareButtonGroupElement.children).forEach(function (child) {
            squareButtonGroupElement.removeChild(child);
        });

        squareButtonGroupElement = createDaysInMonthNodes(squareButtonGroupElement, now, month, today, daysInMonth);

        var currentMonthElement = document.getElementById(CURRENT_MONTH_ID);
        var currentMonthH1Node = document.createElement(H1_TAG);
        currentMonthH1Node.textContent = getMonthNameByMonthNumber(month);

        Array.from(currentMonthElement.children).forEach(function (child) {
            currentMonthElement.removeChild(child);
        });

        currentMonthElement.appendChild(currentMonthH1Node);

        var users = usersJson().users;

        users.forEach(function (user) {
            var updateCalendarDayElementOnEvent = function (eventdate, eventType) {
                var BIRTHDAY_EVENT_CLASS = 'fa-birthday-cake';
                var NAME_DAY_EVENT_CLASS = 'fa-gift';

                var isBirthDayEvent = null;

                if (eventType === 'BIRTHDAY') {
                    isBirthDayEvent = true;
                } else if (eventType === 'NAME_DAY') {
                    isBirthDayEvent = false;
                }

                var eventDay = eventdate.getDate();
                var squareButtonElement = Array.from(squareButtonGroupElement.children)[eventDay - 1];
                var squareButtonElementStyle = squareButtonElement.style;
                squareButtonElementStyle.setProperty('background-color', 'rgb(0, 130, 132)');
                squareButtonElementStyle.setProperty('border', '2px solid rgb(0, 130, 132)');

                var squareButtonSpanNode = document.createElement(SPAN_TAG);
                var squareButtonH1Node = document.createElement(I_TAG);
                var squareButtonH1NodeClassList = squareButtonH1Node.classList;

                squareButtonSpanNode.appendChild(squareButtonH1Node);

                squareButtonH1NodeClassList.add('fa');

                if (isBirthDayEvent) {
                    squareButtonH1NodeClassList.add(BIRTHDAY_EVENT_CLASS);
                } else if (isBirthDayEvent === false) {
                    squareButtonH1NodeClassList.add(NAME_DAY_EVENT_CLASS);
                }

                var spanNodeExists = false;

                Array.from(squareButtonElement.children).forEach(function (child) {
                    if (child.tagName === SPAN_TAG) {
                        spanNodeExists = true;

                        var allowToAppendChild = true;

                        Array.from(child.children).forEach(function (secondDepthChild) {
                            if (secondDepthChild.tagName === I_TAG) {
                                Array.from(secondDepthChild.classList).forEach(function (thirdDepthChild) {
                                    if (isBirthDayEvent && thirdDepthChild === BIRTHDAY_EVENT_CLASS) {
                                        allowToAppendChild = false;
                                    } else if (isBirthDayEvent === false && thirdDepthChild === NAME_DAY_EVENT_CLASS) {
                                        allowToAppendChild = false;
                                    }
                                });
                            }
                        });

                        if (allowToAppendChild) {
                            child.appendChild(squareButtonH1Node);
                        }
                    }
                });

                if (!spanNodeExists) {
                    squareButtonElement.appendChild(squareButtonSpanNode);
                }
            };

            var bornDate = new Date(user.born);
            var bornMonth = bornDate.getMonth() + 1;

            if (bornMonth === month) {
                updateCalendarDayElementOnEvent(bornDate, 'BIRTHDAY');
            }

            var nameDate = new Date(user.nameDate);
            var nameMonth = nameDate.getMonth() + 1;

            if (nameMonth === month) {
                updateCalendarDayElementOnEvent(nameDate, 'NAME_DAY');
            }

            Array.from(document.getElementsByClassName(SQUARE_BUTTON_CLASS)).forEach(function (squareButton) {
                Array.from(squareButton.children).forEach(function (child) {
                    if (child.tagName === SPAN_TAG) {
                        squareButton.addEventListener(CLICK_EVENT, squareButtonClickEvent);
                    }
                });
            });
        });
    })();

    function createDaysInMonthNodes(squareButtonGroupElement, now, month, today, daysInMonth) {
        for (let counter = 0; counter < daysInMonth; counter++) {
            let day = counter + 1;
            let squareButtonNode = document.createElement(DIV_TAG);
            squareButtonNode.classList.add(SQUARE_BUTTON_CLASS);

            if (now.getMonth() + 1 === month && day === today) {
                squareButtonNode.classList.add(TODAY_BUTTON_CLASS);
            }

            let currentDayH1Node = document.createElement(H1_TAG);
            currentDayH1Node.textContent = counter + 1;
            squareButtonNode.appendChild(currentDayH1Node);

            let dayOfWeekShortName = getDayOfWeekShortName(month - 1, day);
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
};