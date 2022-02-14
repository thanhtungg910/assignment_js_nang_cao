// eslint-disable-next-line import/no-extraneous-dependencies
import Navigo from "navigo";
import {
    HeaderDashboard, MenuDashboard, Header, Footer,
} from "./src/components";
// Pages
import {
    Dashboard, ProductList, OrderList, HomePage, Products,
    Author, Details, Categories, Contacts, Signin, Signup, AddProduct, EditProduct, Checkout,
} from "./src/pages";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const render = async (page, id) => {
    if (!page.afterLogin) {
        const layout = `${Header.render()} ${await page.render(id)} ${Footer.render()} `;
        document.getElementById("root").innerHTML = layout;
        Header.afterRender();
        if (page.afterRender) {
            page.afterRender();
        }
    } else {
        const layout = `${await page.render()}`;
        document.getElementById("root").innerHTML = layout;
        page.afterLogin();
    }
};

const renderAdmin = async (page, id) => {
    const layout = `<div class="flex h-screen bg-gray-50">
    ${MenuDashboard.render()}
    <div class="flex flex-col flex-1 w-full">
    ${HeaderDashboard.render()}
    ${await page.render(id)}</div></div>`;
    document.getElementById("root").innerHTML = layout;
    MenuDashboard.afterRender();
    if (page.afterRender) {
        page.afterRender(id);
    }
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
        "/products/*": () => { render(Products); },
        "/checkout": () => { render(Checkout); },
        "/productCates/*": () => { render(Products); },
        "/details/:id": ({ data: { id } }) => { render(Details, id); },
        "/contact": () => { render(Contacts); },
        "/admin": () => { renderAdmin(Dashboard); },
        "/admin/products": () => { renderAdmin(ProductList); },
        "/admin/products/add": () => { renderAdmin(AddProduct); },
        "/admin/products/edit/:id": ({ data: { id } }) => { renderAdmin(EditProduct, id); },
        "/admin/category": () => { renderAdmin(Categories); },
        "/admin/orders": () => { renderAdmin(OrderList); },
        "/admin/account": () => { renderAdmin(Author); },
    });
    router.resolve();
};
export default Router;