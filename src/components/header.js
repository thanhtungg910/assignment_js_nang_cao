import Nav from "./partials/nav";
import Search from "./search";
import "./style.css";

const Header = {
    render() {
        return /* html */ `
        ${Search.render()}
        <header id="header_header" x-data="{ cartOpen: false, login: false, signup: false}" class="relative ">
           <div id="menu"
              class="fixed top-0 left-0 right-0   py-4 transition-all delay-1500 hover:bg-white hover:text-black  z-20">
              <div id="authen" class="flex justify-around items-center header-top">
  
                 ${Nav.render()}
                 
               </div>
            </div>
        </header>`;
    },
    async afterRender() {
        Search.afterRender();
        Nav.afterRender();
    },
};
export default Header;