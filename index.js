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
    const activeMenu = document.querySelector("#menu");
    activeMenu.classList.toggle("text-white");
    window.addEventListener("scroll", () => {
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
function menuBgWhite() {
    const activeMenu = document.querySelector("#menu");
    activeMenu.classList.toggle("text-black");
    window.addEventListener("scroll", () => {
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

function dropDowns() {
    const menuFilter = document.querySelector("#menuFilter");
    menuFilter.addEventListener("click", () => {
        const dropDown = document.querySelector(".drop-downs");
        const chevron = document.querySelector(".chevron");
        chevron.attributes.d.nodeValue = (!dropDown.classList.toggle("invisible"))
            ? "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            : "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z";
    });
}

export {
    slideShow, menuActive, menuBgWhite, dropDowns,
};