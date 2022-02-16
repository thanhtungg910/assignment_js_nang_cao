/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { AddToCart } from "../api/cart";
import { getProduct } from "../api/products";
import { Product } from "../components";
import $ from "../utils/dom";

const Details = {
    async  render(id) {
        document.title = "Chi tiết sản phẩm";
        const { data } = await getProduct(id);
        const { options } = data;
        return /* html */`
      <main>
         <div class="max-w-2xl mt-9 mx-auto pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pb-24 lg:px-8 lg:grid lg:grid-cols-2 grid-flow-col-dense lg:gap-x-8 ">
         <div class="mt-4 lg:mt-0 p-2 lg:row-span-3 relative">
         <form class="content-product product-item sticky top-32">
            <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">${data.title}</h1>
            <h2 class="sr-only">Product information</h2>
            <p class="text-3xl text-gray-900">${data.price}</p>
            <!-- Reviews-->
            <!-- Colors-->
            <div class="mt-10">
               <h3 class="text-sm text-gray-900 font-medium">Color</h3>
               <fieldset class="mt-4">
               <legend class="sr-only">Choose a color</legend>
               <div class="flex items-center space-x-3">
                  ${options[0].value.map((color) => `<div class="relative">
                  <input class="sr-only peer" type="radio" checked value=${color} name="color" id="${color}">
                  <label
                     class="flex h-8 w-8 bg-[${color}] border rounded-full border-gray-300  cursor-pointer focus:outline-none  peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent"
                     for="${color}"></label>
               </div>`).join("")}
               </div>
               </fieldset>
            </div>
            <!-- Sizes-->
            <div class="mt-10">
               <div class="flex items-center justify-between">
               <h3 class="text-sm text-gray-900 font-medium">Size</h3><a class="text-sm font-medium text-indigo-600 hover:text-indigo-500" href="#"> </a>
               </div>
               <fieldset class="mt-4">
               <legend class="sr-only">Choose a size</legend>
               <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                  ${options[1].value.map((size) => `<div class="relative">
                  <input class="sr-only peer" type="radio" checked value=${size} name="size" id="${size}">
                  <label
                     class="flex py-3 px-4 border rounded-md items-center 
                     justify-center text-sm font-medium uppercase bg-white shadow-sm text-gray-900 border-gray-300  cursor-pointer focus:outline-none  peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent"
                     for="${size}">${size}</label>
               </div>`).join("")}
               </div>
               </fieldset>
            </div>
            <button data-id=${data.id} id="add-product" class="mt-10 w-full bg-black border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">Mua ngay</button>
            <div class="w-[283px] mt-2 text-sm">
               ${data.description}     
            </div>
         </form>
         </div>
         <div class="lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
         <div class="content-image float-right snap-y snap-mandatory">
         ${data.images.map((img) => `<div class="snap-always snap-center py-2 object-cover"><img src="${img}" alt=""></div>
`).join("")}
           </div>
         </div>
      </div>
      <div class="container mx-auto">
           <div class="bg-white p-6">
              <div class="max-w-4xl mx-auto py-16 px-5 sm:py-20 sm:px-6 lg:max-w-full lg:px-4 ">
                 <div class="flex justify-between">
                 <h2>Có thể bạn thích</h2>
                 </div>

                 <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
                    ${await Product.renderDetail()}                    
                 </div>
              </div>
           </div>
        </div>
      </main>`;
    },
    afterRender() {
        $("#menu").classList.toggle("text-black");
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 50) {
                $("#menu").classList.add(
                    "bg-white",
                    "shadow-lg",
                    "transition-all",
                    "text-black",
                );
            } else {
                $("#menu").classList.remove(
                    "bg-white",
                    "shadow-lg",
                    "transition-all",
                    "text-black",
                );
            }
        });
        $(".product-item").addEventListener("submit", (e) => {
            e.preventDefault();
            const color = $("input[name=\"color\"]:checked").value;
            const size = $("input[name=\"size\"]:checked").value;
            const data = {
                color,
                size,
                id: $("#add-product").dataset.id,
            };
            if (data) {
                AddToCart(false, data);
            }
        });
        AddToCart(".add-to-cart");
    },
};
export default Details;