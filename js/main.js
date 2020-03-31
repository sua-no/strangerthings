window.addEventListener("DOMContentLoaded", function () {
    const mainUp = document.querySelectorAll(".mainup");
    //anmaition-delay
    for (var i = 0; i < mainUp.length; i++) {
        mainUp[i].style = "animation-delay : " + i * 0.5 + "s";
    }
});