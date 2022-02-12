import reRender from "../utils/rerender";
import Cart from "./cart";
import Nav from "./partials/nav";

const Header = {
    render() {
        return /* html */ `
        <header x-data="{ cartOpen: false, login: false, signup: false}" class="relative ">
        <div id="menu"
           class="fixed top-0 left-0 right-0   py-4 transition-all delay-1500 hover:bg-white hover:text-black  z-50">
           <div id="authen" class="flex justify-around items-center header-top">
              
              ${Nav.render()}
              
           </div>
        </div>
        ${Cart.render()}
     </header>`;
    },
    afterRender() {
        const logout = document.querySelector(".logout");
        if (logout) {
            logout.addEventListener("click", (e) => {
                e.preventDefault();
                localStorage.removeItem("user");
                reRender("#authen", Nav);
            });
        }
    },
};
export default Header;