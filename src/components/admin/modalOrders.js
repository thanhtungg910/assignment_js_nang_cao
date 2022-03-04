const modalOrders = {
    render() {
        return /* html */ `<div
        class="modal opacity-0  pointer-events-none fixed overflow-y-hidden  inset-0  transition z-30 max-h-full overflow-auto  duration-150 ease-in-out  top-0 right-0 bottom-0 left-0">
        <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

        <div class="modal-container bg-white w-11/12 md:max-w-11/12 mx-auto rounded shadow-lg z-50 overflow-y-auto">
           <!-- Add margin if you want to see some of the overlay behind the modal-->
           <div class="modal-content py-4 text-left px-3">
              <!--Body-->
              <div 
                 class="relative px-5 md:px-10 bg-white shadow-md rounded border border-gray-400 w-full">
                 <!-- content -->
                 <div class="py-6">
                    <div class="flex justify-between">
                    <h2 class="text-lg font-mono custommer">Khách hàng: Tung</h2>
                    <h2 class="text-lg font-mono total">Tổng tiền: 1$</h2>
                    </div>
                    <div class="flex flex-col">
                       <div class="overflow-x-auto border-0 sm:rounded-lg">
                          <div class="inline-block min-w-full align-middle">
                             <div class="overflow-hidden ">
                                <table class="min-w-full divide-y divide-gray-200 table-fixed">
                                   <thead class="bg-gray-100 ">
                                      <tr>
                                         <th scope="col"
                                            class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
                                            Tên sản phẩm
                                         </th>
                                         <th scope="col"
                                            class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
                                            Hình ảnh
                                         </th>
                                         <th scope="col"
                                            class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
                                            Giá sản phẩm
                                         </th>
                                         <th scope="col"
                                            class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
                                            Lựa chọn
                                         </th>
                                         
                                      </tr>
                                   </thead>
                                   <tbody id="orders-list"
                                      class="bg-white divide-y divide-gray-200 ">
                                      <!-- start -->
                                      
                                      <!-- End -->
                                   </tbody>
                                </table>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>`;
    },
    afterRender() {
        const openmodal = document.querySelectorAll(".modal-open");
        for (let i = 0; i < openmodal.length; i++) {
            openmodal[i].addEventListener("click", (event) => {
                event.preventDefault();
                toggleModal();
            });
        }

        const overlay = document.querySelector(".modal-overlay");
        overlay.addEventListener("click", toggleModal);

        const closemodal = document.querySelectorAll(".modal-close");
        for (let i = 0; i < closemodal.length; i++) {
            closemodal[i].addEventListener("click", toggleModal);
        }
        function toggleModal() {
            const body = document.querySelector("body");
            const modal = document.querySelector(".modal");
            modal.classList.toggle("opacity-0");
            modal.classList.toggle("pointer-events-none");
            body.classList.toggle("modal-active");
        }
    },
};
export default modalOrders;