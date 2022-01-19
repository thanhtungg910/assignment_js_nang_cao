/* eslint-disable import/no-unresolved */
// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

// eslint-disable-next-line no-unused-vars
function slideShow() {
    const swiper = new Swiper(".banner", {
        spaceBetween: 30,
        loop: true,
        effect: "fade",
        /*   autoplay: {
            delay: 5000,
        }, */
    });
    return swiper;
}
function menuActive() {
    window.addEventListener("scroll", () => {
        const activeMenu = document.querySelector("#menu");
        if (window.scrollY >= 200) {
            activeMenu.classList.add("bg-white", "shadow-lg", "transition-all", "text-black");
        } else {
            activeMenu.classList.remove("bg-white", "shadow-lg", "transition-all", "text-black");
        }
    });
}

export { slideShow, menuActive };