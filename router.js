// eslint-disable-next-line import/no-extraneous-dependencies
import Navigo from "navigo";
import {
    HeaderDashboard, MenuDashboard, Header, Footer,
} from "./src/components";
// Pages
import {
    Dashboard, ProductList, OrderList, HomePage, ProductsPage,
    Author, DetailsPage, Categories, ContactsPage, SigninPage,
    SignupPage, AddProduct, EditProduct, CheckoutPage, BlogsPage,
    ArticlePage, BlogsPageDashboard, AddBlogsPage, EditBlogPage,
    ContactsPageDashboard, InboxPage, ProfilePage, MePage, MyCartPage,
} from "./src/pages";
import NotFoundPage from "./src/pages/notfound";

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
    /**
    * Private router admin
    */
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
    /**
     * Private client
     */
    router.on("/me/*", () => {}, {
        before(done) {
            if (JSON.parse(localStorage.getItem("user"))) {
                done();
            } else {
                document.location.href = "/";
            }
        },
    });
    router.on({
        "/": () => { render(HomePage); },
        "/login": () => { render(SigninPage); },
        "/signup": () => { render(SignupPage); },
        "/products/*": () => { render(ProductsPage); },
        "/checkout": () => { render(CheckoutPage); },
        "/blogs": () => { render(BlogsPage); },
        "/blogs/:id": ({ data: { id } }) => { render(ArticlePage, id); },
        "/productCates/*": () => { render(ProductsPage); },
        "/details/:id": ({ data: { id } }) => { render(DetailsPage, id); },
        "/contact": () => { render(ContactsPage); },
        "/profile": () => { render(ProfilePage); },
        "/me": () => { render(MePage); },
        "/me/mycart": () => { render(MyCartPage); },
        "/admin": () => { renderAdmin(Dashboard); },
        "/admin/products": () => { renderAdmin(ProductList); },
        "/admin/products/add": () => { renderAdmin(AddProduct); },
        "/admin/products/edit/:id": ({ data: { id } }) => { renderAdmin(EditProduct, id); },
        "/admin/category": () => { renderAdmin(Categories); },
        "/admin/orders": () => { renderAdmin(OrderList); },
        "/admin/account": () => { renderAdmin(Author); },
        "/admin/blogs": () => { renderAdmin(BlogsPageDashboard); },
        "/admin/blogs/add": () => { renderAdmin(AddBlogsPage); },
        "/admin/blogs/edit/:id": ({ data: { id } }) => { renderAdmin(EditBlogPage, id); },
        "/admin/contacts": () => { renderAdmin(ContactsPageDashboard); },
        "/admin/contacts/inbox/:id": ({ data: { id } }) => { renderAdmin(InboxPage, id); },

    }).notFound(() => { NotFoundPage.render(); });
    router.resolve();
};
export default Router;