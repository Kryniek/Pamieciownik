var getDaysCountInMonth = function (year, month) {
    return new Date(year, month, 0).getDate();
};

var getMonthNameByMonthNumber = function (month) {
    var monthName = null;

    if (month === 1) {
        monthName = 'Styczeń';
    } else if (month === 2) {
        monthName = 'Luty';
    } else if (month === 3) {
        monthName = 'Marzec';
    } else if (month === 4) {
        monthName = 'Kwiecień';
    } else if (month === 5) {
        monthName = 'Maj';
    } else if (month === 6) {
        monthName = 'Czerwiec';
    } else if (month === 7) {
        monthName = 'Lipiec';
    } else if (month === 8) {
        monthName = 'Sierpień';
    } else if (month === 9) {
        monthName = 'Wrzesień';
    } else if (month === 10) {
        monthName = 'Październik';
    } else if (month === 11) {
        monthName = 'Listopad';
    } else if (month === 12) {
        monthName = 'Grudzień';
    }

    return monthName;
};

var getMonthNumberByMonthName = function (month) {
    var monthNumber = null;

    if (month === 'Styczeń') {
        monthNumber = 1;
    } else if (month === 'Luty') {
        monthNumber = 2;
    } else if (month === 'Marzec') {
        monthNumber = 3;
    } else if (month === 'Kwiecień') {
        monthNumber = 4;
    } else if (month === 'Maj') {
        monthNumber = 5;
    } else if (month === 'Czerwiec') {
        monthNumber = 6;
    } else if (month === 'Lipiec') {
        monthNumber = 7;
    } else if (month === 'Sierpień') {
        monthNumber = 8;
    } else if (month === 'Wrzesień') {
        monthNumber = 9;
    } else if (month === 'Październik') {
        monthNumber = 10;
    } else if (month === 'Listopad') {
        monthNumber = 11;
    } else if (month === 'Grudzień') {
        monthNumber = 12;
    }

    return monthNumber;
};

var getFontAwesomeTagByClassAndHref = function (fontAwesomeClass, fontAwesomeHref) {
    const DEFAULT_I_TAG_CLASS = 'fa';
    const ARIA_HIDDEN_ATTRIBUTE = 'aria-hidden';

    var aNode = document.createElement(A_TAG);
    aNode.href = fontAwesomeHref;

    var iNode = document.createElement(I_TAG);
    iNode.classList.add(DEFAULT_I_TAG_CLASS);
    iNode.classList.add(fontAwesomeClass);
    iNode.setAttribute(ARIA_HIDDEN_ATTRIBUTE, true);

    aNode.appendChild(iNode);

    return aNode;
};

function getOnlyLastTimeChosenAlkohols() {
    let onlyLastTimeChosenAlkohols = [];
    let allAlkohols = alhohols();
    let localStorage = window.localStorage;
    let chosenAlkohols = JSON.parse(localStorage.getItem(CHOOSED_ALKOHOLS_LOCAL_STORAGE_ID)) || [];

    allAlkohols.forEach(function (alkohol) {
        if (chosenAlkohols.indexOf(alkohol.id) !== -1) {
            onlyLastTimeChosenAlkohols.push(alkohol);
        }
    });

    return onlyLastTimeChosenAlkohols;
};

function getDayOfWeekShortNameByHisNumber(dayOfWeekNumber) {
    var dayOfWeekShortName = null;

    if (dayOfWeekNumber === 0) {
        dayOfWeekShortName = 'Nd';
    } else if (dayOfWeekNumber === 1) {
        dayOfWeekShortName = 'Pon';
    } else if (dayOfWeekNumber === 2) {
        dayOfWeekShortName = 'Wt';
    } else if (dayOfWeekNumber === 3) {
        dayOfWeekShortName = 'Śr';
    } else if (dayOfWeekNumber === 4) {
        dayOfWeekShortName = 'Czw';
    } else if (dayOfWeekNumber === 5) {
        dayOfWeekShortName = 'Pt';
    } else if (dayOfWeekNumber === 6) {
        dayOfWeekShortName = 'Sob';
    }

    return dayOfWeekShortName;
};

function isDevice() {
    return window.matchMedia("only screen and (max-device-width: 720px)").matches;
};