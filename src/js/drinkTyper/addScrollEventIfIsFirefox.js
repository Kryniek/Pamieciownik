var addScrollEventIfIsFirefox = function () {
    (function init() {
        var isFirefox = /Firefox/i.test(navigator.userAgent);

        if (isFirefox) {
            let spanElement = getSpanElement();

            spanElement.addEventListener('DOMMouseScroll', function (e) {
                var event = window.event || e;
                var eventDetail = event.detail;
                var delta = eventDetail ? eventDetail * (-120) : event.wheelDelta;

                spanElement.scrollBy(0, (delta < 0) ? 160 : -160);
            });
        }
    })();

    function getSpanElement() {
        var spanElement = null;
        var alkoholsElement = document.getElementById(ALKOHOLS_ID);
        var alkoholsElementChildren = alkoholsElement.children;

        for (let childIndex in alkoholsElementChildren) {
            let child = alkoholsElementChildren[childIndex];
            let isHTMLElement = child instanceof HTMLElement;
            let isSpanElement = child.tagName === SPAN_TAG;

            if (isHTMLElement && isSpanElement) {
                spanElement = child;
                break;
            }
        }

        return spanElement;
    };
};