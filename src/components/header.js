/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
import reRender from "../utils/rerender";
import Cart from "./cart";
import Nav from "./partials/nav";
import Search from "./search";
import "./style.css";

const Header = {
    render() {
        return /* html */ `
        ${Search.render()}
        <header x-data="{ cartOpen: false, login: false, signup: false}" class="relative ">
           <div id="menu"
              class="fixed top-0 left-0 right-0   py-4 transition-all delay-1500 hover:bg-white hover:text-black  z-20">
              <div id="authen" class="flex justify-around items-center header-top">
  
                 ${Nav.render()}
  
              </div>
           </div>
           ${Cart.render()}
        </header>`;
    },
    async afterRender() {
        const logout = document.querySelector(".logout");
        const openmodal = document.querySelectorAll(".modal-open");
        for (let i = 0; i < openmodal.length; i++) {
            openmodal[i].addEventListener("click", (event) => {
                event.preventDefault();
                toggleModal();
            });
        }

        const overlay = document.querySelector(".modal-overlay");
        overlay.addEventListener("click", toggleModal);

        const closemodal = document.querySelectorAll(".modal-close");
        for (let i = 0; i < closemodal.length; i++) {
            closemodal[i].addEventListener("click", toggleModal);
        }
        function toggleModal() {
            const body = document.querySelector("body");
            const modal = document.querySelector(".modal");
            modal.classList.toggle("opacity-0");
            modal.classList.toggle("pointer-events-none");
            body.classList.toggle("modal-active");
        }
        if (logout) {
            logout.addEventListener("click", (e) => {
                e.preventDefault();
                localStorage.removeItem("user");
                reRender("#authen", Nav);
            });
        }
        Search.afterRender();
    },
};
export default Header;