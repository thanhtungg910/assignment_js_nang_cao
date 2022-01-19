import Banner from "../components/banner";

const HomePage = {
    render() {
        document.title = "Trang chủ";
        return /* html */ `
         <main>
               ${Banner.render()}

               <div class="container mx-auto px-5">
               <h1 class="text-3xl font-bold my-5 text-zinc-600 ml-[49px]">Danh muc san pham</h1>
               <div
                  class="grid categories grid-rows-2 grid-flow-col gap-6 justify-evenly items-center">
                  <div class="">
                     <a href="#"><img  src="https://cdn.shopify.com/s/files/1/1003/3354/products/Front_4e864a0f-d25a-4e06-97f0-d955443a7464_360x.jpg?v=1634754355" alt="img"></a>
                        <h5 class="mt-3 text-xl text-zinc-600"> <span class="uppercase">Suitting - </span>Suit</h5>
                  </div>
                  <div class="">
                     <a href="#"><img  src="https://cdn.shopify.com/s/files/1/1003/3354/products/Front_ab983f58-ae61-4509-abc8-fd462bc40e91_360x.jpg?v=1634754354" alt="img"></a>
                        <h5 class="mt-3 text-xl text-zinc-600"> <span class="uppercase">Outerwear -
                        </span>Áo khoác ngoài </h5>
                  </div>
                  <div class="">
                     <a href="#"><img  src="https://cdn.shopify.com/s/files/1/1003/3354/products/Front_bbb90343-a91c-4cc0-8a48-6b8a8a3a1a41_360x.jpg?v=1618542629" alt="img"></a>
                        <h5 class="mt-3 text-xl text-zinc-600"> <span class="uppercase">Knitwear  -
                        </span>Vải dệt kim </h5>
                  </div>
                  <div class="">
                     <a href="#"><img  src="https://cdn.shopify.com/s/files/1/1003/3354/products/Front_b2e70ebb-a95e-49a7-bdd2-8cbd7f5c5228_360x.jpg?v=1634754435" alt="img"></a>
                        <h5 class="mt-3 text-xl text-zinc-600"> <span class="uppercase">Top -
                        </span>Đồ mặc trên </h5>
                  </div>
                  <div class="">
                     <a href="#"><img  src="https://cdn.shopify.com/s/files/1/1003/3354/products/Front_6bd5df32-044d-4e3f-b291-7b2cf75da172_360x.jpg?v=1618542536" alt="img"></a>
                        <h5 class="mt-3 text-xl text-zinc-600"> <span class="uppercase">Bottoms -
                        </span>Quần </h5>
                  </div>
                  <div class="">
                     <a href="#"><img  src="https://cdn.shopify.com/s/files/1/1003/3354/products/3_49cfab17-a644-4df4-9372-64a590332ba1_360x.jpg?v=1634857184" alt="img"></a>
                        <h5 class="mt-3 text-xl text-zinc-600"> <span class="uppercase">Footerwear -
                        </span>Giày, dép </h5>
                  </div>
                  <div class="">
                     <a href="#"><img  src="https://cdn.shopify.com/s/files/1/1003/3354/products/gpTBiIKg_360x.jpg?v=1634857018" alt="img"></a>
                        <h5 class="mt-3 text-xl text-zinc-600"> <span class="uppercase">Accessory -
                        </span>Phụ kiện </h5>
                  </div>
                  <div class="">
                     <a href="#"><img  src="https://cdn.shopify.com/s/files/1/0456/8825/8724/files/FOG_7_069.jpg" alt="img"></a>
                        <h5 class="mt-3 text-xl text-zinc-600"> <span class="uppercase">Collection -
                        </span>Bộ sưu tập </h5>
                  </div>
                  </div>
            </div>

               <div class="container mx-auto mt-10">
               <div class="abouts flex gap-3">
                  <div class="abouts-content ml-[49px] basis-1/2">
                     <h1 class="text-4xl font-bold text-zinc-600">Abouts </h1>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam tempore,
                        accusamus similique nisi laudantium quisquam. Modi corporis nesciunt illum
                        impedit voluptatibus inventore commodi dignissimos sed eius qui, dicta,
                        pariatur dolor!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam tempore,
                        accusamus similique nisi laudantium quisquam. Modi corporis nesciunt illum
                        impedit voluptatibus inventore commodi dignissimos sed eius qui, dicta,
                        pariatur dolor!
   
                     </p>
                  </div>
                  <div class="about-image"> <img
                        src="https://theme.hstatic.net/1000280685/1000722794/14/img_Aboutus_title.jpg?v=458"
                        alt=""></div>
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
             </main>`;
    },
};
export default HomePage;