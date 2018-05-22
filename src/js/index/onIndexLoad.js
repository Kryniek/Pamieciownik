var onIndexLoad = function () {
    (function init() {
        var isUserLogged = window.localStorage.getItem(IS_USER_LOGGED_LOCAL_STORAGE_ID);

        if (isUserLogged) {
            hideInputAndLoginButton();
        }
    })();
};