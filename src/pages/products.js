import Category from "../components/category";
import FilterProduct from "../components/filter";
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

                 <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
                    ${await Product.render()}                    
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
    },
};
export default Products;