/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import { getProduct } from "./products";
// eslint-disable-next-line import/no-cycle
import Nav from "../components/partials/nav";
import reRender from "../utils/rerender";

const AddToCart = (dom = false, color = false, size = false) => {
    if (!dom) {
        console.log(dom);
    }
    const addToCart = document.querySelectorAll(dom);

    if (localStorage.getItem("cart") === null) {
        localStorage.setItem("cart", JSON.stringify([]));
    }
    let cart = (localStorage.getItem("cart") !== null) ? JSON.parse(localStorage.getItem("cart")) : [];
    addToCart.forEach((btn) => {
        // eslint-disable-next-line consistent-return
        btn.addEventListener("click", async () => {
            const { id } = btn.dataset;
            const { data } = await getProduct(id);
            if (data) {
                const colorVal = color || data?.options[0]?.value[0];
                const sizeVal = size || data?.options[1]?.value[0];
                const item = {
                    id: data.id,
                    title: data.title,
                    featured_image: data.featured_image,
                    amount: 1,
                    price: data.price,
                    sale_off: data.sale_off,
                    color: colorVal,
                    size: sizeVal,
                };
                if (color && size) {
                    const cartLocalStorage = JSON.parse(localStorage.getItem("cart"));
                    const result = cartLocalStorage.map((item) => {
                        if (item.id === id) {
                            item.amount += 1;
                            item.color = color;
                            item.size = size;
                        }
                        return item;
                    });
                    return localStorage.setItem("cart", JSON.stringify(result));
                }
                // eslint-disable-next-line no-restricted-syntax
                for (const key in cart) {
                    if (cart[key].id === id) {
                        cart[key].amount += 1;
                        localStorage.setItem("cart", JSON.stringify(cart));
                        reRender("#authen", Nav);
                        // eslint-disable-next-line consistent-return
                        return;
                    }
                }
                cart = [...cart, item];
                localStorage.setItem("cart", JSON.stringify(cart));
                reRender("#authen", Nav);
            }
        });
    });
};
const getCarts = () => JSON.parse(localStorage.getItem("cart"));
const deleteItemCart = (dom, dom2, component = Nav) => {
    const btnDelete = document.querySelectorAll(dom);
    btnDelete.forEach((btn) => {
        btn.addEventListener("click", () => {
            const { id } = btn.dataset;
            const data = getCarts();
            const cart = data.filter((item) => item.id !== id);
            if (data) {
                localStorage.setItem("cart", JSON.stringify(cart));
                if (component) {
                    reRender(dom2, component);
                }
            }
        });
    });
};
export {
    AddToCart,
    getCarts,
    deleteItemCart,
};