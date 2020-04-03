window.addEventListener("DOMContentLoaded", function () {
    const galleryList = document.querySelector(".galleryInner ul");
    const selectImg = document.querySelector(".selectImg");
    const scrollBar = document.querySelector(".scrollBar");
    const popImg = selectImg.querySelector("img");
    const closer = document.querySelector(".closer");
    const prevG = document.querySelector(".prevG");
    const nextG = document.querySelector(".nextG");
    let idx = 0;
    let imgSrc;

    galleryList.addEventListener("click", popup);
    closer.addEventListener("click", hide);
    prevG.addEventListener("click", prevImg);
    nextG.addEventListener("click", nextImg);

    function popup(e) {
        target = e.target;
        for (; target.nodeName != "LI"; target = target.parentNode);
        idx = index(target);
        imgChange();
        selectImg.classList.add("active");
        scrollBar.style.display = "none";
    }
    //li 인덱스
    function index(target) {
        let hole = 0;
        while ((target = target.previousSibling) != null) {
            if (target.nodeType != 3) {
                hole++;
            }
        }
        return hole;
    }
    function hide() {
        selectImg.classList.remove("active");
        scrollBar.style.display = "block";
    }
    function imgChange() {
        imgSrc = galleryList.children[idx].children[0].getAttribute("src");
        popImg.setAttribute("src", imgSrc);
    }
    function prevImg() {
        if (idx == 0) {
            idx = 7;
        } else {
            idx--;
        }
        imgChange();
    }
    function nextImg() {
        if (idx == 7) {
            idx = 0;
        } else {
            idx++;
        }
        imgChange();
    }
});