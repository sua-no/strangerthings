window.addEventListener("DOMContentLoaded", function () {
    const galleryList = document.querySelector(".galleryInner ul"),
        selectImg = document.querySelector(".selectImg"),
        scrollBar = document.querySelector(".scrollBar"),
        popImg = selectImg.querySelector("img"),
        closer = document.querySelector(".closer"),
        prevG = document.querySelector(".prevG"),
        nextG = document.querySelector(".nextG"),
        more = document.querySelector(".more");
    let idx = 0, imgSrc, liNode, imgNode, itemRow = 8, first = 0, last = itemRow, count = 0;

    //load JSON
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "gallery.json");
    xhr.send(null);
    xhr.onload = function () {
        data = JSON.parse(xhr.responseText);
        galleryLoad();
    }
    galleryList.addEventListener("click", popup);
    closer.addEventListener("click", hide);
    prevG.addEventListener("click", prevImg);
    nextG.addEventListener("click", nextImg);
    more.addEventListener("click", moreImges);

    function galleryLoad() {
        for (var i = 0; i < data.gallery.length; i++) {
            if (first <= i && i < last) {
                liNode = document.createElement("li");
                imgNode = document.createElement("img");
                imgNode.src = data.gallery[i];
                liNode.append(imgNode)
                galleryList.append(liNode);
                count++;
            }
        }
    }
    function moreImges() {
        first += itemRow;
        last += itemRow;
        galleryLoad();
        selectImg.classList.add("active2");
        if (count == data.gallery.length) {
            more.style.display = "none";
        }
    }
    function popup(e) {
        target = e.target;
        for (; target.nodeName != "LI"; target = target.parentNode);
        idx = index(target);
        imgChange();
        selectImg.classList.add("active");
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
            idx = last - 1;
        } else {
            idx--;
        }
        imgChange();
    }
    function nextImg() {
        if (idx == last - 1) {
            idx = 0;
        } else {
            idx++;
        }
        imgChange();
    }
});