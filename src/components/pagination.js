/* eslint-disable no-plusplus */
import { getAllProduct } from "../api/products";

const Pagination = {
    async render() {
        const { data } = await getAllProduct();
        const arr = [];
        const itemPage = 8;
        const page = Math.ceil(data.length / itemPage);
        //   const currentPage = (window.location.hash) ?
        // window.location.hash.split("_page=")[1] : 1;
        //   const start = (currentPage - 1) * itemPage;
        //   console.log(page);
        for (let i = 1; i <= page; i++) {
            arr.push(`
            <a href="/#/products?_page=${i}&_limit=8" class="px-4 py-2 text-gray-700 rounded-md hover:underline">
               ${i}
            </a>`);
        }

        return /* html */`${arr.map((item) => item).join("")}`;
    },
};
export default Pagination;