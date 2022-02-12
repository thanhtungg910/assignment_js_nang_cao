import toastr from "toastr";
import axios from "axios";
import "toastr/build/toastr.min.css";
import { addProduct } from "../../../api/products";
import { getAll as getCategories } from "../../../api/categories";
/* eslint-disable no-plusplus */
const AddProduct = {
    async render() {
        document.title = "Thêm sản phẩm";
        const { data } = await getCategories();
        return /* html */`<main class="h-full pb-16 overflow-y-auto">
        <div class="container grid px-5 mx-auto">
           <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              Thêm sản phẩm
           </h2>
           <form id="add-product" class="bg-white px-3 pb-2">

              <div class="border-y-2 py-6 flex items-center">
                 <div class="w-[40%]">
                    <h2 class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tên sản phẩm</h2>
                 </div>
                 <div>
                    <input type="text" id="title-product" data-name="Tên sản phẩm"
                       class="check-input shadow-sm w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
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
                          <select id="category" class="form-select appearance-none
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
                             ${data.map((item) => `<option value="${item.id}">${item.title}</option>`).join("")}
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
                 <div class="w-[40%]">
                    <h2 class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                       Hình ảnh</h2>
                 </div>
                 <div
                    class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md img_upload">
                    <div class="space-y-1 text-center">
                       <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                          viewBox="0 0 48 48" aria-hidden="true">
                          <path
                             d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                             stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                       </svg>
                       <img src=""  class="w-[300px]" id="preview_image_sub" alt="" />
                       <div class="flex text-sm text-gray-600">
                          <label for="sub_image"
                             class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                             <span>Upload a file</span>
                             <input id="sub_image" type="file" class="sr-only file-upload[]">
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
                    class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md album">
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
                             <input id="album" type="file" multiple class="sr-only file-upload[] ">
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
                    <input type="number" id="price" data-name="Giá sản phẩm"
                       class="check-input shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
                 </div>
              </div>

              <div class="border-y-2 py-6 flex items-center">
                 <div class="w-[40%]">
                    <h2 class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                       Giá giảm</h2>
                 </div>
                 <div>
                    <input type="number" id="price_sale" value="0"
                       class="check-input shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
                 </div>
              </div>

              <div class="border-y-2 py-6 flex items-center">
                 <div class="w-[40%]">
                    <h2 class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                       Màu</h2>
                 </div>
                 <div>
                    <div class="grid grid-cols-4 gap-4">
                       <div class="flex items-end space-x-1">
                          <div class="bg-black w-5 h-5"></div>
                          <input type="checkbox" value="#17202a" data-name="Màu sản phẩm" class="check-input color[]">
                       </div>
                       <div class="flex items-end space-x-1">
                          <div class="bg-red-500 w-5 h-5"></div>
                          <input type="checkbox" value="#922b21" class="color[]">
                       </div>
                       <div class="flex items-end space-x-1">
                          <div class="bg-gray-500 w-5 h-5"></div>
                          <input type="checkbox" value="#909497" class="color[]">
                       </div>
                       <div class="flex items-end space-x-1">
                          <div class="bg-orange-400 w-5 h-5"></div>
                          <input type="checkbox" value="#d35400" class="color[]">
                       </div>
                       <div class="flex items-end space-x-1">
                          <div class="bg-yellow-300 w-5 h-5"></div>
                          <input type="checkbox" value="#f4d03f" class="color[]">
                       </div>
                       <div class="flex items-end space-x-1">
                          <div class="bg-lime-600 w-5 h-5"></div>
                          <input type="checkbox" value="#229954" class="color[]">
                       </div>
                       <div class="flex items-end space-x-1">
                          <div class="bg-green-600 w-5 h-5"></div>
                          <input type="checkbox" value="#196f3d" class="color[]">
                       </div>
                       <div class="flex items-end space-x-1">
                          <div class="bg-cyan-600 w-5 h-5"></div>
                          <input type="checkbox" value="#2471a3" class="color[]">
                       </div>
                       <div class="flex items-end space-x-1">
                          <div class="bg-sky-600 w-5 h-5"></div>
                          <input type="checkbox" value="#85c1e9" class="color[]">
                       </div>
                       <div class="flex items-end space-x-1">
                          <div class="bg-blue-700 w-5 h-5"></div>
                          <input type="checkbox" value="#0099ff" class="color[]">
                       </div>
                       <div class="flex items-end space-x-1">
                          <div class="bg-violet-700 w-5 h-5"></div>
                          <input type="checkbox" value="#7d3c98" class="color[]">
                       </div>
                       <div class="flex items-end space-x-1">
                          <div class="bg-white w-5 h-5"></div>
                          <input type="checkbox" value="#ffffff" class="color[]">
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
                       <div>
                          <label>S</label>
                          <input type="checkbox" value="S" data-name="Size sản phẩm" class="check-input size[]">
                       </div>
                       <div>
                          <label>M</label>
                          <input type="checkbox" value="M" class="size[]">
                       </div>
                       <div>
                          <label>L</label>
                          <input type="checkbox" value="L" class="size[]">
                       </div>
                       <div>
                          <label>XL</label>
                          <input type="checkbox" value="XL" class="size[]">
                       </div>
                       <div>
                          <label>XXL</label>
                          <input type="checkbox" value="XXL" class="size[]">
                       </div>
                       <div>
                          <label>2XL</label>
                          <input type="checkbox" value="2XL" class="size[]">
                       </div>
                       <div>
                          <label>3XL</label>
                          <input type="checkbox" value="3XL" class="size[]">
                       </div>
                       <div>
                          <label>4XL</label>
                          <input type="checkbox" value="4XL" class="size[]">
                       </div>
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
                          <textarea data-name="Mô tả" class="
                           check-input
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

              <button
                 class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">
                 Thêm</button>
           </form>
        </div>
     </main>`;
    },
    afterRender() {
        const colorEl = document.getElementsByClassName("color[]");
        const sizeEl = document.getElementsByClassName("size[]");
        const formProduct = document.querySelector("#add-product");

        const featuredImage = document.querySelector("#featured_image");
        const subImage = document.querySelector("#sub_image");

        const previewImageFeatured = document.querySelector("#preview_image_featured");
        const previewImageSub = document.querySelector("#preview_image_sub");
        const album = document.querySelector("#album");
        const titleProduct = document.querySelector("#title-product");
        titleProduct.focus();

        let imgFeatured = "";
        let imgSub = "";
        const images = [];

        album.addEventListener("change", (e) => {
            e.preventDefault();
            for (let i = 0; i < album.files.length; i++) {
                const API_CLOUDDINARY = "https://api.cloudinary.com/v1_1/dhfndew6y/image/upload";
                const UPLOAD_PRESET = "njlgbczl";
                const formData = new FormData();
                formData.append("file", album.files[i]);
                formData.append("upload_preset", UPLOAD_PRESET);
                axios.post(API_CLOUDDINARY, formData, {
                    headers: {
                        "Content-Type": "application/form-data",
                    },
                }).then((res) => {
                    images.push(res.data.secure_url);
                });
            }
        });

        featuredImage.addEventListener("change", async () => {
            const API_CLOUDDINARY = "https://api.cloudinary.com/v1_1/dhfndew6y/image/upload";
            const UPLOAD_PRESET = "njlgbczl";
            const formData = new FormData();
            formData.append("file", featuredImage.files[0]);
            formData.append("upload_preset", UPLOAD_PRESET);
            const res = await axios.post(API_CLOUDDINARY, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            previewImageFeatured.src = res.data.secure_url;
            imgFeatured = res.data.secure_url;
        });

        subImage.addEventListener("change", async () => {
            const API_CLOUDDINARY = "https://api.cloudinary.com/v1_1/dhfndew6y/image/upload";
            const UPLOAD_PRESET = "njlgbczl";
            const formData = new FormData();
            formData.append("file", subImage.files[0]);
            formData.append("upload_preset", UPLOAD_PRESET);
            axios.post(API_CLOUDDINARY, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            }).then((res) => {
                previewImageSub.src = res.data.secure_url;
                imgSub = res.data.secure_url;
            });
        });

        formProduct.addEventListener("submit", (e) => {
            e.preventDefault();

            const checkInput = document.querySelectorAll(".check-input");
            checkInput.forEach((val) => {
                if (val.value === "") {
                    toastr.error(`Vui lòng không để trống ${val.dataset.name}`);
                }
            });
            const colorVal = [];
            const sizeVal = [];
            const category = document.querySelector("#category");
            const desc = document.querySelector("#desc");
            const price = document.querySelector("#price");
            const priceSale = document.querySelector("#price_sale");
            if (titleProduct.value
             && category.value
             && desc.value
             && price.value
             && priceSale.value) {
                for (let i = 0; i < colorEl.length; i++) {
                    if (colorEl[i].checked) {
                        colorVal.push(colorEl[i].value);
                    }
                }
                for (let i = 0; i < sizeEl.length; i++) {
                    if (sizeEl[i].checked) {
                        sizeVal.push(sizeEl[i].value);
                    }
                }

                const data = {
                    title: titleProduct.value,
                    productCateId: category.value,
                    featured_image: imgFeatured,
                    sub_image: imgSub,
                    images: [...images],
                    description: desc.value,
                    created_at: "2022-01-15T01:54:24.955Z",
                    price: price.value,
                    sale_off: priceSale.value,
                    options: [
                        {
                            name: "color",
                            value: [...colorVal],
                        },
                        {
                            name: "size",
                            value: [...sizeVal],
                        },
                    ],
                };
                addProduct(data)
                    .then(() => {
                        // titleProduct.value = "";
                        // category.value = "";
                        // desc.value = "";
                        // price.value = "";
                        // priceSale.value = "";
                        document.location.href = "/#/admin/products/add";
                        toastr.success("Thêm thành công!");
                    });
            }
        });
    },
};
export default AddProduct;