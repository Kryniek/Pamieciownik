var hideInputAndLoginButton = function () {
    (function init() {
        var inputElement = document.getElementById(LOGIN_FORM_INPUT);
        inputElement.style.setProperty('opacity', 0);

        var loginFormNewWidth = (isDevice()) ? '125px' : '55px';

        var loginForm = document.getElementById(LOGIN_FORM);
        loginForm.style.setProperty('width', loginFormNewWidth);

        var loginButton = document.getElementById(LOGIN_FORM_LOGIN_BUTTON);
        loginButton.style.setProperty('visibility', 'hidden');

        var logoutButton = document.getElementById(LOGIN_FORM_LOGOUT_BUTTON);
        logoutButton.style.setProperty('visibility', 'visible');
    })();
};