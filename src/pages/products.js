import Category from "../components/category";
import FilterProduct from "../components/filter";
import Product from "../components/product";

const Products = {
    render() {
        document.title = "Sản phẩm";
        return /* html */ `
        <main>
        <div class="container mx-auto">
           <div class="bg-white p-6">
              <div class="max-w-4xl mx-auto py-16 px-5 sm:py-20 sm:px-6 lg:max-w-full lg:px-4 ">
                 <div class="flex justify-between">
                     ${Category.render()}
                     ${FilterProduct.render()}
                 </div>

                 <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
                    ${Product.render()}                    
                 </div>
              </div>
           </div>
        </div>
     </main>`;
    },
};
export default Products;