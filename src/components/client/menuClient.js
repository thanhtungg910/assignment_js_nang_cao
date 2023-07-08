import AWN from "awesome-notifications";
import "awesome-notifications/dist/style.css";

const MenuClient = {
    async render() {
        return /* html */ `<div class="w-full h-[385px] p-2 border-2 rounded-lg shadow">
      <div class="py-4 text-gray-500 dark:text-gray-400">
         <div class="flex items-center text-sm">
            <!-- Avatar with inset shadow -->
            <div class="relative hidden w-20 h-20 mr-3 rounded-full md:block">
               <a href="/#/me"><img class="object-cover w-full h-full rounded-full"
               src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;facepad=3&amp;fit=facearea&amp;s=707b9c33066bf8808c934c8ab394dff6"
               alt="" loading="lazy"></a>
               <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true">
               </div>
            </div>
            <div>
               <p class="font-semibold"><a href="/#/me/profile">Jolina Angelie</a></p>
               <p class="text-xs text-gray-600 dark:text-gray-400">
                  Unemployed
               </p>
            </div>
         </div>
         <ul class="mt-6">
            <li class="relative px-6 py-3">
               <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  href="/#/me/profile">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span class="ml-4">Quản lý tài khoản</span>
               </a>
            </li>
            <li class="relative px-6 py-3">
               <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  href="/#/me/mycart">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span class="ml-4">Đơn hàng</span>
               </a>
            </li>
            <li class="relative px-6 py-3">
               <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  href="/#/me/history">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="ml-4">Lịch sử đơn hàng</span>
               </a>
            </li>
         </ul>
         <div class="px-6 my-6">
            <button
               class="logout-author flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-black border border-transparent rounded-lg active:bg-black hover:bg-blue-500 focus:outline-none focus:shadow-outline-purple">
               Đăng xuất
               <span class="ml-2" aria-hidden="true"> <svg xmlns="http://www.w3.org/2000/svg"
                     class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                     <path fill-rule="evenodd"
                        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                        clip-rule="evenodd"></path>
                  </svg></span>
            </button>
         </div>
      </div>
   </div>`;
    },
    afterRender() {
        const logout = document.querySelector(".logout-author");
        if (logout) {
            logout.addEventListener("click", (e) => {
                e.preventDefault();
                const notifier = new AWN();
                const onOk = () => {
                    localStorage.removeItem("user");
                    document.location.href = "/";
                };
                const onCancel = () => "";
                notifier.confirm(
                    " ",
                    onOk,
                    onCancel,
                    {
                        labels: {
                            confirm: "Bạn có muốn đăng xuất?",
                        },
                    },
                );
            });
        }
    },
};
export default MenuClient;