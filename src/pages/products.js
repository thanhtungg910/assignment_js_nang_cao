const Products = {
    render() {
        document.title = "Sản phẩm";
        return /* html */ `
       <main>
       <div class="container mx-auto">
       <div class="grid grid-cols-4">
          <div class="col-span-2 relative">
             <img
                src="https://theme.hstatic.net/1000280685/1000722794/14/img_banner_5_1_product.jpg?v=489"
             />
             <a
                href="/products/ke"
                class="bg-inherit text-transparent py-1 px-16 z-50 absolute bottom-[40%] right-[43%]"
                >1</a
             >
             <a
                href="/products/tu"
                class="bg-inherit text-transparent py-1 px-16 absolute top-[35%] right-[20%]"
                >3</a
             >
          </div>
          <div class="relative">
             <img
                src="https://theme.hstatic.net/1000280685/1000722794/14/img_banner_5_2_product.jpg?v=489"
             />
             <img
                src="https://theme.hstatic.net/1000280685/1000722794/14/img_banner_5_4_product.jpg?v=489"
             />

             <a
                href="/products/ghe"
                class="bg-inherit text-transparent py-1 px-16 absolute bottom-10"
                >2</a
             >
          </div>
          <div class="relative">
             <img
                src="https://theme.hstatic.net/1000280685/1000722794/14/img_banner_5_3_product.jpg?v=489"
             />
             <img
                src="https://theme.hstatic.net/1000280685/1000722794/14/img_banner_5_5_product.jpg?v=489"
             />
             <a
                href="/products/ban"
                class="bg-inherit text-transparent py-1 px-16 absolute bottom-10 -left-24"
                >2</a
             >
          </div>
       </div>
    </div>
    <div class="container mx-auto">
       <div class="bg-white">
          <div
             class="max-w-2xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8"
          >
             <h2 class="text-2xl font-extrabold tracking-tight text-gray-500">
                Sản phẩm bán chạy
             </h2>

             <div
                class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
             >
                <div class="group relative">
                   <div
                      class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none"
                   >
                      <img
                         src="https://product.hstatic.net/1000280685/product/1_6e483b11ff55442c88236e9d65b765d4_large.png"
                         alt="Front of men&#039;s Basic Tee in black."
                         class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                      <svg
                         xmlns="http://www.w3.org/2000/svg"
                         class="h-6 w-6 absolute opacity-0 right-4 transition ease-in-out delay-150 top-[25%] z-50 group-hover:opacity-100 text-black"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                      >
                         <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                         />
                         <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                         />
                      </svg>
                      <svg
                         xmlns="http://www.w3.org/2000/svg"
                         class="h-6 w-6 absolute opacity-0 right-4 transition ease-in-out delay-250 top-1/3 z-50 group-hover:opacity-100 text-black"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                      >
                         <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                         />
                      </svg>
                   </div>
                   <div class="mt-4 flex justify-between">
                      <div>
                         <h3 class="text-sm text-gray-700">
                            <a href="#">
                               <span aria-hidden="true" class="absolute inset-0"></span>
                               Basic Tee
                            </a>
                         </h3>
                         <p class="mt-1 text-sm text-gray-500">Black</p>
                      </div>
                      <p class="text-sm font-medium text-gray-900">$35</p>
                   </div>
                </div>
                <div class="group relative">
                   <div
                      class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none"
                   >
                      <img
                         src="https://product.hstatic.net/1000280685/product/1_6e483b11ff55442c88236e9d65b765d4_large.png"
                         alt="Front of men&#039;s Basic Tee in black."
                         class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                      <svg
                         xmlns="http://www.w3.org/2000/svg"
                         class="h-6 w-6 absolute opacity-0 right-4 transition ease-in-out delay-150 top-[25%] z-50 group-hover:opacity-100 text-black"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                      >
                         <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                         />
                         <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                         />
                      </svg>
                      <svg
                         xmlns="http://www.w3.org/2000/svg"
                         class="h-6 w-6 absolute opacity-0 right-4 transition ease-in-out delay-250 top-1/3 z-50 group-hover:opacity-100 text-black"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                      >
                         <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                         />
                      </svg>
                   </div>
                   <div class="mt-4 flex justify-between">
                      <div>
                         <h3 class="text-sm text-gray-700">
                            <a href="#">
                               <span aria-hidden="true" class="absolute inset-0"></span>
                               Basic Tee
                            </a>
                         </h3>
                         <p class="mt-1 text-sm text-gray-500">Black</p>
                      </div>
                      <p class="text-sm font-medium text-gray-900">$35</p>
                   </div>
                </div>
                <div class="group relative">
                   <div
                      class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none"
                   >
                      <img
                         src="https://product.hstatic.net/1000280685/product/1_6e483b11ff55442c88236e9d65b765d4_large.png"
                         alt="Front of men&#039;s Basic Tee in black."
                         class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                      <svg
                         xmlns="http://www.w3.org/2000/svg"
                         class="h-6 w-6 absolute opacity-0 right-4 transition ease-in-out delay-150 top-[25%] z-50 group-hover:opacity-100 text-black"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                      >
                         <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                         />
                         <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                         />
                      </svg>
                      <svg
                         xmlns="http://www.w3.org/2000/svg"
                         class="h-6 w-6 absolute opacity-0 right-4 transition ease-in-out delay-250 top-1/3 z-50 group-hover:opacity-100 text-black"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                      >
                         <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                         />
                      </svg>
                   </div>
                   <div class="mt-4 flex justify-between">
                      <div>
                         <h3 class="text-sm text-gray-700">
                            <a href="#">
                               <span aria-hidden="true" class="absolute inset-0"></span>
                               Basic Tee
                            </a>
                         </h3>
                         <p class="mt-1 text-sm text-gray-500">Black</p>
                      </div>
                      <p class="text-sm font-medium text-gray-900">$35</p>
                   </div>
                </div>
                <div class="group relative">
                   <div
                      class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none"
                   >
                      <img
                         src="https://product.hstatic.net/1000280685/product/1_6e483b11ff55442c88236e9d65b765d4_large.png"
                         alt="Front of men&#039;s Basic Tee in black."
                         class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                      <svg
                         xmlns="http://www.w3.org/2000/svg"
                         class="h-6 w-6 absolute opacity-0 right-4 transition ease-in-out delay-150 top-[25%] z-50 group-hover:opacity-100 text-black"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                      >
                         <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                         />
                         <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                         />
                      </svg>
                      <svg
                         xmlns="http://www.w3.org/2000/svg"
                         class="h-6 w-6 absolute opacity-0 right-4 transition ease-in-out delay-250 top-1/3 z-50 group-hover:opacity-100 text-black"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                      >
                         <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                         />
                      </svg>
                   </div>
                   <div class="mt-4 flex justify-between">
                      <div>
                         <h3 class="text-sm text-gray-700">
                            <a href="#">
                               <span aria-hidden="true" class="absolute inset-0"></span>
                               Basic Tee
                            </a>
                         </h3>
                         <p class="mt-1 text-sm text-gray-500">Black</p>
                      </div>
                      <p class="text-sm font-medium text-gray-900">$35</p>
                   </div>
                </div>
                <div class="group relative">
                   <div
                      class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none"
                   >
                      <img
                         src="https://product.hstatic.net/1000280685/product/1_6e483b11ff55442c88236e9d65b765d4_large.png"
                         alt="Front of men&#039;s Basic Tee in black."
                         class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                      <svg
                         xmlns="http://www.w3.org/2000/svg"
                         class="h-6 w-6 absolute opacity-0 right-4 transition ease-in-out delay-150 top-[25%] z-50 group-hover:opacity-100 text-black"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                      >
                         <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                         />
                         <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                         />
                      </svg>
                      <svg
                         xmlns="http://www.w3.org/2000/svg"
                         class="h-6 w-6 absolute opacity-0 right-4 transition ease-in-out delay-250 top-1/3 z-50 group-hover:opacity-100 text-black"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                      >
                         <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                         />
                      </svg>
                   </div>
                   <div class="mt-4 flex justify-between">
                      <div>
                         <h3 class="text-sm text-gray-700">
                            <a href="#">
                               <span aria-hidden="true" class="absolute inset-0"></span>
                               Basic Tee
                            </a>
                         </h3>
                         <p class="mt-1 text-sm text-gray-500">Black</p>
                      </div>
                      <p class="text-sm font-medium text-gray-900">$35</p>
                   </div>
                </div>
                <div class="group relative">
                   <div
                      class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none"
                   >
                      <img
                         src="https://product.hstatic.net/1000280685/product/1_6e483b11ff55442c88236e9d65b765d4_large.png"
                         alt="Front of men&#039;s Basic Tee in black."
                         class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                      <svg
                         xmlns="http://www.w3.org/2000/svg"
                         class="h-6 w-6 absolute opacity-0 right-4 transition ease-in-out delay-150 top-[25%] z-50 group-hover:opacity-100 text-black"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                      >
                         <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                         />
                         <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                         />
                      </svg>
                      <svg
                         xmlns="http://www.w3.org/2000/svg"
                         class="h-6 w-6 absolute opacity-0 right-4 transition ease-in-out delay-250 top-1/3 z-50 group-hover:opacity-100 text-black"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                      >
                         <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                         />
                      </svg>
                   </div>
                   <div class="mt-4 flex justify-between">
                      <div>
                         <h3 class="text-sm text-gray-700">
                            <a href="#">
                               <span aria-hidden="true" class="absolute inset-0"></span>
                               Basic Tee
                            </a>
                         </h3>
                         <p class="mt-1 text-sm text-gray-500">Black</p>
                      </div>
                      <p class="text-sm font-medium text-gray-900">$35</p>
                   </div>
                </div>
                <div class="group relative">
                   <div
                      class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none"
                   >
                      <img
                         src="https://product.hstatic.net/1000280685/product/1_6e483b11ff55442c88236e9d65b765d4_large.png"
                         alt="Front of men&#039;s Basic Tee in black."
                         class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                      <svg
                         xmlns="http://www.w3.org/2000/svg"
                         class="h-6 w-6 absolute opacity-0 right-4 transition ease-in-out delay-150 top-[25%] z-50 group-hover:opacity-100 text-black"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                      >
                         <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                         />
                         <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                         />
                      </svg>
                      <svg
                         xmlns="http://www.w3.org/2000/svg"
                         class="h-6 w-6 absolute opacity-0 right-4 transition ease-in-out delay-250 top-1/3 z-50 group-hover:opacity-100 text-black"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                      >
                         <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                         />
                      </svg>
                   </div>
                   <div class="mt-4 flex justify-between">
                      <div>
                         <h3 class="text-sm text-gray-700">
                            <a href="#">
                               <span aria-hidden="true" class="absolute inset-0"></span>
                               Basic Tee
                            </a>
                         </h3>
                         <p class="mt-1 text-sm text-gray-500">Black</p>
                      </div>
                      <p class="text-sm font-medium text-gray-900">$35</p>
                   </div>
                </div>
                <div class="group relative">
                   <div
                      class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none"
                   >
                      <img
                         src="https://product.hstatic.net/1000280685/product/1_6e483b11ff55442c88236e9d65b765d4_large.png"
                         alt="Front of men&#039;s Basic Tee in black."
                         class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                      <svg
                         xmlns="http://www.w3.org/2000/svg"
                         class="h-6 w-6 absolute opacity-0 right-4 transition ease-in-out delay-150 top-[25%] z-50 group-hover:opacity-100 text-black"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                      >
                         <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                         />
                         <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                         />
                      </svg>
                      <svg
                         xmlns="http://www.w3.org/2000/svg"
                         class="h-6 w-6 absolute opacity-0 right-4 transition ease-in-out delay-250 top-1/3 z-50 group-hover:opacity-100 text-black"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                      >
                         <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                         />
                      </svg>
                   </div>
                   <div class="mt-4 flex justify-between">
                      <div>
                         <h3 class="text-sm text-gray-700">
                            <a href="#">
                               <span aria-hidden="true" class="absolute inset-0"></span>
                               Basic Tee
                            </a>
                         </h3>
                         <p class="mt-1 text-sm text-gray-500">Black</p>
                      </div>
                      <p class="text-sm font-medium text-gray-900">$35</p>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
    <div class="container mx-auto">
       <div
          class="max-w-2xl mx-auto py-3 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-8"
       >
          <h2 class="text-2xl font-extrabold tracking-tight text-gray-500">
             Nhóm sản phẩm
          </h2>
          <div class="group-product swiper">
             <div class="swiper-wrapper">
                <div class="swiper-slide">
                   <a href="#">
                      <img src="https://theme.hstatic.net/1000280685/1000722794/14/img_slider_1.jpg?v=458" alt="img"/>
                   </a>
                </div>
                <div class="swiper-slide">
                   <a href="#">
                      <img src="https://theme.hstatic.net/1000280685/1000722794/14/img_slider_1.jpg?v=458" alt="img"/>
                   </a>
                </div>
                <div class="swiper-slide">
                   <a href="#">
                      <img src="https://theme.hstatic.net/1000280685/1000722794/14/img_slider_1.jpg?v=458" alt="img"/>
                   </a>
                </div>
                <div class="swiper-slide">
                   <a href="#">
                      <img src="https://theme.hstatic.net/1000280685/1000722794/14/img_slider_1.jpg?v=458" alt="img"/>
                   </a>
                </div>
             </div>
             <div class="swiper-pagination"></div>
          </div>
       </div>
    </div>
       </main>`;
    },
};
export default Products;