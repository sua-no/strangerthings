window.addEventListener("DOMContentLoaded", function () {
    const characterBox = document.querySelector(".characterBox");
    const castList = document.querySelector(".characterBox ul");
    const leftGradient = document.querySelector(".leftGradient");
    const rightGradient = document.querySelector(".rightGradient");
    const boxBar = document.querySelector(".boxBar");
    let idx = 0;

    characterBox.addEventListener("wheel", listMove);
    function listMove() {
        // window.removeEventListener("scroll");
        if (event.deltaY > 0) {

            idx -= 10;
            leftGradient.style.display = "block";
        } else {

            idx += 10;
        }

        castList.style.left = idx + "%";
        bar();
    }
    function bar() {
        console.log(idx);
        boxBar.style.width = 10 + -idx + "%";

    }
});