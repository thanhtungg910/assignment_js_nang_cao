import axios from "axios";
import toastr from "toastr";
import { getUserApi, updateUser } from "../../api/users";
import $ from "../../utils/dom";
import reRender from "../../utils/rerender";
import uploadFile from "../../utils/upload";
import ChangesPass from "./changesPassword";

const Profile = {
    async  render() {
        document.title = "Thông tin cá nhân";
        const { id: idUser } = JSON.parse(localStorage.getItem("user"));
        const { data } = await getUserApi(idUser);
        return /* html */ `<div id="profile-inner">
        <h2 class="text-2xl font-bold">Thông tin cá nhân</h2>
      <p>Cập nhật đầy đủ thông tin của bạn để hoạt động tốt hơn</p>
      <div  class="p-6 border-2 rounded-lg shadow mt-3">
         <form id="form-profile" class="body-content grid grid-cols-2 gap-4">
            <div
               class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
               <div class="space-y-1 text-center">
                  <img id="preview-image"
                     src="${data.avatar}"
                     alt="">
                  <div class="flex text-sm text-gray-600">
                     <label for="file-upload"
                        class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" class="sr-only">
                     </label>
                     <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
               </div>
            </div>
            <div class="py-3">
              
               <div class="relative mt-2">
                  <div class="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                     <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                           clip-rule="evenodd" />
                     </svg>
                  </div>
                  <input type="text" id="username-adress-icon" value="${data.username}"
                     class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="username">
               </div>
               <div class="relative mt-2">
                  <div class="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                     <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                           d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                     </svg>
                  </div>
                  <input type="text" id="phone-adress-icon" value="${data.phone}"
                     class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="So dien thoai">
               </div>
               <div class="relative mt-2">
                  <div class="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                     <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z">
                        </path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                     </svg>
                  </div>
                  <input type="text" id="email-adress-icon" disabled value="${data.email}"
                     class="bg-gray-50 border border-gray-300 cursor-not-allowed text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="email">
                     <input type="hidden" id="pass-adress-icon" disabled value="${data.password}"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="email">
               </div>
               <div class="relative mt-2">
                  <button data-id="${data.id}"
                     class="save text-center  w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-black border border-transparent rounded-lg active:bg-black hover:bg-blue-500 focus:outline-none focus:shadow-outline-purple">
                     Lưu lại
                  </button>
               </div>
            </div>
         </form>
         <div class="body-footer mt-6 border-t-2 py-6">
            <h2 class="font-bold">Thông tin khác</h2>
            <div class="grid  grid-cols-2 gap-4 py-4">

               <button
                  class="flex change-pass items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-gray-600  transition-colors duration-150 bg-gray-50 border rounded-lg  focus:outline-none focus:shadow-outline-purple">
                  Đổi mật khẩu
                  <span class="ml-2" aria-hidden="true">
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                           d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                           clip-rule="evenodd" />
                     </svg>
                  </span>
               </button>
            </div>
         </div>
      </div>
   </div></div>`;
    },
    afterRender() {
        const API_CLOUDDINARY = "https://api.cloudinary.com/v1_1/dhfndew6y/image/upload";
        const UPLOAD_PRESET = "njlgbczl";
        const fileUpload = $("#file-upload");
        const username = $("#username-adress-icon");
        const phone = $("#phone-adress-icon");
        let image = "";
        fileUpload.addEventListener("change", () => {
            $("#preview-image").src = URL.createObjectURL(fileUpload.files[0]);
        });
        $("#form-profile").addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                if (fileUpload.files[0]) {
                    const { data } = await axios.post(
                        API_CLOUDDINARY,
                        uploadFile(fileUpload.files[0], UPLOAD_PRESET),
                    );
                    image = data.secure_url;
                }
                if (username.value !== "" && phone.value !== "" && +phone.value.length === 10) {
                    await updateUser({
                        avatar: image || $("#preview-image").src,
                        username: username.value,
                        phone: phone.value,
                        id: +$(".save").dataset.id,
                    });
                    toastr.success("Cập nhật thành công");
                    reRender("#profile-list", Profile);
                } else if (+phone.value.length !== 10) {
                    toastr.error("Số điện thoại phải đủ 10 số");
                } else {
                    toastr.error("Vui lòng nhập đầy đủ các trường");
                }
            } catch (error) {
                toastr.error(error);
            }
        });
        $(".change-pass").addEventListener("click", (e) => {
            e.preventDefault();
            $("#profile-inner").innerHTML = ChangesPass.render();
            ChangesPass.afterRender();
        });
    },
};
export default Profile;