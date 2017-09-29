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