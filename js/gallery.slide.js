window.addEventListener("DOMContentLoaded", function () {
    const mainImg = document.querySelector(".mainImg"),
        prevBtn = document.querySelector(".galleryPrev"),
        nextBtn = document.querySelector(".galleryNext"),
        prevImg = document.querySelector(".prevImg"),
        nextImg = document.querySelector(".nextImg"),
        secondImg = document.querySelector(".secondImg");
    let idx = 1; prevIdx = 0, nextIdx = 0;

    //load JSON
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "gallery.json");
    xhr.send(null);
    xhr.onload = function () {
        data = JSON.parse(xhr.responseText);
    }
    prevBtn.addEventListener("click", prevChange);
    prevImg.addEventListener("click", prevChange);
    nextBtn.addEventListener("click", nextChange);
    nextImg.addEventListener("click", nextChange);

    function prevChange() {
        ++idx;
        nextIdx = idx + 1;
        prevIdx = idx - 1;
        if (idx == 5) {
            nextIdx = 0;
        } else if (idx == 6) {
            idx = 0;
            nextIdx = idx + 1;
        }
        changeImages();
        prevAnimation();
    }
    function nextChange() {
        --idx;
        nextIdx = idx + 1;
        prevIdx = idx - 1;
        if (idx == 0) {
            prevIdx = 5;
        } else if (idx == -1) {
            idx = 5;
            prevIdx = idx - 1;
        }
        changeImages();
        nextAnimation();
    }
    function changeImages() {
        mainImg.children[0].src = data.gallery[idx];
        prevImg.src = data.gallery[prevIdx];
        nextImg.src = data.gallery[nextIdx];
    }
    function prevAnimation() {
        mainImg.classList.add("active");
        secondImg.classList.add("prev");
        setTimeout(function () {
            mainImg.classList.remove("active");
            secondImg.classList.remove("prev");
        }, 350);
    }
    function nextAnimation() {
        mainImg.classList.add("active");
        secondImg.classList.add("next");
        setTimeout(function () {
            mainImg.classList.remove("active");
            secondImg.classList.remove("next");
        }, 350);
    }
});