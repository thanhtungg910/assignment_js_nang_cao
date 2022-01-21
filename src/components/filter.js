const FilterProduct = {
    render() {
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
                        <div class="drop-downs origin-top-right absolute right-0 z-50 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
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
                           </div>
                           <button class="px-6 pb-6 underline-offset-1 text-center">Bỏ lọc</button>
                        </div>
                     </div>`;
    },
};
export default FilterProduct;