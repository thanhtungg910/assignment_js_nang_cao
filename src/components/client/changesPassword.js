import toastr from "toastr";
import $ from "../../utils/dom";

const ChangesPass = {
    render() {
        return /* html */ `<div class="body-content flex flex-col gap-4">
        <nav class="flex" aria-label="Breadcrumb">
           <ol class="inline-flex items-center space-x-1 md:space-x-3">
              <li class="inline-flex items-center">
                 <a href="/#/me/profile"
                    class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg">
                       <path
                          d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                       </path>
                    </svg>
                    Home
                 </a>
              </li>
              <li>
                 <div class="flex items-center">
                    <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg">
                       <path fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"></path>
                    </svg>
                    <p
                       class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                       Mật khẩu đăng nhập</p>
                 </div>
              </li>
           </ol>
        </nav>
        <div class="p-6 border-2 rounded-lg shadow mt-3">
           <div class="grid  grid-cols-2 gap-4">
              <div class="flex flex-col">
                 <div>
                    <label for="new-password"
                       class="block mb-2 text-sm font-semibold mt-2 text-gray-900 dark:text-gray-300">Mật khẩu mới</label>
                    <div class="relative mt-1">
                       <div class="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 dark:text-gray-400"
                             viewBox="0 0 20 20" fill="currentColor">
                             <path fill-rule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clip-rule="evenodd" />
                          </svg>
                       </div>
                       <input type="password" id="new-password"
                          class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="**********">
                    </div>
                 </div>

                 <div>
                    <label for="password" class="block mb-2 text-sm font-semibold mt-2 text-gray-900 dark:text-gray-300">Mật
                       khẩu cũ</label>
                    <div class="relative mt-1">
                       <div class="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 dark:text-gray-400"
                             viewBox="0 0 20 20" fill="currentColor">
                             <path fill-rule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clip-rule="evenodd" />
                          </svg>
                       </div>
                       <input type="password" id="password"
                          class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="**********">
                    </div>
                 </div>
                 <button
                    class="text-center changes-pass w-full mt-4 px-4 py-2  text-sm font-medium leading-5 text-white transition-colors duration-150 bg-black border border-transparent rounded-lg active:bg-black hover:bg-blue-500 focus:outline-none focus:shadow-outline-purple">
                    Đổi mật khẩu
                 </button>
              </div>
              <div>
                 <label for="requi-pass" class="block mb-2 text-sm font-semibold mt-2 text-gray-900 dark:text-gray-300">Nhập
                    lại mật khẩu</label>
                 <div class="relative mt-1">
                    <div class="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                       <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 dark:text-gray-400"
                          viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd"
                             d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                             clip-rule="evenodd" />
                       </svg>
                    </div>
                    <input type="password" id="requi-pass"
                       class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="**********">
                 </div>
              </div>
           </div>
        </div>
     </div>`;
    },
    afterRender() {
        const newPassword = $("#new-password");
        const password = $("#password");
        const requiPass = $("#requi-pass");

        $(".changes-pass").addEventListener("click", (e) => {
            e.preventDefault();
            if (newPassword.value.length > 0
               && password.value.length > 0
               && requiPass.value.length > 0) {
                if (newPassword !== requiPass) {
                    toastr.error("Mật khẩu không trùng khớp");
                } else {
                    console.log("hihi");
                }
            } else if (newPassword.value.length <= 8
                        && password.value.length <= 8
                        && requiPass.value.length <= 8) {
                toastr.error("Vui lòng nhập nhiều hơn 8 kí tự");
            } else {
                toastr.error("Vui lòng nhập đầy đủ các trường");
            }
        });
    },
};
export default ChangesPass;