window.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header"),
        characterBox = document.querySelector(".characterBox div:nth-of-type(1)"),
        section = document.querySelector("section");
    let scroll = true;

    const headerHTML = new XMLHttpRequest();
    headerHTML.open("GET", "header.html");
    headerHTML.send(null);
    headerHTML.addEventListener('load', function () {
        header.innerHTML = headerHTML.response;
        btnManager();
        try {
            characterBox.addEventListener("wheel", function () {
                scroll = false;
                setTimeout(function () {
                    scroll = true;
                }, 100);
            });
        } catch{ }
        window.addEventListener("wheel", headerHide);
        function headerHide(e) {
            if (e.target == header) {
                return;
            }
            if (scroll) {
                if (event.deltaY > 0) {
                    header.classList.add("active");
                } else {
                    header.classList.remove("active");
                }
            }

        }
    });
});