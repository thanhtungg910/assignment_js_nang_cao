// eslint-disable-next-line import/no-cycle
import { getCarts } from "../api/cart";

const Cart = {
    render() {
        const cartList = getCarts() ?? [];
        return /* html */ `
      <div :class="cartOpen ? 'translate-x-0 ease-out' : 'translate-x-full ease-in'"
            class="fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300 z-50">
            <div class="flex items-center justify-between">
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
               <img class="h-20 w-20 object-cover rounded"
                  src="${item.featured_image}"
                  alt="">
               <div class="mx-3">
                  <h3 class="text-sm text-gray-600">Mac Book Pro</h3>
                  <div class="flex items-center mt-2">
                     <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                        <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round"
                           stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                           <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
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
            <span class="text-gray-600 text-center">${item.price} 
            <svg data-id="${item.id}" xmlns="http://www.w3.org/2000/svg" class="delete-item-cart h-4 w-4 mx-auto cursor-pointer text-red-700" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg></span>
         </div>`).join("") : `
         <div class="mt-8">
            <img src="https://media.istockphoto.com/vectors/empty-shopping-bag-icon-online-business-vector-icon-template-vector-id861576608?k=20&m=861576608&s=612x612&w=0&h=UgHaPYlYrsPTO6BKKTzizGQqFgqEnn7eYK9EOA16uDs=" >
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
      <span>Chechout</span>
      <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
         viewBox="0 0 24 24" stroke="currentColor">
         <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
      </svg>
   </a>` : ""}
            
         </div>`;
    },
};
export default Cart;