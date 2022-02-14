import Category from "../components/category";
import FilterProduct from "../components/filter";
import Pagination from "../components/pagination";
import Product from "../components/product";

const Products = {
    async render() {
        document.title = "Sản phẩm";
        return /* html */ `
        <main>
        <div class="container mx-auto">
           <div class="bg-white p-6">
              <div class="max-w-4xl mx-auto py-16 px-5 sm:py-20 sm:px-6 lg:max-w-full lg:px-4 ">
                 <div class="flex justify-between">
                     ${await Category.render()}
                     ${FilterProduct.render()}
                 </div>

                 <div id="product-list" class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
                    ${await Product.render()}                    
                 </div>
                 
                 <div class="flex justify-center items-center space-x-1">
                     <a href="/#/products" class="flex items-center px-4 py-2  hover:underline rounded-md">
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                     <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                  </svg>
                     </a>
                     ${await Pagination.render()}
                     <a href="#" class="px-4 py-2 font-bold  rounded-md hover:underline">
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                     <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                     </a>
               </div>
            </div>
           </div>
        </div>
     </main>`;
    },
    afterRender() {
        const activeMenu = document.querySelector("#menu");
        activeMenu.classList.toggle("text-black");
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 100) {
                activeMenu.classList.add(
                    "bg-white",
                    "shadow-lg",
                    "transition-all",
                    "text-black",
                );
            } else {
                activeMenu.classList.remove(
                    "bg-white",
                    "shadow-lg",
                    "transition-all",
                    "text-black",
                );
            }
        });
        const menuFilter = document.querySelector("#menuFilter");
        menuFilter.addEventListener("click", () => {
            const dropDown = document.querySelector(".drop-downs");
            const chevron = document.querySelector(".chevron");
            chevron.attributes.d.nodeValue = (!dropDown.classList.toggle("invisible"))
                ? "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                : "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z";
        });
        Category.afterRender();
        Product.afterRender();
    },
};
export default Products;