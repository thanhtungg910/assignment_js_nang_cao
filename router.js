// eslint-disable-next-line import/no-extraneous-dependencies
import Navigo from "navigo";
import {
    slideShow, menuActive, menuBgWhite, dropDowns,
} from ".";
// Components
import {
    HeaderDashboard, MenuDashboard, Header, Footer,
} from "./src/components/index";
// Pages
import {
    Dashboard, ProductList, OrderList, HomePage, Products,
} from "./src/pages/index";

const router = new Navigo("/", { linksSelector: "a" });

const render = (page) => {
    const layout = `${Header.render()} ${page.render()} ${Footer.render()}`;
    document.getElementById("root").innerHTML = layout;
};

const renderAdmin = (page) => {
    const layout = `${HeaderDashboard.render()}
   <div class="flex overflow-hidden bg-white pt-16">
            ${MenuDashboard.render()}
   <div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
   <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
      ${page.render()}
   </div>
   </div>`;
    document.getElementById("root").innerHTML = layout;
};

const Router = () => {
    router.on({
        "/": () => {
            render(HomePage);
            menuActive();
            slideShow();
        },
        "/products": () => {
            render(Products);
            menuBgWhite();
            dropDowns();
        },
        "/admin": () => {
            renderAdmin(Dashboard);
        },
        "/admin/product": () => {
            renderAdmin(ProductList);
        },
        "/admin/order": () => {
            renderAdmin(OrderList);
        },
    });
    router.resolve();
};
export default Router;