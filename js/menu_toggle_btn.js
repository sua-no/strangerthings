function btnManager() {
    const menuToggleBtn = document.querySelector(".menuToggleBtn");
    const gnb = document.querySelector(".gnb");

    menuToggleBtn.addEventListener("click", gnbShow);
    function gnbShow() {
        this.classList.toggle("active");
        gnb.classList.toggle("active");
    }
}