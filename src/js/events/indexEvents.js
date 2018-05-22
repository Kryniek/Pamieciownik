(function () {
    onIndexLoad();
    document.getElementById(LOGIN_FORM_LOGIN_BUTTON).addEventListener(CLICK_EVENT, onLoginFormLoginClick);
    document.getElementById(LOGIN_FORM_LOGOUT_BUTTON).addEventListener(CLICK_EVENT, onLoginFormLogoutClick);
})();