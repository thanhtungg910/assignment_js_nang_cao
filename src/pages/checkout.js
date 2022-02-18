import toastr from "toastr";
import "toastr/build/toastr.min.css";
import CheckoutList from "../components/checkout";
import { addOrder } from "../api/orders";
import { addOrderDetails } from "../api/ordersDetails";
import $ from "../utils/dom";
import { getCarts } from "../api/cart";

const CheckoutPage = {
    render() {
        document.title = "Thanh toán";
        return /* html */ `
        <main class="max-w-4xl container mx-auto my-32">
           <div id="checkout-table" class="container mx-auto px-6 bg-white border-2 pb-6">
              ${CheckoutList.render()}
           </div>
        </main>`;
    },
    afterRender() {
        const activeMenu = document.querySelector("#menu");
        activeMenu.classList.toggle("text-black");
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 100) {
                activeMenu.classList.add(
                    "bg-white",
                    "shadow-lg",
                    "transition-all",
                    "text-black",
                );
            } else {
                activeMenu.classList.remove(
                    "bg-white",
                    "shadow-lg",
                    "transition-all",
                    "text-black",
                );
            }
        });
        CheckoutList.afterRender();
        $("#form-checkout").addEventListener("submit", (e) => {
            e.preventDefault();
            const products = getCarts();
            /* Them san pham vào order  */
            addOrder({
                customer_name: $(".username").value,
                customer_address: $(".address").value,
                customer_email: $(".email").value,
                customer_phone: $(".phone").value,
                nodes: $(".message").value,
                created_date: "2022-01-15T01:54:24.955Z",
                status: "0",
            })
                .then(({ data: { id: orderId } }) => {
                    products.forEach((item) => {
                        /* Them san pham vào order chi tiet */
                        addOrderDetails({
                            orderId,
                            productId: item.id,
                            quantity: item.amount,
                        });
                    });
                })
                .then(() => {
                    toastr.success("Đặt hàng thành công!");
                    localStorage.setItem("cart", JSON.stringify([]));
                    setTimeout(() => {
                        document.location.href = "/#/products";
                    }, 1000);
                })
                .catch((err) => toastr.error(err));
        });
    },
};
export default CheckoutPage;