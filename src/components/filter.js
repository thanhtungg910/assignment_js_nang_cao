import { AddToCart } from "../api/cart";
import { getAllProduct, getOperatorsPrice } from "../api/products";
import $ from "../utils/dom";
import Popup from "./popup";

const FilterProduct = {
    async render() {
        const { data } = await getAllProduct();
        const minPrice = data.map((item) => `${+item.price}`).reduce((a, b) => Math.min(a, b));
        const maxPrice = data.map((item) => `${+item.price}`).reduce((a, b) => Math.max(a, b));
        return /* html */ `
      <div class="relative inline-block text-left">
                        <div>
                           <button type="button" id="menuFilter" class="inline-flex justify-center w-full   px-4 py-2 bg-white text-sm font-medium text-gray-700
                                focus:outline-none " aria-expanded="true" aria-haspopup="true">
                              Lọc
                              <svg class="-mr-1 ml-2 h-5 w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                 fill="currentColor" aria-hidden="true">
                                 <path class="chevron" fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                              </svg>
                           </button>
                        </div>
                        <div class="drop-downs origin-top-right absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                            focus:outline-none transform invisible scale-95" role="menu" aria-orientation="vertical"
                           aria-labelledby="menu-button" tabindex="-1">

                           <!-- COLOR -->
                           <div class="border-t  border-gray-200 px-4 py-6">
                              <h3 class="-mx-2 -my-3 flow-root">
                                 <!-- Expand/collapse section button -->
                                 <button type="button"
                                    class="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500"
                                    aria-controls="filter-section-mobile-0" aria-expanded="false">
                                    <span class="font-medium text-gray-900">
                                       Color
                                    </span>

                                 </button>
                              </h3>
                              <!-- Filter section, show/hide based on section state. -->
                              <div class="pt-6" id="filter-section-mobile-0">
                                 <div class="space-y-6">
                                    <div class="flex items-center">
                                       <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox"
                                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                       <label for="filter-mobile-color-0" class="ml-3 min-w-0 flex-1 text-gray-500">
                                          White
                                       </label>
                                    </div>

                                    <div class="flex items-center">
                                       <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox"
                                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                       <label for="filter-mobile-color-1" class="ml-3 min-w-0 flex-1 text-gray-500">
                                          Beige
                                       </label>
                                    </div>

                                    <div class="flex items-center">
                                       <input id="filter-mobile-color-2" name="color[]" value="blue" type="checkbox"
                                          checked
                                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                       <label for="filter-mobile-color-2" class="ml-3 min-w-0 flex-1 text-gray-500">
                                          Blue
                                       </label>
                                    </div>

                                    <div class="flex items-center">
                                       <input id="filter-mobile-color-3" name="color[]" value="brown" type="checkbox"
                                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                       <label for="filter-mobile-color-3" class="ml-3 min-w-0 flex-1 text-gray-500">
                                          Brown
                                       </label>
                                    </div>

                                    <div class="flex items-center">
                                       <input id="filter-mobile-color-4" name="color[]" value="green" type="checkbox"
                                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                       <label for="filter-mobile-color-4" class="ml-3 min-w-0 flex-1 text-gray-500">
                                          Green
                                       </label>
                                    </div>

                                    <div class="flex items-center">
                                       <input id="filter-mobile-color-5" name="color[]" value="purple" type="checkbox"
                                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                       <label for="filter-mobile-color-5" class="ml-3 min-w-0 flex-1 text-gray-500">
                                          Purple
                                       </label>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <!-- SIZE -->
                           <div class="border-t border-gray-200 px-4 py-6">
                              <h3 class="-mx-2 -my-3 flow-root">
                                 <!-- Expand/collapse section button -->
                                 <button type="button"
                                    class="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500"
                                    aria-controls="filter-section-mobile-0" aria-expanded="false">
                                    <span class="font-medium text-gray-900">
                                       Size
                                    </span>
                                 </button>
                              </h3>
                              <!-- Filter section, show/hide based on section state. -->
                              <div class="pt-6" id="filter-section-mobile-0">
                                 <div class="space-y-6 grid grid-cols-2">
                                    <div class="flex items-center">
                                       <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox"
                                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                       <label for="filter-mobile-color-0" class="ml-3 min-w-0 flex-1 text-gray-500">
                                          2L
                                       </label>
                                    </div>

                                    <div class="flex items-center">
                                       <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox"
                                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                       <label for="filter-mobile-color-1" class="ml-3 min-w-0 flex-1 text-gray-500">
                                          3L
                                       </label>
                                    </div>

                                    <div class="flex items-center">
                                       <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox"
                                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                       <label for="filter-mobile-color-1" class="ml-3 min-w-0 flex-1 text-gray-500">
                                          3L
                                       </label>
                                    </div>

                                    <div class="flex items-center">
                                       <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox"
                                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                       <label for="filter-mobile-color-1" class="ml-3 min-w-0 flex-1 text-gray-500">
                                          3L
                                       </label>
                                    </div>

                                    <div class="flex items-center">
                                       <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox"
                                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                       <label for="filter-mobile-color-1" class="ml-3 min-w-0 flex-1 text-gray-500">
                                          3L
                                       </label>
                                    </div>

                                    <div class="flex items-center">
                                       <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox"
                                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                       <label for="filter-mobile-color-1" class="ml-3 min-w-0 flex-1 text-gray-500">
                                          3L
                                       </label>
                                    </div>

                                    <div class="flex items-center">
                                       <input id="filter-mobile-color-2" name="color[]" value="blue" type="checkbox"
                                          checked
                                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                       <label for="filter-mobile-color-2" class="ml-3 min-w-0 flex-1 text-gray-500">
                                          2XL
                                       </label>
                                    </div>

                                    <div class="flex items-center">
                                       <input id="filter-mobile-color-3" name="color[]" value="brown" type="checkbox"
                                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                       <label for="filter-mobile-color-3" class="ml-3 min-w-0 flex-1 text-gray-500">
                                          3XL
                                       </label>
                                    </div>

                                    <div class="flex items-center">
                                       <input id="filter-mobile-color-4" name="color[]" value="green" type="checkbox"
                                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                       <label for="filter-mobile-color-4" class="ml-3 min-w-0 flex-1 text-gray-500">
                                          4L
                                       </label>
                                    </div>

                                    <div class="flex items-center">
                                       <input id="filter-mobile-color-5" name="color[]" value="purple" type="checkbox"
                                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                       <label for="filter-mobile-color-5" class="ml-3 min-w-0 flex-1 text-gray-500">
                                          XXL
                                       </label>
                                    </div>
                                 </div>
                              </div>
                              <div class="w-full border-t border-gray-200 mt-3">
                              <input type="range" name="price" min="${minPrice}" max="${maxPrice}" value="2047728" class="w-full mt-4 h-2 bg-blue-100 appearance-none range-price" />
                              </div>
                           </div>
                           
                           <button class="px-6 pb-6 underline-offset-1 text-center">Bỏ lọc</button>
                        </div>
                     </div>`;
    },
    afterRender() {
        $(".range-price").addEventListener("change", async (e) => {
            e.preventDefault();
            const { data } = await getOperatorsPrice($(".range-price").value, $(".range-price").value);
            $("#product-list").innerHTML = data.map((item) => `<div class="group relative">
            <div class="w-full min-h-[483px] bg-gray-200 aspect-w-1 aspect-h-1  overflow-hidden lg:h-80 lg:aspect-none">
            <div class="relative w-full h-full">
               <img
                  src="${item.featured_image}"
                  alt="Front of men&#039;s Basic Tee in black."
                  class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full" />
                  <img
                  src="${item.sub_image}"
                  alt="Front of men&#039;s Basic Tee in black."
                  class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full opacity-0 group-hover:opacity-100" />
            </div>
   
            <svg data-id="${item.id}" xmlns="http://www.w3.org/2000/svg"
               class="h-6 popup-product w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-150 top-[25%] z-10 group-hover:opacity-100 text-black"
               fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
               d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
               d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
               </svg>
               <svg data-id="${item.id}" xmlns="http://www.w3.org/2000/svg"
               class="add-to-cart h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-250 top-1/3 z-10 group-hover:opacity-100 text-black"
               fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
               d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
               </svg>
               <div class="italic absolute top-2 right-4 font-mono text-xl">
               ${(+item.sale_off !== 0) ? `${item.sale_off}%` : ""}
               </div>
               </div>
               <div class="mt-4 flex justify-between">
               <div>
               <h3 class="text-sm text-gray-700">
               <a href="/#/details/${item.id}">
               <span aria-hidden="true" class="absolute inset-0"></span>
               ${item.title}
               </a>
               </h3>
               <p class="mt-1 text-sm text-gray-500">${item.options[0].name}</p>
               </div>
               <p class="text-sm font-sans text-gray-900">${(+item.sale_off !== 0) ? (item.price * (item.sale_off / 100)).toLocaleString("vi", { style: "currency", currency: "VND" }) : (item.price).toLocaleString("vi", { style: "currency", currency: "VND" })}</p>
               </div>
               </div>`).join(" ");
            Popup.afterRender();
            AddToCart(".add-to-cart");
        });
    },
};
export default FilterProduct;