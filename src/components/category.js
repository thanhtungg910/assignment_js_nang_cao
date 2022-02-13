import { getAll, getRelationships } from "../api/categories";

const Category = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
      <select class="focus:outline-none select-categories">
      <option value="">Tất cả</option>
      ${data.map((item) => `<option value="${item.id}">${item.title.charAt(0).toUpperCase()}${item.title.slice(1)
    }</option>`).join("")} 
   </select>`;
    },
    afterRender() {
        const selectCategories = document.querySelector(".select-categories");
        const productList = document.querySelector("#product-list");
        selectCategories.addEventListener("change", async (e) => {
            e.preventDefault();
            if (selectCategories.value) {
                const { data: { products } } = await getRelationships(`/productCates/${selectCategories.value}?_embed=products`);
                if (products) {
                    productList.innerHTML = products.map((item) => /* html */`<div class="group relative">
            <div class="w-full min-h-[483px] bg-gray-200 aspect-w-1 aspect-h-1  overflow-hidden lg:h-80 lg:aspect-none">
            <div class="relative w-full h-full">
               <img
                  src="${item.featured_image}"
                  alt="Front of men&#039;s Basic Tee in black."
                  class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full" />
                  <img
                  src="${item.sub_image}"
                  alt="Front of men&#039;s Basic Tee in black."
                  class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full opacity-0 group-hover:opacity-100" />
            </div>
   
            <svg xmlns="http://www.w3.org/2000/svg"
               class="h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-150 top-[25%] z-10 group-hover:opacity-100 text-black"
               fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
               d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
               d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
               </svg>
               <svg xmlns="http://www.w3.org/2000/svg"
               class="h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-250 top-1/3 z-10 group-hover:opacity-100 text-black"
               fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
               d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
               </svg>
               </div>
               <div class="mt-4 flex justify-between">
               <div>
               <h3 class="text-sm text-gray-700">
               <a href="/#/details/${item.id}">
               <span aria-hidden="true" class="absolute inset-0"></span>
               ${item.title}
               </a>
               </h3>
               <p class="mt-1 text-sm text-gray-500">${item.options[0].name}</p>
               </div>
               <p class="text-sm font-medium text-gray-900">${item.price}</p>
               </div>
               </div>`).join(" ");
                }
            } else {
                document.location.href = `/#/products`;
            }
        });
    },
};
export default Category;