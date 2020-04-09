window.addEventListener("DOMContentLoaded", function () {
    const characterBox = document.querySelector(".characterBox div:nth-of-type(1)"),
        castList = document.querySelector(".characterBox ul"),
        leftGradient = document.querySelector(".leftGradient"),
        rightGradient = document.querySelector(".rightGradient"),
        boxBar = document.querySelector(".boxBar"),
        castInfoBox = document.querySelector(".castInfo"),
        figImg = document.querySelector(".castInfo img"),
        character = document.querySelector(".castInfo div span:nth-of-type(1)"),
        cast = document.querySelector(".castInfo div span:nth-of-type(2)"),
        caption = document.querySelector(".castInfo div figcaption");
    let liIdx = 0, idx = 0, data, figNode, imgNode, txtBox, txt1, txt2, liWidth = 0, check = true;
    ;
    //load JSON
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "character.json");
    xhr.send(null);
    xhr.onload = function () {
        data = JSON.parse(xhr.responseText);
        //mobile - tag추가
        castMobile();
        window.addEventListener("resize", castMobile);
    }
    ulSize();
    characterBox.addEventListener("wheel", listMove);
    //pc - figure data change
    castList.addEventListener("click", castSelect);
    function castSelect(e) {
        target = e.target;
        for (; target.nodeName != "LI"; target = target.parentNode);
        liIdx = index(target);
        figChange();
        figAnimation();
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
    //click - figure contents change
    function figChange() {
        figImg.src = data.castInfo[liIdx].img;
        character.textContent = data.castInfo[liIdx].chracter;
        cast.textContent = data.castInfo[liIdx].cast;
        caption.textContent = data.castInfo[liIdx].info;
    }
    function figAnimation() {
        figImg.parentElement.classList.add("active");
        setTimeout(function () {
            figImg.parentElement.classList.remove("active");
        }, 800);
    }
    //scroll size
    function ulSize() {
        for (var i = 0; i < castList.children.length; i++) {
            liWidth += castList.children[i].offsetWidth;
        }
        liWidth += 13 * (castList.children.length - 1);
    }
    //horiziontal scroll
    function listMove(e) {
        this.scrollLeft -= e.wheelDelta;
        event.preventDefault();

        idx = this.scrollLeft / (liWidth - castList.offsetWidth) * 100;
        if (e.deltaY > 0) {
            if (idx == 100) {
                rightGradient.style.display = "none";
            } else {
                leftGradient.style.display = "block";
                rightGradient.style.display = "block";
            }
        } else {
            if (idx == 0) {
                leftGradient.style.display = "none";
            } else {
                rightGradient.style.display = "block";
                leftGradient.style.display = "block";
            }
        }
        bar();
    }
    function bar() {
        boxBar.style.width = idx + "%";
    }
    //mobile - JSON append
    function castMobile() {
        const mediaQuery = window.matchMedia("screen and (max-width: 720px)"),
            mediaQueryPC = window.matchMedia("screen and (min-width: 720px)");

        if (mediaQuery.matches && check) {
            check = false;
            for (var i = 0; i < data.castInfo.length; i++) {
                create(i);
                dataAppend();
            }
        } else if (mediaQueryPC.matches) {
            const figures = document.querySelectorAll(".castInfo figure");
            check = true;
            for (var i = 0; i < figures.length; i++) {
                if (!figures[i].classList.contains("fig01")) {
                    figures[i].remove(figures[i]);
                }
            }
        }
    }
    function create(i) {
        figNode = document.createElement("figure");
        imgNode = document.createElement("img");
        txtBox = document.createElement("div");
        txt1 = document.createElement("span");
        txt2 = document.createElement("span");

        imgNode.src = data.castInfo[i].img;
        txt1.textContent = data.castInfo[i].chracter;
        txt2.textContent = data.castInfo[i].cast;
    }
    function dataAppend() {
        castInfoBox.append(figNode);
        figNode.append(imgNode);
        figNode.append(txtBox);
        txtBox.append(txt1);
        txtBox.append(txt2);
    }
});