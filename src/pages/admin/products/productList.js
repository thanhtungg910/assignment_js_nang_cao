import { Products } from "../../../components/admin";

const ProductList = {
    async render() {
        return /* html */ `
        <main class="h-full pb-16 overflow-y-auto">
           <div class="container grid px-5 mx-auto">
              <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                 Tất cả sản phẩm
              </h2>
              <!-- CTA -->
              <div
                 class="flex items-center justify-between p-4  text-sm font-semibold focus:outline-none focus:shadow-outline-purple">
                 <div class="flex items-center">
                    <div class="relative text-gray-600">
                       <input type="search" name="serch" placeholder="Tìm kiếm sản phẩm"
                          class="bg-white h-10 px-5 pr-10 text-sm focus:outline-none">
                       <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                          <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                             viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;"
                             xml:space="preserve" width="512px" height="512px">
                             <path
                                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                          </svg>
                       </button>
                    </div>
                    <span>
                       <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                             d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z">
                          </path>
                       </svg>
                    </span>
  
                 </div>
                 <span x-data="{ open: false }">
                    <!-- Trigger -->
                    <span x-on:click="open = true">
                       <button
                          class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          <!-- Heroicon name: solid/check -->
                          <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" viewBox="0 0 20 20"
                             fill="currentColor">
                             <path fill-rule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clip-rule="evenodd" />
                          </svg>
                          Thêm sản phẩm
                       </button>
                    </span>
                    <!-- Modal -->
                    <div x-show="open" style="display: none" x-on:keydown.escape.prevent.stop="open = false" role="dialog"
                       aria-modal="true" x-id="['modal-title']" :aria-labelledby="$id('modal-title')"
                       class="fixed inset-0 overflow-y-auto">
                       <!-- Overlay -->
                       <div x-show="open" x-transition.opacity class="fixed inset-0 bg-black bg-opacity-50"></div>
                       <!-- Panel -->
                       <div x-show="open" x-transition x-on:click="open = false"
                          class="relative min-h-screen flex items-center justify-center p-4">
                          <div x-on:click.stop x-trap.noscroll.inert="open"
                             class="relative max-w-2xl w-full bg-white border border-black p-8 overflow-y-auto">
                             <!-- Title -->
                             <h2 class="text-3xl font-medium" :id="$id('modal-title')">Confirm</h2>
                             <!-- Content -->
                             <p class="mt-2 text-gray-600">Are you sure you want to learn how to create an awesome modal?
                             </p>
                             <!-- Buttons -->
                             <div class="mt-8 flex space-x-2">
                                <button type="button" x-on:click="open = false"
                                   class="bg-white border border-black px-4 py-2">
                                   Confirm
                                </button>
                                <button type="button" x-on:click="open = false"
                                   class="bg-white border border-black px-4 py-2">
                                   Cancel
                                </button>
                             </div>
                          </div>
                       </div>
                    </div>
                 </span>
              </div>
  
              <!-- With avatar -->
              ${await Products.render()}
              <div
                 class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                 <span class="flex items-center col-span-3">
                    Showing 21-30 of 100
                 </span>
                 <span class="col-span-2"></span>
                 <!-- Pagination -->
                 <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                    <nav aria-label="Table navigation">
                       <ul class="inline-flex items-center">
                          <li>
                             <button
                                class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                                aria-label="Previous">
                                <svg aria-hidden="true" class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                   <path
                                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                      clip-rule="evenodd" fill-rule="evenodd"></path>
                                </svg>
                             </button>
                          </li>
                          <li>
                             <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                1
                             </button>
                          </li>
                          <li>
                             <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                2
                             </button>
                          </li>
                          <li>
                             <button
                                class="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple">
                                3
                             </button>
                          </li>
                          <li>
                             <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                4
                             </button>
                          </li>
                          <li>
                             <span class="px-3 py-1">...</span>
                          </li>
                          <li>
                             <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                8
                             </button>
                          </li>
                          <li>
                             <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                9
                             </button>
                          </li>
                          <li>
                             <button
                                class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                                aria-label="Next">
                                <svg class="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                                   <path
                                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                      clip-rule="evenodd" fill-rule="evenodd"></path>
                                </svg>
                             </button>
                          </li>
                       </ul>
                    </nav>
                 </span>
              </div>
           </div>
        </main>`;
    },
};
export default ProductList;