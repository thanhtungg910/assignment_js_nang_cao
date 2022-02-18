import AWN from "awesome-notifications";
import "awesome-notifications/dist/style.css"; import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { getProduct } from "./products";
// eslint-disable-next-line import/no-cycle
import Nav from "../components/partials/nav";
import reRender from "../utils/rerender";

const notifier = new AWN();

if (localStorage.getItem("cart") === null) {
    localStorage.setItem("cart", JSON.stringify([]));
}
let cart = (localStorage.getItem("cart") !== null) ? JSON.parse(localStorage.getItem("cart")) : [];

const AddToCart = async (dom, payUpload = false) => {
    if (dom) {
        const addToCart = document.querySelectorAll(dom);
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
                        color: data?.options[0]?.value[0],
                        size: data?.options[1]?.value[0],
                    };
                    // eslint-disable-next-line no-restricted-syntax
                    for (const key in cart) {
                        if (cart[key].id === id) {
                            cart[key].amount += 1;
                            localStorage.setItem("cart", JSON.stringify(cart));
                            reRender("#authen", Nav);
                            toastr.success("Thêm thành công");
                            return;
                        }
                    }
                    cart = [...cart, item];
                    localStorage.setItem("cart", JSON.stringify(cart));
                    reRender("#authen", Nav);
                    toastr.success("Thêm thành công");
                }
            });
        });
    }
    if (payUpload) {
        const {
            color, size, id, amount,
        } = payUpload;
        const { data } = await getProduct(id);
        if (data) {
            const currentCart = cart.find((item) => item.id === id);
            if (currentCart) {
                currentCart.amount += (+amount) || 1;
                currentCart.color = color;
                currentCart.size = size;
            } else {
                cart.push({
                    id: data.id,
                    title: data.title,
                    featured_image: data.featured_image,
                    amount: (+amount) || 1,
                    price: data.price,
                    sale_off: data.sale_off,
                    color,
                    size,
                });
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            reRender("#authen", Nav);
            toastr.success("Thêm thành công");
        }
    }
};

const getCarts = () => JSON.parse(localStorage.getItem("cart"));

const deleteItemCart = (dom, dom2, component = Nav) => {
    const btnDelete = document.querySelectorAll(dom);
    btnDelete.forEach((btn) => {
        btn.addEventListener("click", () => {
            const { id } = btn.dataset;
            const data = getCarts();
            cart = data.filter((item) => item.id !== id);
            if (data) {
                const onOk = () => {
                    localStorage.setItem("cart", JSON.stringify(cart));
                    if (component) {
                        reRender(dom2, component);
                    }
                    reRender("#authen", Nav);
                    toastr.success("Xóa thành công");
                };
                const onCancel = () => "";
                notifier.confirm(
                    " ",
                    onOk,
                    onCancel,
                    {
                        labels: {
                            confirm: "Bạn có muốn xóa sản phẩm này không?",
                        },
                    },
                );
            }
        });
    });
};
const increaseItemInCart = (id, dom, component) => {
    cart.find((item) => item.id === id).amount += 1;

    localStorage.setItem("cart", JSON.stringify(cart));
    if (component) {
        reRender(dom, component);
    }
    return reRender("#authen", Nav);
};
const decreaseItemInCart = (id, dom, component) => {
    const currentCart = cart.find((item) => item.id === id);
    currentCart.amount = (currentCart.amount <= 0) ? 1 : currentCart.amount -= 1;
    if (currentCart.amount <= 0) {
        const onOk = () => {
            cart = cart.filter((item) => item.id !== id);
            localStorage.setItem("cart", JSON.stringify(cart));
            reRender("#authen", Nav);
            if (component) {
                reRender(dom, component);
            }
            return toastr.success("Xóa thành công");
        };
        const onCancel = () => {
            currentCart.amount = 1;
            localStorage.setItem("cart", JSON.stringify(cart));

            if (component) {
                reRender(dom, component);
            }
            return reRender("#authen", Nav);
        };
        notifier.confirm(
            " ",
            onOk,
            onCancel,
            {
                labels: {
                    confirm: "Bạn có muốn xóa sản phẩm này không?",
                },
            },
        );
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    if (component) {
        reRender(dom, component);
    }
    return reRender("#authen", Nav);
};
export {
    AddToCart,
    getCarts,
    deleteItemCart,
    increaseItemInCart,
    decreaseItemInCart,
};