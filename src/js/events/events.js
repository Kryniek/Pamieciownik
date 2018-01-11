(function () {
    document.body.addEventListener(LOAD_EVENT, injectDefaultHeader());
    document.getElementById(MAIN_HAMBURGER_BUTTON_ID).addEventListener(CLICK_EVENT, mainHamburgerButtonClickEvent);
    document.getElementById(HEADER_ID).addEventListener(MOUSE_LEAVE_EVENT, headerPointerOutEvent);
})();