/* eslint-disable no-new */
import Swiper from "swiper";
import "swiper/css/bundle";
import { getProduct } from "../api/products";
import $ from "../utils/dom";
import { AddToCart } from "../api/cart";

const Popup = {
    render() {
        return /* html */`<div style="opacity: -0.1; display: none;background: rgba(0,0,0,.7)"
        class="py-10 fixed overflow-y-hidden  inset-0  bg-gray-700 transition z-30 max-h-full overflow-hidden  duration-150 ease-in-out  top-0 right-0 bottom-0 left-0"
        id="popup-product">
        <div role="alert" class="container mx-auto w-11/12 md:w-2/3">
           <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400 w-full">
              <div id="popup-product-table" class="grid grid-cols-2 gap-4 ">
                 
              </div>
           </div>
        </div>
        <button
           class="cursor-pointer close-popup absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
           aria-label="close modal" role="button">
           <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="20" height="20"
              viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
           </svg>
        </button>
     </div>`;
    },
    afterRender() {
        new Swiper(".product-item-img", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
        const modal = document.getElementById("popup-product");
        $(".popup-product").forEach((item) => {
            item.addEventListener("click", async () => {
                modalHandler(true);
                const { data } = await getProduct(item.dataset.id);
                const { options } = data;
                $("#popup-product-table").innerHTML = `<div class="swiper w-full product-item-img">
                <div class="swiper-wrapper">
                ${data.images.map((img) => `<div class="swiper-slide">
                <img class="object-cover w-full"
                   src="${img}"
                   alt="">
             </div>`).join("")}
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
             </div>
             <div>
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
                      class="flex h-8 w-8 bg-[${color}] border rounded-full border-gray-300  cursor-pointer focus:outline-none  peer-checked:ring-black peer-checked:ring-2 peer-checked:border-transparent"
                      for="${color}" style="background-color: ${color};"></label>
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
                      justify-center text-sm font-medium uppercase bg-white shadow-sm text-gray-900 border-gray-300  cursor-pointer focus:outline-none  peer-checked:ring-black peer-checked:ring-2 peer-checked:border-transparent"
                      for="${size}">${size}</label>
                </div>`).join("")}
                </div>
                </fieldset>
             </div>
             <div class="mb-6 mt-10">
    <input type="number" id="amount" value="1" min="1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>
             <button data-id=${data.id} id="add-product" class="mt-10 w-full bg-black border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">Mua ngay</button>
             <div class="text-sm  overflow-hidden p-2">
                ${data.description}     
             </div>
          </form>
             </div>`;
                $(".product-item").addEventListener("submit", (e) => {
                    e.preventDefault();
                    const color = $("input[name=\"color\"]:checked").value;
                    const size = $("input[name=\"size\"]:checked").value;
                    const option = {
                        color,
                        size,
                        id: $("#add-product").dataset.id,
                        amount: ($("#amount").value),
                    };
                    if (option) {
                        AddToCart(false, option);
                        modalHandler(false);
                    }
                });
            });
        });
        $(".close-popup").addEventListener("click", () => {
            modalHandler(false);
        });

        function modalHandler(val) {
            if (val) {
                fadeIn(modal);
            } else {
                fadeOut(modal);
            }
        }

        function fadeOut(el) {
            el.style.opacity = 1;
            (function fade() {
                if ((el.style.opacity -= 0.1) < 0) {
                    el.style.display = "none";
                } else {
                    requestAnimationFrame(fade);
                }
            }());
        }

        function fadeIn(el, display) {
            el.style.opacity = 0;
            el.style.display = display || "flex";
            (function fade() {
                let val = parseFloat(el.style.opacity);
                if (!((val += 0.2) > 1)) {
                    el.style.opacity = val;
                    requestAnimationFrame(fade);
                }
            }());
        }
    },
};
export default Popup;