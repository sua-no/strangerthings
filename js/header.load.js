window.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const headerHTML = new XMLHttpRequest();
    headerHTML.open("GET", "header.html");
    headerHTML.send(null);
    headerHTML.addEventListener('load', function () {
        header.innerHTML = headerHTML.response;
        btnManager();
    });
});