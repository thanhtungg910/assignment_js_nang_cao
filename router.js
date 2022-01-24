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
    Dashboard, ProductList, OrderList, HomePage, Products, Author, Details,
} from "./src/pages/index";

const router = new Navigo("/", { linksSelector: "a" });

const render = (page) => {
    const layout = `${Header.render()} ${page.render()} ${Footer.render()}`;
    document.getElementById("root").innerHTML = layout;
};

const renderAdmin = (page) => {
    const layout = ` <div class="flex h-screen bg-gray-50">
    ${MenuDashboard.render()}
    <div class="flex flex-col flex-1 w-full">
    ${HeaderDashboard.render()}
    ${page.render()}</div></div>`;
    document.getElementById("root").innerHTML = layout;
    MenuDashboard.afterRender();
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
        "/details": () => {
            render(Details);
            menuBgWhite();
        },
        "/admin": () => {
            renderAdmin(Dashboard);
        },
        "/admin/products": () => {
            renderAdmin(ProductList);
        },
        "/admin/orders": () => {
            renderAdmin(OrderList);
        },
        "/admin/account": () => {
            renderAdmin(Author);
        },
    });
    router.resolve();
};
export default Router;