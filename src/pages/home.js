import Banner from "../components/banner";

const HomePage = {
    render() {
        document.title = "Trang chủ";
        return /* html */ `
         <main>
               ${Banner.render()}

               <div class="container mx-auto">
               <div class="px-5">
                     <h2 class="text-3xl font-bold py-4">Mới nhất</h2>
                     <div
                        class="bg-fixed bg-center bg-cover bg-no-repeat"
                        style="
                           background-image: linear-gradient(
                                 113deg,
                                 rgba(237, 145, 100, .8) 59%,
                                 rgba(169, 81, 47, 1) 100%
                              ),
                              url(./src/images/mountain-g4a441ef95_1280.png);
                        "
                     >
                        <div class="grid grid-rows-2 grid-cols-4">
                           <div class="row-span-2 relative col-span-3">
                              <img
                                 class="absolute pt-10"
                                 src="./src/images/Fear-of-God-Heavy-Canvas-Work-Jacket-Rust-removebg-preview.png"
                                 alt=""
                              />
                              <div class="add float-right w-1/2 p-5 h-1/4 text-white">
                                 <h3 class="">1.000.000</h3>
                                 <h1 class="text-3xl uppercase font-extrabold w-72">
                                    Fear of God Heavy Canvas Work Jacket
                                 </h1>
                                 <p class="">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Aperiam, doloribus dolor inventore voluptas iure ab similique
                                    enim labore quod ipsam, sunt corporis fuga, eius hic eos nulla
                                    quisquam harum sit?
                                 </p>
                                 <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 sm:col-span-3">
                                       <label
                                          for="first-name"
                                          class="block text-sm font-medium text-gray-700"
                                          >Size</label
                                       >
                                       <select class="mt-1 h-10 bg-transparent focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-white border  "
                                       > 
                                       <option>
                                          xl
                                       </option>
                                       </select>
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                       <label
                                          for="last-name"
                                          class="block text-sm font-medium text-gray-700"
                                          >Color</label
                                       >
                                       <select class="mt-1 h-10 bg-transparent focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-white border  "
                                       > 
                                       <option>
                                          xl
                                       </option>
                                       </select>
                                    </div>
                                 </div>
                                 <button class="w-full p-3 bg-white text-black mt-3">
                                    Mua ngay
                                 </button>
                              </div>
                           </div>
                           <div class="row-span-3">
                              <img
                                 src="https://assets.vogue.com/photos/5b8fa78aaf28261cba2e4bdb/master/w_1920,c_limit/00022-FEAR-OF-GOD-VOGUE-SS19-PR.jpg"
                                 alt=""
                              />
                           </div>
                           <div class="col-span-3 bg-white flex justify-evenly items-center">
                              <div class="content text-center ml-[60px]">
                                 <h2 class="text-4xl uppercase space-x-2 font-bold text-black">
                                    fear of god
                                 </h2>
                                 <h3 class="uppercase">sixth collection</h3>
                                 <h4>2018 - 2019</h4>
                              </div>
                              <img
                                 class="max-w-full"
                                 src="https://images.stockx.com/images/Fear-of-God-Heavy-Canvas-Work-Jacket-Rust.jpg?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=1&trim=color&updated_at=1623267464&fm=webp"
                                 alt=""
                              />
                           </div>
                        </div>
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