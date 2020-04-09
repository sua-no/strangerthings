window.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector("section");
    const up = document.querySelectorAll(".up");
    const windowHeight = window.innerHeight;
    let scrollTop, upOffset;
    // console.log(up);
    contentsUp();
    section.addEventListener("scroll", contentsUp);
    //scroll - contents up
    function contentsUp() {
        scrollTop = section.scrollTop;
        for (var i = 0; i < up.length; i++) {
            upOffset = up[i].offsetTop;
            if (upOffset - windowHeight < scrollTop) {
                up[i].style = "margin-top:0; opacity:1;";
            }
        }
    }
});

