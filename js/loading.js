window.addEventListener("DOMContentLoaded", function () {
    const loadImg = document.querySelector(".loadImg");

    function loading() {
        loadImg.style.opacity = "0";
        setTimeout(function () {
            loadImg.style.display = "none";
        }, 500);
    }
    setTimeout(loading, 3000);
});