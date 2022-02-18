/* eslint-disable no-nested-ternary */
import AWN from "awesome-notifications";
import "awesome-notifications/dist/style.css";
import { getOrders, relationshipsOrdersDetails } from "../../api/orders";
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
        ((price, itemOrder) => price + ((+itemOrder.unit_price) * (+itemOrder.quantity))),
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
              <button data-id="${item.id}"
                 class="flex details-order items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
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
        $(".details-order").forEach((btn) => {
            btn.addEventListener("click", () => {
                const notifiAwn = new AWN();
                const options = {
                    replacements: {
                        modal: {
                            "Class name": "DOM Class",
                        },
                    },
                };
                notifiAwn.asyncBlock(
                    getOrders(),
                    ({ data }) => {
                        console.log(data);
                        notifiAwn.modal(
                            `<div class="mb-6 flex space-x-2 w-full">
             <input type="text" id="cate-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
             <button id="btn-add-cate" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
             fill="currentColor">
             <path fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd" />
          </svg></button></div>`,
                            "modal-tiny",
                            options,
                        );
                    }, /* omitted onResolve */
                    (err) => notifiAwn.alert(`API responded with code: ${err.response.status}`),
                );
            });
        });
    },
};
export default order;