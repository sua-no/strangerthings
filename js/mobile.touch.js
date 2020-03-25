window.addEventListener("load", function () {
    const mediaQuery = window.matchMedia("screen and (max-width: 1023px)");
    let touchStart;
    let touchEnd;
    if (mediaQuery.matches) {
        window.addEventListener("touchstart", function (e) {
            console.log(e.changedTouches[0].screenY);
            touchStart = e.changedTouches[0].screenY;
        });
        window.addEventListener("touchend", function (e) {
            console.log(e.changedTouches[0].screenY);
            touchEnd = e.changedTouches[0].screenY;
            if (touchEnd < touchStart) {
                pageUp();
            } else if (touchStart < touchEnd) {
                pageDown();
            }
        });
    }
});