const MenuDashboard = {
    render() {
        return /* html */ `<aside class="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
        <div class="py-4 text-gray-500 dark:text-gray-400">
           <a class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
              Dashboard
           </a>
           <ul class="mt-6">
              <li class="relative px-6 py-3"> 
                 <a class="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                    href="index.html">
                    <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                       stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                       <path
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                       </path>
                    </svg>
                    <span class="ml-4">Dashboard</span>
                 </a>
              </li>

              <li x-data="{isPagesMenuOpen: false}" class="relative px-6 py-3">
                 <button @click="isPagesMenuOpen = !isPagesMenuOpen"
                    class="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                   >
                    <span class="inline-flex items-center">
                       <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                          stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                             d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                       </svg>
                       <span class="ml-4">E – Commerce</span>

                    </span>
                    <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                       <path fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"></path>
                    </svg>
                 </button>
                 <template x-if="isPagesMenuOpen">
                        <ul x-transition:enter="transition-all ease-in-out duration-300"
                           x-transition:enter-start="opacity-25 max-h-0" x-transition:enter-end="opacity-100 max-h-xl"
                           x-transition:leave="transition-all ease-in-out duration-300"
                           x-transition:leave-start="opacity-100 max-h-xl" x-transition:leave-end="opacity-0 max-h-0"
                           class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
                           aria-label="submenu">
                           <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                       <a class="w-full" href="/#/admin/category">Danh mục sản phẩm</a>
                    </li>
                    <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                       <a class="w-full" href="/#/admin/products">
                          Tất cả sản phẩm
                       </a>
                    </li>     
                        </ul>
                     </template> 
              </li>
              <li class="relative px-6 py-3"> 
                 <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                    href="/#/admin/orders">
                    <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                       stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                       <path
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
                       </path>
                    </svg>
                    <span class="ml-4">Orders</span>
                 </a>
              </li>
              <li class="relative px-6 py-3"> 
                 <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                    href="/#/admin/account">
                    <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                       stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                       <path
                          d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <span class="ml-4">Tài khoản</span>
                 </a>
              </li>
              <li class="relative px-6 py-3"> 
                 <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                    href="#">
                    <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                       stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                       <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                       <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                    </svg>
                    <span class="ml-4">Charts</span>
                 </a>
              </li>

           </ul>
           <div class="px-6 my-6">

              <button
                 class="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                 Đăng xuất
                 <span class="ml-2" aria-hidden="true"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                       viewBox="0 0 20 20" fill="currentColor">
                       <path fill-rule="evenodd"
                          d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                          clip-rule="evenodd" />
                    </svg></span>
              </button>
           </div>
        </div>
     </aside>`;
    },
};
export default MenuDashboard;