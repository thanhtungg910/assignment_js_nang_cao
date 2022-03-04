const InboxPage = {
    render() {
        return /* html */ `<main class="h-full pb-16 overflow-y-auto">
        <div class="container grid px-5 mx-auto">
        <a href="/#/admin/contacts"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
      </svg></a>
        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"></h2>
           <form id="add-product" class="bg-white px-3 pb-2">
  
              <div class="border-y-2 py-6 flex items-center">
                 <div class="w-[15%]">
                    <h2 class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tên sản phẩm</h2>
                 </div>
                 <div>
                    <input type="text" id="title-product" value="${`data.title`}"
                       class="check-input shadow-sm w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
                 </div>
              </div>
              <div class="border-y-2 py-6 flex items-center">
                 <div class="w-[15%]">
                    <h2 class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                       Hình ảnh đại diện</h2>
                 </div>
                 <div
                    class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md img_upload ">
                    <div class="space-y-1 text-center">
                       <svg class="mx-auto h-12 w-12 text-gray-400 " stroke="currentColor" fill="none"
                          viewBox="0 0 48 48" aria-hidden="true">
                          <path
                             d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                             stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                       </svg>
                       <img src="${`data.thumbnail`}" class="w-[300px]" id="preview_image_featured" alt="" />
                       <div class="flex text-sm text-gray-600">
                          <label for="featured_image"
                             class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                             <span>Upload a file</span>
                             <input id="featured_image" type="file" class="sr-only  file-upload[]">
                          </label>
                          <p class="pl-1">or drag and drop</p>
                       </div>
                       <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                 </div>
              </div>
              <div class="border-y-2 py-6 flex items-center">
                 <div class="w-[15%]">
                    <h2 class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                       Mô tả</h2>
                 </div>
                       <div class="mb-3 xl:w-[80%]">
                          <div class="block w-full  py-1.5 text-base  font-normal
                             text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition
                             ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                           " id="editorjs">
                         <div class="codex-editor codex-editor--empty">  ${`data.content`}</div>
                           </div>
                 </div>
              </div>
  
              <button
                 class="add-blogs text-white  bg-indigo-600 hover:bg-indigo-700  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">
                 Thêm</button>
           </form>
        </div>
     </main>`;
    },
    afterRender() {
    },
};
export default InboxPage;