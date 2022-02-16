// eslint-disable-next-line import/no-cycle
import {
    decreaseItemInCart, deleteItemCart, getCarts, increaseItemInCart,
} from "../api/cart";
import $ from "../utils/dom";

const Cart = {
    render() {
        const cartList = getCarts() ?? [];
        return /* html */ `<div class="flex items-center justify-between">
        <h3 class="text-2xl font-medium text-gray-700">Giỏ hàng của bạn</h3>
        <button @click="cartOpen = !cartOpen" class="text-gray-600 focus:outline-none">
           <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12"></path>
           </svg>
        </button>
     </div>
     <hr class="my-3">
     ${(cartList.length !== 0) ? cartList.map((item) => `<div class="flex justify-between mt-6">
     <div class="flex">
        <img class="h-20 w-20 object-cover rounded" src="${item.featured_image}" alt="">
        <div class="mx-3">
           <h3 class="text-sm text-gray-600">${item.title}</h3>
           <div class="flex items-center mt-2">
              <button data-id=${item.id} class="text-gray-500 focus:outline-none focus:text-gray-600 increase">
                 <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                 </svg>
              </button>
              <span class="text-gray-700 mx-2">${item.amount}</span>
              <button data-id="${item.id}" class="text-gray-500 focus:outline-none focus:text-gray-600 decrease">
                 <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                 </svg>
              </button>

           </div>
           <div class="flex items-center space-x-3 mt-2">

              <label
                 class="relative input-radio-checked  rounded-full flex items-center justify-center cursor-pointer ring-gray-400 -m-0.5 p-0.5 focus:outline-none">
                 <span class="text-sm" aria-hidden="true">Màu</span>
              </label>
              <label
                 class="relative input-radio-checked  rounded-full flex items-center justify-center cursor-pointer ring-gray-400 -m-0.5 p-0.5 focus:outline-none">
                 <span class="h-5 w-5 bg-[${item.color}] border rounded-full" aria-hidden="true"></span>
              </label>
           </div>
           <div class="flex items-center space-x-3 mt-2">

              <label
                 class="relative input-radio-checked  rounded-full flex items-center justify-center cursor-pointer ring-gray-400 -m-0.5 p-0.5 focus:outline-none">
                 <span class="text-sm" aria-hidden="true">Size</span>
              </label>
              <label
                 class="relative input-radio-checked  rounded-full flex items-center justify-center cursor-pointer ring-gray-400 -m-0.5 p-0.5 focus:outline-none">
                 <span class="font-bold" aria-hidden="true">${item.size}</span>
              </label>
           </div>

        </div>
     </div>
     <span class="text-gray-600 text-center">${(item.price * item.amount).toLocaleString("it-IT", {
        style:
        "currency",
        currency: "VND",
    })}
        <svg data-id="${item.id}" xmlns="http://www.w3.org/2000/svg"
           class="delete-item-cart h-4 w-4 mx-auto cursor-pointer text-red-700" viewBox="0 0 20 20"
           fill="currentColor">
           <path fill-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd" />
        </svg></span>
  </div>`).join("") : `
     <div class="mt-8">
        <img
           src="https://media.istockphoto.com/vectors/empty-shopping-bag-icon-online-business-vector-icon-template-vector-id861576608?k=20&m=861576608&s=612x612&w=0&h=UgHaPYlYrsPTO6BKKTzizGQqFgqEnn7eYK9EOA16uDs=">
     </div>`}
     ${(cartList.length !== 0) ? `<div class="mt-8">
        <form class="flex items-center justify-center">
           <input class="form-input w-48" type="text" placeholder="Add promocode">
           <button
              class="ml-3 flex items-center px-3 py-2 bg-black text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              <span>Apply</span>
           </button>
        </form>
     </div>
     <a href="/#/checkout"
        class="flex items-center justify-center mt-4 px-3 py-2 bg-black text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
        <span>Thanh toán</span>
        <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
           viewBox="0 0 24 24" stroke="currentColor">
           <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
     </a>` : ""}`;
    },
    afterRender() {
        const btns = $(".increase");
        const btnsDecrease = $(".decrease");
        if (btns.length >= 0) {
            btns.forEach((btn) => {
                btn.addEventListener("click", () => {
                    increaseItemInCart(btn.dataset.id);
                });
            });
        } else {
            btns.addEventListener("click", () => {
                increaseItemInCart(btns.dataset.id);
            });
        }
        if (btnsDecrease.length >= 0) {
            btnsDecrease.forEach((btn) => {
                btn.addEventListener("click", () => {
                    decreaseItemInCart(btn.dataset.id);
                });
            });
        } else {
            btnsDecrease.addEventListener("click", () => {
                decreaseItemInCart(btnsDecrease.dataset.id);
            });
        }
        deleteItemCart(".delete-item-cart", ".cart-modal", Cart);
    },
};
export default Cart;