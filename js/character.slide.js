window.addEventListener("DOMContentLoaded", function () {
    const characterInfo = document.querySelector(".characterInfo"),
        characterUl = document.querySelector(".characterInfo ul"),
        characterli = document.querySelectorAll(".characterInfo ul li"),
        prevBtn = document.querySelector(".prev"),
        nextBtn = document.querySelector(".next");
    let liHeight, idx = 0;

    inIt();
    //resize event - mediaquery, ul size
    window.addEventListener("resize", inIt);
    nextBtn.addEventListener("click", slideLeft);
    prevBtn.addEventListener("click", slideRight);
    //mediaquery - ul, li size
    function inIt() {
        const mediaQuery = window.matchMedia("screen and (max-width: 720px)"),
            mediaQueryTablet = window.matchMedia("screen and (min-width: 720px)"),
            mediaQueryPc = window.matchMedia("screen and (min-width: 1024px)");
        if (mediaQueryPc.matches) {
            ulSizePc();
        } else if (mediaQueryTablet.matches) {
            liSort();
            setTimeout(ulSizeTablet, 300);
        } else if (mediaQuery.matches) {
            liSort();
            setTimeout(ulSize, 300);
        }
    }
    function ulSize() {
        liHeight = characterli[0].getBoundingClientRect().height;
        characterInfo.style.height = liHeight + "px";
        characterUl.style.height = liHeight + "px";
    }//tablet ver
    function ulSizeTablet() {
        liHeight = characterli[0].getBoundingClientRect().height;
        characterInfo.style.height = liHeight * 2 + "px";
        characterUl.style.height = liHeight * 2 + "px";
    }
    //pc ver
    function ulSizePc() {
        liHeight = characterli[0].getBoundingClientRect().height;
        characterInfo.style.height = liHeight + 100 + "px";
        characterUl.style.height = liHeight + 100 + "px";
    }
    //li sort
    function liSort() {
        for (var i = 0; i < characterli.length; i++) {
            characterli[i].style.left = i * 100 + "%";
        }
    }
    //click - next
    function slideLeft() {
        idx++;
        slideAnimate();
    }
    //click - prev
    function slideRight() {
        idx--;
        slideAnimate();
    }
    //slide move
    function slideAnimate() {
        characterUl.style.left = idx * -100 + "%";
        btnHide();
    }
    function btnHide() {
        if (idx == 0) {
            prevBtn.style.display = "none";
        } else if (idx == characterli.length - 1) {
            nextBtn.style.display = "none";
            console.log("dd");
        } else {
            prevBtn.style.display = "block";
            nextBtn.style.display = "block";
        }
    }
})