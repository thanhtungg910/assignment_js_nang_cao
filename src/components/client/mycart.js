/* eslint-disable no-nested-ternary */
import { getOrder } from "../../api/orders";
import { getOrderDetailsWithOrder } from "../../api/ordersDetails";
import { productsEmbedOrders } from "../../api/products";

const Mycart = {
    async render() {
        const { id } = JSON.parse(localStorage.getItem("user"));
        const { data } = await getOrderDetailsWithOrder(+id);
        const { data: { status } } = await getOrder(id);
        const productId = data.map((item) => item?.productId);
        const promise = Promise.all(productId?.map(async (idProduct) => {
            const { data: product } = await productsEmbedOrders(idProduct);
            return product;
        }));
        const res = await promise;
        return /* html */ `${res?.map((item) => `<tr class="text-gray-700 dark:text-gray-400">
        <td class="px-4 py-3">
           ${item.title}
        </td>
        <td class="px-4 py-3 text-sm">
        ${(item.orders_details).length}
        </td>
        <td class="px-4 py-3 text-sm">
        ${item.orders_details.reduce((curr, orders) => curr + (+orders.quantity * +orders.unit_price), 0).toLocaleString("vi", { style: "currency", currency: "VND" })}
        </td>
        <td class="px-4 py-3 text-xs">
        ${(+status === 0) ? `<span class="px-2 py-1 font-semibold leading-tight text-orange-700
        bg-orange-100 rounded-full dark:text-white dark:bg-orange-600"> Pending </span>` : (+item.status === 1)
        ? `<span
   class="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700">
   Shiping
</span>` : `<span
   class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
   Done
</span>`}
        </td>
     </tr>`).join("")}
     `;
    },
};
export default Mycart;