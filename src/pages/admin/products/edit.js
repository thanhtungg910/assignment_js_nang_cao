import AWN from "awesome-notifications";
import "awesome-notifications/dist/style.css";/* eslint-disable no-plusplus */
import axios from "axios";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { getProduct, editProduct } from "../../../api/products";
import { getAll as getCategories } from "../../../api/categories";
import uploadFile from "../../../utils/upload";
import $ from "../../../utils/dom";

const EditProduct = {
    async render(id) {
        document.title = "Chỉnh sửa sản phẩm";
        const { data } = await getProduct(id);

        const { data: dataCategories } = await getCategories();
        return /* html */ `<main class="h-full pb-16 overflow-y-auto">
        <div class="container grid px-5 mx-auto">
        <a href="/#/admin/products"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
      </svg></a>
        <h2 class="my-6 text-2xl font-semibold text-gray-700 ">
        Thêm sản phẩm
        </h2>
           <form id="add-product" class="bg-white px-3 pb-2">

              <div class="border-y-2 py-6 flex items-center">
                 <div class="w-[40%]">
                    <h2 class="block mb-2 text-sm font-medium text-gray-900 ">Tên sản phẩm</h2>
                 </div>
                 <div>
                    <input type="text" value="${data.title}" id="title-product" data-name="Tên sản phẩm"
                       class="check-input shadow-sm w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 ">
                 </div>
              </div>

              <div class="border-y-2 py-6 flex items-center">
                 <div class="w-[40%]">
                    <h2 class="block mb-2 text-sm font-medium text-gray-900 ">
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
                             ${dataCategories.map((item) => `<option value="${item.id}">${item.title}</option>`).join("")}
                          </select>
                       </div>
                    </div>
                 </div>
              </div>

              <div class="border-y-2 py-6 flex items-center">
                 <div class="w-[40%]">
                    <h2 class="block mb-2 text-sm font-medium text-gray-900 ">
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
                       <img src="${data.featured_image}" class="w-[300px]" id="preview_image_featured" alt="" />
                       <div class="flex text-sm text-gray-600">
                          <label for="featured_image"
                             class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                             <span>Upload a file</span>
                             <input id="featured_image"  type="file" class="sr-only  file-upload[]">
                          </label>
                          <p class="pl-1">or drag and drop</p>
                       </div>
                       <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                 </div>
              </div>

              <div class="border-y-2 py-6 flex items-center">
                 <div class="w-[40%]">
                    <h2 class="block mb-2 text-sm font-medium text-gray-900 ">
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
                       <img src="${data.sub_image}"  class="w-[300px]" id="preview_image_sub" alt="" />
                       <div class="flex text-sm text-gray-600">
                          <label for="sub_image"
                             class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                             <span>Upload a file</span>
                             <input value="${data.sub_image}" id="sub_image" type="file" class="sr-only file-upload[]">
                          </label>
                          <p class="pl-1">or drag and drop</p>
                       </div>
                       <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                 </div>
              </div>

              <div class="border-y-2 py-6 flex items-center">
                 <div class="w-[40%]">
                    <h2 class="block mb-2 text-sm font-medium text-gray-900 ">
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
                    <h2 class="block mb-2 text-sm font-medium text-gray-900 ">
                       Giá sản phẩm</h2>
                 </div>
                 <div>
                    <input type="number" value="${data.price}" id="price" data-name="Giá sản phẩm"
                       class="check-input shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                 </div>
              </div>

              <div class="border-y-2 py-6 flex items-center">
                 <div class="w-[40%]">
                    <h2 class="block mb-2 text-sm font-medium text-gray-900 ">
                       Giá giảm</h2>
                 </div>
                 <div>
                    <input type="number" value="${data.sale_off}" id="price_sale" value="0"
                       class="check-input shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                 </div>
              </div>

              <div class="border-y-2 py-6 flex items-center">
                 <div class="w-[40%]">
                    <h2 class="block mb-2 text-sm font-medium text-gray-900 ">
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

              <div id="size-shirt" class=" border-y-2 py-6 flex items-center">
                 <div class="w-[40%]">
                    <h2 class="block mb-2 text-sm font-medium text-gray-900 ">
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

              <div id="size-shoes" class="hidden border-y-2 py-6 flex items-center">
              <div class="w-[40%]">
                 <h2 class="block mb-2 text-sm font-medium text-gray-900 :text-gray-30dark0">
                    Size</h2>
              </div>
              <div>
                 <div class="grid grid-cols-4 gap-4">
                    <div>
                       <label>38</label>
                       <input type="checkbox" value="38" data-name="Size sản phẩm" class="check-input size[]">
                    </div>
                    <div>
                       <label>39</label>
                       <input type="checkbox" value="39" class="size[]">
                    </div>
                    <div>
                       <label>40</label>
                       <input type="checkbox" value="40" class="size[]">
                    </div>
                    <div>
                       <label>41</label>
                       <input type="checkbox" value="41" class="size[]">
                    </div>
                    <div>
                       <label>42</label>
                       <input type="checkbox" value="42" class="size[]">
                    </div>
                    <div>
                       <label>43</label>
                       <input type="checkbox" value="43" class="size[]">
                    </div>
                    <div>
                       <label>44</label>
                       <input type="checkbox" value="44" class="size[]">
                    </div>
                    <div>
                       <label>45</label>
                       <input type="checkbox" value="45" class="size[]">
                    </div>
                 </div>
              </div>
           </div>

              <div class="border-y-2 py-6 flex items-center">
                 <div class="w-[40%]">
                    <h2 class="block mb-2 text-sm font-medium text-gray-900 ">
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
                           " id="desc" rows="3" placeholder="Your message">${data.description}</textarea>
                       </div>
                    </div>
                 </div>
              </div>

              <button
                 class="text-white  bg-indigo-600 hover:bg-indigo-700  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4">
                 Cập nhật</button>
           </form>
        </div>
     </main>`;
    },
    afterRender(id) {
        const API_CLOUDDINARY = "https://api.cloudinary.com/v1_1/dhfndew6y/image/upload";
        const UPLOAD_PRESET = "njlgbczl";

        const colorEl = document.getElementsByClassName("color[]");
        const sizeEl = document.getElementsByClassName("size[]");
        const formProduct = document.querySelector("#add-product");

        const featuredImage = document.querySelector("#featured_image");
        const subImage = document.querySelector("#sub_image");

        const previewImageFeatured = document.querySelector("#preview_image_featured");
        const previewImageSub = document.querySelector("#preview_image_sub");
        const album = document.querySelector("#album");
        const category = document.querySelector("#category");

        const titleProduct = document.querySelector("#title-product");
        titleProduct.focus();

        let imgFeatured = "";
        let imgSub = "";
        const images = [];

        category.addEventListener("change", (e) => {
            e.preventDefault();
            const sizeShirt = document.querySelector("#size-shirt");
            const sizeShoes = document.querySelector("#size-shoes");
            if (+category.value === 2) {
                sizeShirt.classList.add("hidden");
                sizeShoes.classList.remove("hidden");
            } else {
                sizeShirt.classList.remove("hidden");
                sizeShoes.classList.add("hidden");
            }
        });

        album.addEventListener("change", (e) => {
            e.preventDefault();
            //  Upload album
            for (let i = 0; i < album.files.length; i++) {
                axios.post(
                    API_CLOUDDINARY,
                    uploadFile(album.files[i], UPLOAD_PRESET),
                    {
                        headers: {
                            "Content-Type": "application/form-data",
                        },
                    },
                ).then((res) => {
                    images.push(res.data.secure_url);
                });
            }
        });

        featuredImage.addEventListener("change", async () => {
            const file = featuredImage.files[0];
            file.preview = URL.createObjectURL(file);
            previewImageFeatured.src = file.preview;
        });

        subImage.addEventListener("change", () => {
            const file = subImage.files[0];
            file.preview = URL.createObjectURL(file);
            previewImageSub.src = file.preview;
        });

        formProduct.addEventListener("submit", async (e) => {
            e.preventDefault();
            const notifier = new AWN();
            const checkInput = document.querySelectorAll(".check-input");
            checkInput.forEach((val) => {
                if (val.value === "") {
                    toastr.error(`Vui lòng không để trống ${val.dataset.name}`);
                }
            });
            const colorVal = [];
            const sizeVal = [];
            const desc = document.querySelector("#desc");
            const price = document.querySelector("#price");
            const priceSale = document.querySelector("#price_sale");

            if (titleProduct.value
           && desc.value
           && price.value
           && priceSale.value) {
                //  Upload feature img
                if (featuredImage.files[0]) {
                    const resFeaturedImage = await axios.post(
                        API_CLOUDDINARY,
                        uploadFile(featuredImage.files[0], UPLOAD_PRESET),
                        {
                            headers: {
                                "Content-Type": "application/form-data",
                            },
                        },
                    );
                    previewImageFeatured.src = resFeaturedImage.data.secure_url;
                    imgFeatured = resFeaturedImage.data.secure_url;
                }
                //  Upload sub_img
                if (subImage.files[0]) {
                    const resSubImage = await axios.post(
                        API_CLOUDDINARY,
                        uploadFile(subImage.files[0], UPLOAD_PRESET),
                        {
                            headers: {
                                "Content-Type": "application/form-data",
                            },
                        },
                    );

                    previewImageSub.src = resSubImage.data.secure_url;
                    imgSub = resSubImage.data.secure_url;
                }

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
                    id,
                    title: titleProduct.value,
                    productCateId: category.value,
                    featured_image: imgFeatured || $("#preview_image_featured").src,
                    sub_image: imgSub || $("#preview_image_sub").src,
                    images: [...images],
                    description: desc.value,
                    created_at: new Date(),
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
                notifier.async(
                    editProduct(id, data),
                    () => {
                        toastr.success("Sửa thành công!");
                        setTimeout(() => {
                            document.location.href = "/#/admin/products";
                        }, 1000);
                    },
                );
            }
        });
    },
};
export default EditProduct;