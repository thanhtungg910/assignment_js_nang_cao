const OrderList = {
    render() {
        return /* html */ `
      <main class="min-h-screen">
         <div class="mt-2 p-4 bg-white">
            <div class="lg:flex lg:items-center lg:justify-between">
               <div class="flex-1 min-w-0">
                  <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                     Order List
                  </h2>
               </div>

               <div class="mt-5 flex lg:mt-0 lg:ml-4">
                  <span class="sm:ml-3">
                     <button type="button"
                        class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <!-- Heroicon name: solid/check -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5"
                           viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd"
                              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                              clip-rule="evenodd" />
                        </svg>
                        Add product
                     </button>
                  </span>
               </div>
            </div>
         </div>
         <div class="product-list">
            <div class="flex flex-col">
               <div class="overflow-x-visible">
                  <div class="align-middle inline-block min-w-full">
                     <div class=" border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                           <thead class="bg-gray-50">
                              <tr>
                                 <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <label class="inline-flex items-center mt-3">
                                       <input type="checkbox"
                                          class="form-checkbox h-4 w-4 text-pink-600"><span
                                          class="ml-2 text-gray-700"></span>
                                    </label>
                                 </th>
                                 <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                 </th>
                                 <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Title
                                 </th>
                                 <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                 </th>
                                 <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Role
                                 </th>
                                 <th scope="col" class="relative px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                 </th>
                              </tr>
                           </thead>
                           <tbody class="bg-white divide-y divide-gray-200">
                              <tr>
                                 <td class="px-6 py-4 whitespace-nowrap">
                                    <label class="inline-flex items-center mt-3">
                                    <input type="checkbox"
                                    class="form-checkbox h-4 w-4 text-pink-600"><span
                                    class="ml-2 text-gray-700"></span>
                                    </label>
                                 </td>
                                 <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                       <div class="flex-shrink-0 h-10 w-10">
                                          <img class="h-10 w-10 rounded-full"
                                             src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                                             alt="">
                                       </div>
                                       <div class="ml-4">
                                          <div class="text-sm font-medium text-gray-900">
                                             Jane Cooper
                                          </div>
                                          <div class="text-sm text-gray-500">
                                             jane.cooper@example.com
                                          </div>
                                       </div>
                                    </div>
                                 </td>
                                 <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">Regional Paradigm Technician
                                    </div>
                                    <div class="text-sm text-gray-500">Optimization</div>
                                 </td>
                                 <td class="px-6 py-4 whitespace-nowrap">
                                    <span
                                       class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                       Active
                                    </span>
                                 </td>
                                 <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    Admin
                                 </td>
                                 <td
                                    class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <a href="#"
                                       class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                 </td>
                              </tr>
                              <tr>
                                 <td class="px-6 py-4 whitespace-nowrap">
                                    <label class="inline-flex items-center mt-3">
                                    <input type="checkbox"
                                    class="form-checkbox h-4 w-4 text-pink-600"><span
                                    class="ml-2 text-gray-700"></span>
                                    </label>
                                 </td>
                                 <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                       <div class="flex-shrink-0 h-10 w-10">
                                          <img class="h-10 w-10 rounded-full"
                                             src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                                             alt="">
                                       </div>
                                       <div class="ml-4">
                                          <div class="text-sm font-medium text-gray-900">
                                             Jane Cooper
                                          </div>
                                          <div class="text-sm text-gray-500">
                                             jane.cooper@example.com
                                          </div>
                                       </div>
                                    </div>
                                 </td>
                                 <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">Regional Paradigm Technician
                                    </div>
                                    <div class="text-sm text-gray-500">Optimization</div>
                                 </td>
                                 <td class="px-6 py-4 whitespace-nowrap">
                                    <span
                                       class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                       Active
                                    </span>
                                 </td>
                                 <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    Admin
                                 </td>
                                 <td
                                    class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <a href="#"
                                       class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </main>`;
    },
};
export default OrderList;