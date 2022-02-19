/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/editorjs";
import ImageTool from "@editorjs/image";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import $ from "../../../utils/dom";
import uploadFile from "../../../utils/upload";
import { addBlog } from "../../../api/blogs";

const AddBlogsPage = {
    render() {
        document.title = "Thêm blogs";
        return /* html */ `<main class="h-full pb-16 overflow-y-auto">
      <div class="container grid px-5 mx-auto">
      <a href="/#/admin/blogs"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-5" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
    </svg></a>
      <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"></h2>
         <form id="add-product" class="bg-white px-3 pb-2">

            <div class="border-y-2 py-6 flex items-center">
               <div class="w-[15%]">
                  <h2 class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tên sản phẩm</h2>
               </div>
               <div>
                  <input type="text" id="title-product" data-name="Tên sản phẩm"
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
                     <img src="" class="w-[300px]" id="preview_image_featured" alt="" />
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
                         " id="editorjs"></div>
               </div>
            </div>

            <button
               class="add-blogs text-white  bg-indigo-600 hover:bg-indigo-700  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">
               Thêm</button>
         </form>
      </div>
   </main>
      `;
    },
    afterRender() {
        const API_CLOUDDINARY = "https://api.cloudinary.com/v1_1/dhfndew6y/image/upload";
        const UPLOAD_PRESET = "njlgbczl";
        const editor = new EditorJS({
            holder: "editorjs",
            tools: {
                header: {
                    class: Header,
                    inlineToolbar: ["link"],
                },
                list: {
                    class: List,
                    inlineToolbar: ["link", "bold"],
                },
                embed: {
                    class: Embed,
                    inlineToolbar: false,
                    config: {
                        services: {
                            youtube: true,
                            coub: true,
                        },
                    },
                },
                image: {
                    class: ImageTool,
                    config: {
                        uploader: {
                            uploadByFile(file) {
                                const files = uploadFile(file, UPLOAD_PRESET);

                                return axios.post(API_CLOUDDINARY, files).then((res) => ({
                                    success: 1,
                                    file: {
                                        url: res.data.secure_url,
                                    },
                                }));
                            },
                        },
                    },
                },
            },

        });
        $("#featured_image").addEventListener("change", () => {
            // img = uploadFile($("#featured_image").files[0], UPLOAD_PRESET);
            const file = $("#featured_image").files[0];
            file.preview = URL.createObjectURL(file);
            $("#preview_image_featured").src = file.preview;
        });

        $(".add-blogs").addEventListener("click", async (e) => {
            e.preventDefault();
            try {
                const img = await axios.post(API_CLOUDDINARY, uploadFile($("#featured_image").files[0], UPLOAD_PRESET));

                const contents = await editor.save();
                const data = contents.blocks.map((item) => `${(item.data?.file)
                    ? `<img src="${item.data?.file.url}" alt=""><span class="italic text-xs">${item.data?.caption}</span><br/>`
                    : `${item.data?.text}`}`).join("");
                addBlog({
                    title: $("#title-product").value,
                    create_at: Date.now(),
                    thumbnail: img.data.secure_url,
                    content: data,
                }); toastr.success("Tạo bài viết thành công");
            } catch (error) {
                toastr.error(error);
            }
        });
    },
};
export default AddBlogsPage;