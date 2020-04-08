window.addEventListener("DOMContentLoaded", function () {
    const characterInfo = document.querySelector(".characterInfo");
    const characterUl = document.querySelector(".characterInfo ul");
    const characterli = document.querySelectorAll(".characterInfo ul li");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let liHeight;
    let idx = 0;

    inIt();
    //resize event - mediaquery, ul size
    window.addEventListener("resize", inIt);
    nextBtn.addEventListener("click", slideLeft);
    prevBtn.addEventListener("click", slideRight);
    //mediaquery - ul, li size
    function inIt() {
        const mediaQuery = window.matchMedia("screen and (max-width: 720px)");
        const mediaQueryPc = window.matchMedia("screen and (min-width: 1024px)");
        if (mediaQueryPc.matches) {
            ulSizePc();
        } else if (mediaQuery.matches) {
            liSort();
            setTimeout(ulSize, 300);
        }
    }
    function ulSize() {
        liHeight = characterli[0].getBoundingClientRect().height;
        characterInfo.style.height = liHeight + "px";
        characterUl.style.height = liHeight + "px";
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
        } else {
            prevBtn.style.display = "block";
            nextBtn.style.display = "block";
        }
    }
})