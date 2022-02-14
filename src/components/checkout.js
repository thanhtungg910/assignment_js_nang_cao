/* eslint-disable import/no-cycle */
import { deleteItemCart, getCarts } from "../api/cart";

const CheckoutList = {
    render() {
        const data = getCarts();
        return /* html */`<div class="flex items-center justify-between">
        <h3 class="text-gray-700 font-medium">Số lượng (${data.length})</h3>
        <span class="text-gray-600 text-sm">Edit</span>
     </div><div id="product-table">
     ${data.map((item) => `<div class="flex justify-between mt-6">
     <div class="flex">
        <img class="h-20 w-20 object-cover rounded"
           src="${item.featured_image}"
           alt="">
        <div class="mx-3">
           <h3 class="text-sm text-gray-600">${item.title}</h3>
           <div class="flex items-center mt-2">
              <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                 <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z">
                    </path>
                 </svg>
              </button>
              <span class="text-gray-700 mx-2">${item.amount}</span>
              <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                 <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                 </svg>
              </button>
           </div>
        </div>
     </div>
     <span class="text-gray-600 text-center">${+item.price.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
    })} 
<svg data-id="${item.id}" xmlns="http://www.w3.org/2000/svg" class="delete-item-cart h-4 w-4 mx-auto cursor-pointer text-red-700" viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg></span>
  </div>`).join("")}
  </div>
     <div class="flex items-center justify-between mt-5 text-xl font-mono"">
        <h3>Tổng tiền</h3>
        <span>${data.reduce(((cur, item) => cur + +item.price), 0).toLocaleString("it-IT", { style: "currency", currency: "VND" })}</span>
     </div>`;
    },
    afterRender() {
        deleteItemCart(".delete-item-cart", "#product-table", CheckoutList);
    },
};
export default CheckoutList;