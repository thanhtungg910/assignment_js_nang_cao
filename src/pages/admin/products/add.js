const AddProduct = {
    render() {
        return /* html */`<main class="h-full pb-16 overflow-y-auto">
        <div class="container grid px-5 mx-auto">
           <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              Thêm sản phẩm
           </h2>
           <form>

              <div class="border-y-2 py-6 flex items-center">
                 <div class="w-[40%]">
                    <h2 class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tên sản phẩm</h2>
                 </div>
                 <div>
                    <input type="text" id="title-product"
                       class="shadow-sm w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
                 </div>
              </div>

              <div class="border-y-2 py-6 flex items-center">
                 <div class="w-[40%]">
                    <h2 class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                       Loại sản phẩm</h2>
                 </div>
                 <div>
                    <div class="flex justify-center">
                       <div class="mb-3 xl:w-96">
                          <select class="form-select appearance-none
                           block
                           w-full
                           px-3
                           py-1.5
                           text-base
                           font-normal
                           text-gray-700
                           bg-white bg-clip-padding bg-no-repeat
                           border border-solid border-gray-300
                           rounded
                           transition
                           ease-in-out
                           m-0
                           focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                             aria-label="Default select example">
                             <option selected>Open this select menu</option>
                             <option value="1">One</option>
                             <option value="2">Two</option>
                             <option value="3">Three</option>
                          </select>
                       </div>
                    </div>
                 </div>
              </div>

              <div class="border-y-2 py-6 flex items-center">
                 <div class="w-[40%]">
                    <h2 class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                       Hình ảnh nổi bật</h2>
                 </div>
                 <div
                    class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div class="space-y-1 text-center">
                       <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                          viewBox="0 0 48 48" aria-hidden="true">
                          <path
                             d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                             stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                       </svg>
                       <div class="flex text-sm text-gray-600">
                          <label for="featured_image"
                             class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                             <span>Upload a file</span>
                             <input id="featured_image" name="file-upload" type="file" class="sr-only">
                          </label>
                          <p class="pl-1">or drag and drop</p>
                       </div>
                       <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                 </div>
              </div>

              <div class="border-y-2 py-6 flex items-center">
                 <div class="w-[40%]">
                    <h2 class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                       Hình ảnh</h2>
                 </div>
                 <div
                    class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div class="space-y-1 text-center">
                       <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                          viewBox="0 0 48 48" aria-hidden="true">
                          <path
                             d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                             stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                       </svg>
                       <div class="flex text-sm text-gray-600">
                          <label for="sub_image"
                             class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                             <span>Upload a file</span>
                             <input id="sub_image" name="sub_image" type="file" class="sr-only">
                          </label>
                          <p class="pl-1">or drag and drop</p>
                       </div>
                       <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                 </div>
              </div>

              <div class="border-y-2 py-6 flex items-center">
                 <div class="w-[40%]">
                    <h2 class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                       Album</h2>
                 </div>
                 <div
                    class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div class="space-y-1 text-center">
                       <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                          viewBox="0 0 48 48" aria-hidden="true">
                          <path
                             d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                             stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                       </svg>
                       <div class="flex text-sm text-gray-600">
                          <label for="album"
                             class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                             <span>Upload a file</span>
                             <input id="album" name="album" type="file" class="sr-only">
                          </label>
                          <p class="pl-1">or drag and drop</p>
                       </div>
                       <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                 </div>
              </div>

              <div class="border-y-2 py-6 flex items-center">
                 <div class="w-[40%]">
                    <h2 class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                       Giá sản phẩm</h2>
                 </div>
                 <div>
                    <input type="number" id="price"
                       class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
                 </div>
              </div>

              <div class="border-y-2 py-6 flex items-center">
                 <div class="w-[40%]">
                    <h2 class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                       Giá giảm</h2>
                 </div>
                 <div>
                    <input type="number" id="price_sale"
                       class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
                 </div>
              </div>

              <div class="border-y-2 py-6 flex items-center">
                 <div class="w-[40%]">
                    <h2 class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                       Màu</h2>
                 </div>
                 <div>
                    <div class="grid grid-cols-4 gap-4">
                       <div class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
                          <input type="checkbox" class="hidden" name="color[]">
                          <svg class="hidden w-4 h-4 text-purple pointer-events-none" viewBox="0 0 172 172">
                             <g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none"
                                font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode:normal">
                                <path d="M0 172V0h172v172z" />
                                <path
                                   d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                                   fill="currentColor" stroke-width="1" />
                             </g>
                          </svg>
                       </div>
                       <div class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
                          <input type="checkbox" class="hidden" name="color[]">
                          <svg class="hidden w-4 h-4 text-purple pointer-events-none" viewBox="0 0 172 172">
                             <g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none"
                                font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode:normal">
                                <path d="M0 172V0h172v172z" />
                                <path
                                   d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                                   fill="currentColor" stroke-width="1" />
                             </g>
                          </svg>
                       </div>
                       <div class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
                          <input type="checkbox" class="hidden" name="color[]">
                          <svg class="hidden w-4 h-4 text-purple pointer-events-none" viewBox="0 0 172 172">
                             <g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none"
                                font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode:normal">
                                <path d="M0 172V0h172v172z" />
                                <path
                                   d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                                   fill="currentColor" stroke-width="1" />
                             </g>
                          </svg>
                       </div>
                       <div class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
                          <input type="checkbox" class="hidden" name="color[]">
                          <svg class="hidden w-4 h-4 text-purple pointer-events-none" viewBox="0 0 172 172">
                             <g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none"
                                font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode:normal">
                                <path d="M0 172V0h172v172z" />
                                <path
                                   d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                                   fill="currentColor" stroke-width="1" />
                             </g>
                          </svg>
                       </div>
                       <div class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
                          <input type="checkbox" class="hidden" name="color[]">
                          <svg class="hidden w-4 h-4 text-purple pointer-events-none" viewBox="0 0 172 172">
                             <g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none"
                                font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode:normal">
                                <path d="M0 172V0h172v172z" />
                                <path
                                   d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                                   fill="currentColor" stroke-width="1" />
                             </g>
                          </svg>
                       </div>
                       <div class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
                          <input type="checkbox" class="hidden" name="color[]">
                          <svg class="hidden w-4 h-4 text-purple pointer-events-none" viewBox="0 0 172 172">
                             <g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none"
                                font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode:normal">
                                <path d="M0 172V0h172v172z" />
                                <path
                                   d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                                   fill="currentColor" stroke-width="1" />
                             </g>
                          </svg>
                       </div>
                    </div>
                 </div>
              </div>

              <div class="border-y-2 py-6 flex items-center">
                 <div class="w-[40%]">
                    <h2 class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                       Size</h2>
                 </div>
                 <div>
                    <div class="grid grid-cols-4 gap-4">
                       <div class="bg-black w-5 h-5">01</div>
                       <div class="bg-black w-5 h-5">01</div>
                       <div class="bg-black w-5 h-5">01</div>
                       <div class="bg-black w-5 h-5">01</div>
                       <div class="bg-black w-5 h-5">01</div>
                       <div class="bg-black w-5 h-5">09</div>
                    </div>
                 </div>
              </div>

              <div class="border-y-2 py-6 flex items-center">
                 <div class="w-[40%]">
                    <h2 class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                       Mô tả</h2>
                 </div>
                 <div>
                    <div class="flex justify-center">
                       <div class="mb-3 xl:w-96">
                          <textarea class="
                             form-control
                             block
                             w-full
                             px-3
                             py-1.5
                             text-base
                             font-normal
                             text-gray-700
                             bg-white bg-clip-padding
                             border border-solid border-gray-300
                             rounded
                             transition
                             ease-in-out
                             m-0
                             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                           " id="desc" rows="3" placeholder="Your message"></textarea>
                       </div>
                    </div>
                 </div>
              </div>

              <button type="submit"
                 class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">
                 Thêm</button>
           </form>

        </div>
     </main>`;
    },
};
export default AddProduct;