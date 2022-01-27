// eslint-disable-next-line import/no-extraneous-dependencies
import Navigo from "navigo";
import {
    HeaderDashboard, MenuDashboard, Header, Footer,
} from "./src/components";
// Pages
import {
    Dashboard, ProductList, OrderList, HomePage, Products, Author, Details,
} from "./src/pages";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const render = async (page) => {
    const layout = `${Header.render()} ${await page.render()} ${Footer.render()} `;
    document.getElementById("root").innerHTML = layout;

    if (page.afterRender) {
        page.afterRender();
    }
};

const renderAdmin = async (page) => {
    const layout = ` <div class="flex h-screen bg-gray-50">
    ${MenuDashboard.render()}
    <div class="flex flex-col flex-1 w-full">
    ${HeaderDashboard.render()}
    ${await page.render()}</div></div>`;
    document.getElementById("root").innerHTML = layout;
};

const Router = () => {
    router.on({
        "/": () => { render(HomePage); },
        "/products": () => { render(Products); },
        "/details": () => { render(Details); },
        "/admin": () => { renderAdmin(Dashboard); },
        "/admin/products": () => { renderAdmin(ProductList); },
        "/admin/orders": () => { renderAdmin(OrderList); },
        "/admin/account": () => { renderAdmin(Author); },
    });
    router.resolve();
};
export default Router;