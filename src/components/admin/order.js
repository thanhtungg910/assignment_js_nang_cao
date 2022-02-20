/* eslint-disable no-nested-ternary */
import { relationshipsOrdersDetails } from "../../api/orders";
import { getOrdersDetailsOrderId } from "../../api/ordersDetails";
import { productsEmbedOrders } from "../../api/products";
import $ from "../../utils/dom";

const order = {
    async render() {
        const { data } = await relationshipsOrdersDetails();
        return /* html */`${data.map((item) => `<tr class="text-gray-700 dark:text-gray-400 font-sans">
        <td class="px-4 py-3 text-sm">
           ${item.customer_name}
        </td>
        <td class="px-4 py-3 text-sm">
           ${item.customer_email}
        </td>
        <td class="px-4 py-3 text-sm">
           ${item.customer_phone}
        </td>
        <td class="px-4 py-3 text-sm">
           ${item.customer_address}
        </td>
        <td class="px-4 py-3 text-sm">
           ${item.nodes}
        </td>
        <td class="px-4 py-3 text-sm">
           ${(item.orders_details).length}
        </td>
        <td class="px-4 py-3 text-sm">
           ${item.orders_details.reduce(
        ((price, itemOrder) => price + ((+itemOrder.unit_price * +itemOrder.quantity))),
        0,
    ).toLocaleString("vi", { style: "currency", currency: "VND" })}
        </td>
        <td class="px-4 py-3 text-sm">
           ${(+item.status === 0) ? `<span class="px-2 py-1 font-semibold leading-tight text-orange-700
                   bg-orange-100 rounded-full dark:text-white dark:bg-orange-600"> Pending </span>` : (+item.status === 1)
        ? `<span
              class="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700">
              Shiping
           </span>` : `<span
              class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
              Done
           </span>`}
     
        </td>
        <td class="px-4 py-3 text-sm">
           <div class="flex items-center space-x-4 text-sm">
              <button data-id="${item.id}" data-name="${item.customer_name}" data-total="${item.orders_details.reduce(
    ((price, itemOrder) => price + ((+itemOrder.unit_price * +itemOrder.quantity))),
    0,
)}" class="flex details-order modal-open  items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                 aria-label="Delete">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fill-rule="evenodd"
                       d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                       clip-rule="evenodd" />
                 </svg>
              </button>
           </div>
        </td>
     </tr>`).join("")}`;
    },
    afterRender() {
        const ordersList = $("#orders-list");
        $(".details-order").forEach((btn) => {
            btn.addEventListener("click", async () => {
                const { data } = await getOrdersDetailsOrderId(btn.dataset.id);
                const dataOrders = data.map((item) => item.productId);
                ordersList.innerHTML = "";
                dataOrders.forEach(async (item) => {
                    const { data: products } = await productsEmbedOrders(item);
                    $(".custommer").innerHTML = `Khách hàng: ${btn.dataset.name}`;
                    $(".total").innerHTML = `Tổng tiền: ${(+btn.dataset.total).toLocaleString("vi", { style: "currency", currency: "VND" })}`;
                    ordersList.innerHTML += `<tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td
                       class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                       ${products?.title}</td>
                    <td
                       class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                       <img class="w-52" src="${products?.featured_image}" alt="">
                    </td>
                    <td
                       class="py-4 price-order px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                       ${(+products.price).toLocaleString("vi", { style: "currency", currency: "VND" })}</td>
                    <td id="options-products" class="py-4 px-6 text-sm font-medium">
                    ${products.orders_details.map((options) => `<div class="flex items-center space-x-3 mt-2 border-t-0">
                    <label
                       class="relative input-radio-checked  rounded-full flex items-center justify-center cursor-pointer ring-gray-400 -m-0.5 p-0.5 focus:outline-none">
                       <span class="text-sm" aria-hidden="true">Màu</span>
                    </label>
                    <label
                       class="relative input-radio-checked  rounded-full flex items-center justify-center cursor-pointer ring-gray-400 -m-0.5 p-0.5 focus:outline-none">
                       <span class="h-5 w-5 bg-[${options.color}] border rounded-full"
                          aria-hidden="true"></span>
                    </label>
                 </div><div class="flex items-center space-x-3 mt-2">
                 <label
                    class="relative input-radio-checked  rounded-full flex items-center justify-center cursor-pointer ring-gray-400 -m-0.5 p-0.5 focus:outline-none">
                    <span class="text-sm" aria-hidden="true">Size: ${options.size}</span>
                 </label>
              </div><div class="flex items-center space-x-3 mt-2">
              <label
                 class="relative input-radio-checked  rounded-full flex items-center justify-center cursor-pointer ring-gray-400 -m-0.5 p-0.5 focus:outline-none">
                 <span class="text-sm" aria-hidden="true">Số lượng: ${options.quantity}</span>
              </label>
           </div>`).join("")}
                    </td>
                 </tr>`;
                });
            });
        });
    },
};
export default order;