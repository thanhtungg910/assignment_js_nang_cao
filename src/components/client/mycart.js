const Mycart = {
    render() {
        return /* html */ `
     <div class="w-full overflow-hidden rounded-lg shadow-xs">
                    <div class="w-full overflow-x-auto">
                       <table class="w-full whitespace-no-wrap">
                          <thead>
                             <tr
                                class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                <th class="px-4 py-3">Sản phẩm</th>
                                <th class="px-4 py-3">Tên sản phẩm</th>
                                <th class="px-4 py-3">Số lượng</th>
                                <th class="px-4 py-3">Giá</th>
                                <th class="px-4 py-3">Trạng thái</th>
                             </tr>
                          </thead>
                          <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                             <tr class="text-gray-700 dark:text-gray-400">
                                <td class="px-4 py-3">
                                   Sản phẩm
                                </td>
                                <td class="px-4 py-3 text-sm">
                                   Tên sản phẩm
                                </td>
                                <td class="px-4 py-3 text-sm">
                                   Số lượng
                                </td>
                                <td class="px-4 py-3 text-sm">
                                   Giá
                                </td>
                                <td class="px-4 py-3 text-xs">
                                   <span
                                      class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                      Approved
                                   </span>
                                </td>
                             </tr>
                             <tr class="text-gray-700 dark:text-gray-400">
                                <td class="px-4 py-3">
                                   Sản phẩm
                                </td>
                                <td class="px-4 py-3 text-sm">
                                   Tên sản phẩm
                                </td>
                                <td class="px-4 py-3 text-sm">
                                   Số lượng
                                </td>
                                <td class="px-4 py-3 text-sm">
                                   Giá
                                </td>
                                <td class="px-4 py-3 text-xs">
                                   <span
                                      class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                      Approved
                                   </span>
                                </td>
                             </tr>
                             <tr class="text-gray-700 dark:text-gray-400">
                                <td class="px-4 py-3">
                                   Sản phẩm
                                </td>
                                <td class="px-4 py-3 text-sm">
                                   Tên sản phẩm
                                </td>
                                <td class="px-4 py-3 text-sm">
                                   Số lượng
                                </td>
                                <td class="px-4 py-3 text-sm">
                                   Giá
                                </td>
                                <td class="px-4 py-3 text-xs">
                                   <span
                                      class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                      Approved
                                   </span>
                                </td>
                             </tr>
                          </tbody>
                       </table>
                    </div>
                 </div>`;
    },
};
export default Mycart;