// eslint-disable-next-line import/no-extraneous-dependencies
import Navigo from "navigo";
import {
    HeaderDashboard, MenuDashboard, Header, Footer,
} from "./src/components";
// Pages
import {
    Dashboard, ProductList, OrderList, HomePage, Products, Author, Details, Categories, Contacts, Signin, Signup,
} from "./src/pages";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const render = async (page) => {
    if (!page.afterLogin) {
        const layout = `${Header.render()} ${await page.render()} ${Footer.render()} `;
        document.getElementById("root").innerHTML = layout;
        if (page.afterRender) {
            page.afterRender();
        }
    } else {
        const layout = `${await page.render()}`;
        document.getElementById("root").innerHTML = layout;
        page.afterLogin();
    }
};

const renderAdmin = async (page) => {
    const layout = `<div class="flex h-screen bg-gray-50">
    ${MenuDashboard.render()}
    <div class="flex flex-col flex-1 w-full">
    ${HeaderDashboard.render()}
    ${await page.render()}</div></div>`;
    document.getElementById("root").innerHTML = layout;
};

const Router = () => {
    router.on("/admin/*", () => {}, {
        before(done) {
            if (JSON.parse(localStorage.getItem("user"))) {
                const { id } = JSON.parse(localStorage.getItem("user"));
                if (id === 1) {
                    done();
                } else {
                    document.location.href = "/";
                }
            } else {
                document.location.href = "/";
            }
        },
    });
    router.on({
        "/": () => { render(HomePage); },
        "/login": () => { render(Signin); },
        "/signup": () => { render(Signup); },
        "/products": () => { render(Products); },
        "/details": () => { render(Details); },
        "/contact": () => { render(Contacts); },
        "/admin": () => { renderAdmin(Dashboard); },
        "/admin/products": () => { renderAdmin(ProductList); },
        "/admin/category": () => { renderAdmin(Categories); },
        "/admin/orders": () => { renderAdmin(OrderList); },
        "/admin/account": () => { renderAdmin(Author); },
    });
    router.resolve();
};
export default Router;