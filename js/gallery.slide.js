window.addEventListener("DOMContentLoaded", function () {
    const mainImg = document.querySelector(".mainImg"),
        prevBtn = document.querySelector(".galleryPrev"),
        nextBtn = document.querySelector(".galleryNext"),
        prevImg = document.querySelector(".prevImg"),
        nextImg = document.querySelector(".nextImg");
    let idx = 1; prevIdx = 0, nextIdx = 0;
    //load JSON
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "gallery.json");
    xhr.send(null);
    xhr.onload = function () {
        data = JSON.parse(xhr.responseText);
    }
    prevBtn.addEventListener("click", prevChange);
    nextBtn.addEventListener("click", nextChange);

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
    }
    function changeImages() {
        mainImg.children[0].src = data.gallery[idx];
        prevImg.src = data.gallery[prevIdx];
        nextImg.src = data.gallery[nextIdx];
        // mainImg.classList.add("active");
        // setTimeout(function () {
        //     mainImg.classList.remove("active");
        // }, 350);
    }

});