var onLoginFormLoginClick = function () {
    (function init() {
        var inputElement = document.getElementById(LOGIN_FORM_INPUT);

        var isValid = validateInput(inputElement.value);
        inputElement.value = null;

        if (isValid) {
            hideInputAndLoginButton();

            window.localStorage.setItem(IS_USER_LOGGED_LOCAL_STORAGE_ID, true);
        } else {
            inputElement.style.borderColor = "red"

            replaceInputPlaceholderWithBullshitValidationInfo(inputElement);
        }
    })();

    function validateInput(value) {
        const PASSWORD = 'superprokutas';

        if (!value) {
            return false;
        }

        if (PASSWORD !== value.toLowerCase()) {
            return false;
        }

        return true;
    };

    function replaceInputPlaceholderWithBullshitValidationInfo(inputElement) {
        var bullshitInfos = getBullshitInfos();

        var randomBullshitInfoNumber = Math.floor((Math.random() * bullshitInfos.length - 1) + 1);

        inputElement.placeholder = bullshitInfos[randomBullshitInfoNumber];
    };

    function getBullshitInfos() {
        var bullshitInfos = [];
        bullshitInfos.push('Mamie się poskarż');
        bullshitInfos.push('Chciałoby się co? hihi');
        bullshitInfos.push('Bo za mało expiłeś');
        bullshitInfos.push('Za mało dałeś na tacę');
        bullshitInfos.push('Chciałeś się włamać');

        return bullshitInfos;
    };
};