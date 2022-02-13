import { searchProduct } from "../api/products";

const Search = {
    render() {
        return /* html */`<!--Modal-->
        <div
           class="modal opacity-0 pointer-events-none z-50  fixed w-full h-full top-0 left-0 flex items-start justify-center">
           <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
  
           <div class="modal-container bg-white w-11/12 md:max-w-11/12 mx-auto rounded shadow-lg z-50 overflow-y-auto">
              <!-- Add margin if you want to see some of the overlay behind the modal-->
              <div class="modal-content   py-4 text-left px-3">
                 <!--Body-->
                 <div class="flex justify-center">
                    <div class="mb-3 w-3/6">
                       <div class="input-group relative flex  items-stretch w-full mb-4">
                          <input type="search"
                             class="form-control-search relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                             placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
                          <span
                             class="input-group-text cursor-pointer flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
                             id="basic-addon2-search">
                             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4"
                                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                   d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                                </path>
                             </svg>
                          </span>
                       </div>
                    </div>
                 </div>
  
                 <!--Footer-->
                 <div id="search-list" class="flex justify-center pt-2">
                
                 </div>
              </div>
           </div>
        </div>`;
    },
    afterRender() {
        const formSearch = document.querySelector(".form-control-search");
        const searchList = document.querySelector("#search-list");
        const btnSearch = document.querySelector("#basic-addon2-search");
        const handlerSearch = async (e) => {
            e.preventDefault();
            const { data } = await searchProduct(formSearch.value);
            searchList.innerHTML = data.map((item) => ` <div class="flex justify-between mt-2">
         <div class="flex justify-center items-center">
            <a href="/#/details/${item.id}">
               <img class="h-20 w-20 object-cover rounded"
                  src="${item.featured_image}"
                  alt="">
            </a>
            <div class="mx-3">
               <h3 class="text-sm text-gray-600"><a href="/#/details/${item.id}">${item.title}</a></h3>    
               <span class="text-gray-600">${item.price}</span>
            </div>
         </div>
      </div>`).join("");
        };
        formSearch.addEventListener("change", handlerSearch);
        btnSearch.addEventListener("click", handlerSearch);
    },
};
export default Search;