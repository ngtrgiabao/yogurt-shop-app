const goToTop = document.querySelector(".go-top");

const handleScroll = () => {
    const scrollY = window.pageYOffset;

    if (scrollY < 500) {
        goToTop.classList.remove("show");
    } else {
        goToTop.classList.add("show");
    }
};

window.addEventListener("scroll", handleScroll);
