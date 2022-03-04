import Contacts from "../../../components/admin/contacts";

const ContactsPageDashboard = {
    async render() {
        document.title = "Liên hệ";
        return /* html */ `
        <main class="h-full pb-16 overflow-y-auto">
           <div class="container grid px-5 mx-auto">
              <h2 class="my-6 text-2xl font-semibold text-gray-700  ">
                 Liên hệ
              </h2>
              <!-- CTA -->
              <div
                 class="flex items-center justify-between p-4  text-sm font-semibold focus:outline-none focus:shadow-outline-purple">
                 <div class="flex items-center">
                    <div class="relative text-gray-600">
                       <input type="search" id="search-input" name="serch" placeholder="Tìm kiếm sản phẩm"
                          class="bg-white h-10 px-5 pr-10 text-sm focus:outline-none">
                       <button id="btn-search" type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                          <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                             viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;"
                             xml:space="preserve" width="512px" height="512px">
                             <path
                                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                          </svg>
                       </button>
                    </div>
                    <span>
                       <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                             d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z">
                          </path>
                       </svg>
                    </span>
  
                 </div>
                 
              </div>
              <!-- With avatar -->
              <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                      <div class="w-full overflow-x-auto">
                         <table class="w-full whitespace-no-wrap">
                            <thead>
                               <tr
                                  class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                                  <th class="px-4 py-3">Tên khách hàng</th>
                                  <th class="px-4 py-3">Email</th>
                                  <th class="px-4 py-3">Nội dung</th>
                               </tr>
                            </thead>
                            <tbody  id="product-table"  class="bg-white divide-y ">
                            ${await Contacts.render()}
                            </tbody>
                         </table>
                      </div>
              
           </div>
        </main>`;
    },
    afterRender() {
        Contacts.afterRender();
    },
};
export default ContactsPageDashboard;