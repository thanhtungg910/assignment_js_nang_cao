import { relationshipsOrdersDetails } from "../../api/orders";

const order = {
    async render() {
        const { data } = await relationshipsOrdersDetails();
        return /* html */`${data.map((item) => `
        <tr class="text-gray-700 dark:text-gray-400">
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
      ${item.orders_details.reduce(((price, itemOrder) => price + ((+itemOrder.unit_price) * (+itemOrder.quantity))), 0)}
      </td>
      <td class="px-4 py-3 text-sm">
      <span class="px-2 py-1 font-semibold leading-tight text-orange-700
       bg-orange-100 rounded-full dark:text-white dark:bg-orange-600">
                                Pending
      </span>
      </td>
      
   </tr>`).join("")}`;
    },
};
export default order;