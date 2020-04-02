window.addEventListener("DOMContentLoaded", function () {
    const mainUp = document.querySelectorAll(".mainup");
    const slide = document.querySelectorAll(".slide");
    const rightNav = document.querySelectorAll(".rightNav");
    const span = rightNav[0].querySelectorAll("span");
    let pageIndex = 0;
    let clickIndex;
    let timer = true;
    //touch
    window.addEventListener("touchstart", touch);
    //anmaition-delay
    for (var i = 0; i < mainUp.length; i++) {
        mainUp[i].style = "animation-delay : " + i * 0.5 + "s";
    }
    //click - indigator
    for (var i = 0; i < span.length; i++) {
        span[i].addEventListener("click", spanClick);
    }
    //wheel - slide
    for (var i = 0; i < slide.length; i++) {
        slide[i].addEventListener("wheel", wheelManager);
    }

    //click - indigator
    function spanClick() {
        clickIndex = index(event.target);
        if (pageIndex < clickIndex) {
            for (pageIndex; pageIndex < clickIndex;) {
                pageUp();
            }
        } else {
            for (pageIndex; pageIndex > clickIndex;) {
                pageDown();
            }
        }
        spanColor();
    }
    //wheel manager
    function wheelManager() {
        if (timer == true) {
            timer = false;
            //wheel down
            if (event.deltaY > 0) {
                if (pageIndex < slide.length - 1) {
                    pageUp();
                }
                //wheel up
            } else {
                if (pageIndex != 0) {
                    pageDown();
                }
            }
            spanColor();
            setTimeout(function () {
                timer = true;
            }, 1000);
        }
    }
    // touch
    function touch(e) {
        console.log(e.clientY);
    }
    //page up
    function pageUp() {
        slide[pageIndex].style.transform = "translateY(-100%)";
        pageIndex++;
    }
    //page down
    function pageDown() {
        slide[pageIndex - 1].style.transform = "translateY(0%)";
        pageIndex--;
    }
    //color change
    function spanColor() {
        for (var i = 0; i < span.length; i++) {
            if (span[i].classList.contains("backRed")) {
                span[i].classList.remove("backRed");
            }
        }
        span[pageIndex].classList.add("backRed");
    }
    //get index
    function index(target) {
        let hole = 0;
        while ((target = target.previousSibling) != null) {
            if (target.nodeType != 3) {
                hole++;
            }
        }
        return hole;
    }
});
