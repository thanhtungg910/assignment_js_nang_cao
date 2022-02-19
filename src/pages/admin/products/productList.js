import "toastr/build/toastr.min.css";
import { searchProduct } from "../../../api/products";
import { Products } from "../../../components/admin";

const ProductList = {
    async render() {
        document.title = "Sản phẩm";
        return /* html */ `
        <main class="h-full pb-16 overflow-y-auto">
           <div class="container grid px-5 mx-auto">
              <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                 Tất cả sản phẩm
              </h2>
              <!-- CTA -->
              <div class="flex items-center justify-between p-4  text-sm font-semibold focus:outline-none focus:shadow-outline-purple">
                 <div class="flex items-center">
                    <div class="relative text-gray-600">
                       <input type="search" id="search-input" name="serch" placeholder="Tìm kiếm sản phẩm"
                          class="bg-white h-10 px-5 pr-10 text-sm focus:outline-none">
                       <button id="btn-search" type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                          <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                             viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;"
                             xml:space="preserve" width="512px" height="512px">
                             <path
                                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                          </svg>
                       </button>
                    </div>
                    <div class="flex justify-center">
                        <select class="form-select select-order appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat
                              border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                              <option selected>Open this select menu</option>
                              <option value="">Mới nhất</option>
                              <option value="2">Cũ nhất</option>
                              <option value="3">Three</option>
                           </select>
                        </div>
                     </div>
                 <span x-data="{ open: false }"><a href="/#/admin/products/add"
                 class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 <!-- Heroicon name: solid/check -->
                 <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                       d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                       clip-rule="evenodd" />
                 </svg>
                 Thêm sản phẩm
              </a>
                 </span>
              </div>
              <!-- With avatar -->
              <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                      <div class="w-full overflow-x-auto">
                         <table class="w-full whitespace-no-wrap">
                            <thead>
                               <tr
                                  class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                  <th class="px-4 py-3">Ảnh</th>
                                  <th class="px-4 py-3">Tiêu đề</th>
                                  <th class="px-4 py-3">Giá sản phẩm</th>
                                  <th class="px-4 py-3">Giảm giá (%)</th>
                                  <th class="px-4 py-3">Ngày đăng sp</th>
                               </tr>
                            </thead>
                            <tbody  id="product-table"  class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                            ${await Products.render()}
                            </tbody>
                         </table>
                      </div>
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
    afterRender() {
        Products.afterRender();
        const searchInput = document.querySelector("#search-input");
        const productList = document.querySelector("#product-table");
        const btnSearch = document.querySelector("#btn-search");
        const handerSearch = async (e) => {
            e.preventDefault();
            const { data } = await searchProduct(searchInput.value);
            productList.innerHTML = data.map((item) => `<tr class="text-gray-700 dark:text-gray-400">
            <td class="px-4 py-3">
            <!-- Avatar with inset shadow -->
            <div class="hidden w-28  md:block">
            <img class="object-cover w-full h-full "
               src="${item.featured_image}"
               alt="" loading="lazy" /> 
             </div>
            </td>
            <td class="px-4 py-3 text-sm">
            ${item.title}
            </td>
            <td class="px-4 py-3 text-xs">
            ${item.price}
            </td>
            <td class="px-4 py-3 text-sm">
            ${item.sale_off}%
            </td>
            <td class="px-4 py-3 text-sm">
            ${item.created_at}
            </td>
            <td class="px-4 py-3 text-sm">
                <div class="flex items-center space-x-4 text-sm">
                <a href="/#/admin/products/edit/${item.id}"
                   class="edit-product flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                   aria-label="Edit">
                   <svg class="w-5 h-5" aria-hidden="true" fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                         d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                      </path>
                   </svg>
                </a>
                <button data-id="${item.id}"
                   class="delete-product flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                   aria-label="Delete">
                   <svg class="w-5 h-5" aria-hidden="true" fill="currentColor"
                      viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                         d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                         clip-rule="evenodd"></path>
                   </svg>
                </button>
             </div>
            </td>
         </tr>`).join(" ");
        };
        searchInput.addEventListener("change", handerSearch);
        btnSearch.addEventListener("change", handerSearch);
    },
};
export default ProductList;