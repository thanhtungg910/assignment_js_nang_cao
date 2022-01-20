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
        autoplay: {
            delay: 5000,
        },
    });
    const productSelling = new Swiper(".productSelling", {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        },
    });
    return { swiper, productSelling };
}
function menuActive() {
    window.addEventListener("scroll", () => {
        const activeMenu = document.querySelector("#menu");
        if (window.scrollY >= 100) {
            activeMenu.classList.add(
                "bg-white",
                "shadow-lg",
                "transition-all",
                "text-black",
            );
        } else {
            activeMenu.classList.remove(
                "bg-white",
                "shadow-lg",
                "transition-all",
                "text-black",
            );
        }
    });
}

export { slideShow, menuActive };