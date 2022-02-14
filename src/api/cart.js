import { getProduct } from "./products";
// eslint-disable-next-line import/no-cycle
import Nav from "../components/partials/nav";
import reRender from "../utils/rerender";

const AddToCart = (dom) => {
    const addToCart = document.querySelectorAll(dom);

    if (localStorage.getItem("cart") === null) {
        localStorage.setItem("cart", JSON.stringify([]));
    }
    let cart = (localStorage.getItem("cart") !== null) ? JSON.parse(localStorage.getItem("cart")) : [];
    addToCart.forEach((btn) => {
        btn.addEventListener("click", async () => {
            const { id } = btn.dataset;
            const { data } = await getProduct(id);
            if (data) {
                const item = {
                    id: data.id,
                    title: data.title,
                    featured_image: data.featured_image,
                    amount: 1,
                    price: data.price,
                    sale_off: data.sale_off,
                };
                // eslint-disable-next-line no-restricted-syntax
                for (const key in cart) {
                    if (+cart[key].id === +id) {
                        cart[key].amount += 1;
                        localStorage.setItem("cart", JSON.stringify(cart));
                        reRender("#authen", Nav);
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
export {
    AddToCart,
    getCarts,
};