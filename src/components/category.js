import { getAll } from "../api/categories";

const Category = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
      <select class="focus:outline-none ">
      ${data.map((item) => `<option>${item.title.charAt(0).toUpperCase()}${item.title.slice(1)
    }</option>`).join("")} 
   </select>`;
    },
};
export default Category;