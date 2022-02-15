import CheckoutList from "../components/checkout";

const Checkout = {
    render() {
        document.title = "Thanh toán";
        //   (JSON.parse(localStorage.getItem("cart")).length !== 0)
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
    },
};
export default Checkout;