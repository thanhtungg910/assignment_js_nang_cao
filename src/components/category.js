import { getAll } from "../api/categories";
import Products from "./product";
import reRender from "../utils/rerender";

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
        selectCategories.addEventListener("change", (e) => {
            e.preventDefault();
            if (selectCategories.value) {
                document.location.href = `/#/productCates/${selectCategories.value}?_embed=products`;
                reRender("#product-list", Products);
            } else {
                document.location.href = `/#/products`;
            }
        });
    },
};
export default Category;