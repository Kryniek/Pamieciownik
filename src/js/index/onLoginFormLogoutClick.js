var onLoginFormLogoutClick = function () {
    (function init() {
        showInputAndLoginButton();

        window.localStorage.removeItem(IS_USER_LOGGED_LOCAL_STORAGE_ID);
    })();

    function showInputAndLoginButton() {
        var inputElement = document.getElementById(LOGIN_FORM_INPUT);
        inputElement.style.setProperty('opacity', 1);

        var loginFormNewWidth = (isDevice()) ? '600px' : '300px';

        var loginForm = document.getElementById(LOGIN_FORM);
        loginForm.style.setProperty('width', loginFormNewWidth);

        var logoutButton = document.getElementById(LOGIN_FORM_LOGOUT_BUTTON);
        logoutButton.style.setProperty('visibility', 'hidden');

        var loginButton = document.getElementById(LOGIN_FORM_LOGIN_BUTTON);
        loginButton.style.setProperty('visibility', 'visible');
    };
};