import Banner from "../components/banner";

const HomePage = {
    render() {
        document.title = "Trang chủ";
        return /* html */ `
        <main>
        ${Banner.render()}
        <div class="container mx-auto">
           <div class="mt-4">
              <div class="bg-fixed bg-center bg-cover bg-no-repeat" style="
                    background-image: linear-gradient(
                          113deg,
                          rgba(237, 145, 100, 0.8) 59%,
                          rgba(169, 81, 47, 1) 100%
                       ),
                       url(./src/images/mountain-g4a441ef95_1280.png);
                 ">
                 <div class="grid grid-rows-2 grid-cols-4">
                    <div class="row-span-2 relative col-span-3">
                       <img class="absolute pt-10"
                          src="./src/images/Fear-of-God-Heavy-Canvas-Work-Jacket-Rust-removebg-preview.png" alt="" />
                       <div class="add float-right w-1/2 p-5 h-1/4 text-white">
                          <h3 class="">1.000.000</h3>
                          <h1 class="text-3xl uppercase font-extrabold w-72">
                             Fear of God Heavy Canvas Work Jacket
                          </h1>
                          <p class="">
                             Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                             Aperiam, doloribus dolor inventore voluptas iure ab
                             similique enim labore quod ipsam, sunt corporis fuga, eius
                             hic eos nulla quisquam harum sit?
                          </p>
                          <div class="grid grid-cols-6 gap-6">
                             <div class="col-span-6 sm:col-span-3">
                                <label for="first-name" class="block text-sm font-medium">Size</label>
                                <select
                                   class="mt-1 h-10 bg-transparent focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-white border">
                                   <option>xl</option>
                                </select>
                             </div>

                             <div class="col-span-6 sm:col-span-3">
                                <label for="last-name" class="block text-sm font-medium">Color</label>
                                <select
                                   class="mt-1 h-10 bg-transparent focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-white border">
                                   <option>xl</option>
                                </select>
                             </div>
                          </div>
                          <button class="w-full p-3 bg-white text-black mt-3">
                             Mua ngay
                          </button>
                       </div>
                    </div>
                    <div class="row-span-3 pt-2 pr-2">
                       <img
                          src="https://assets.vogue.com/photos/5b8fa78aaf28261cba2e4bdb/master/w_1920,c_limit/00022-FEAR-OF-GOD-VOGUE-SS19-PR.jpg"
                          alt="" />
                    </div>
                    <div class="col-span-3 bg-white flex justify-evenly items-center">
                       <div class="content text-center ml-[60px]">
                          <h2 class="text-4xl uppercase space-x-2 font-bold text-black">
                             fear of god
                          </h2>
                          <h3 class="uppercase">sixth collection</h3>
                          <h4>2018 - 2019</h4>
                       </div>
                       <img class="max-w-full"
                          src="https://images.stockx.com/images/Fear-of-God-Heavy-Canvas-Work-Jacket-Rust.jpg?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=1&trim=color&updated_at=1623267464&fm=webp"
                          alt="" />
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <div class="container mx-auto mt-10">
           <div class="abouts flex gap-3">
              <div class="abouts-content ml-[49px] basis-1/2">
                 <h1 class="text-4xl font-bold text-zinc-600">Abouts</h1>
                 <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                    tempore, accusamus similique nisi laudantium quisquam. Modi
                    corporis nesciunt illum impedit voluptatibus inventore commodi
                    dignissimos sed eius qui, dicta, pariatur dolor! Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Ullam tempore, accusamus
                    similique nisi laudantium quisquam. Modi corporis nesciunt illum
                    impedit voluptatibus inventore commodi dignissimos sed eius qui,
                    dicta, pariatur dolor!
                 </p>
              </div>
              <div class="about-image">
                 <img src="https://theme.hstatic.net/1000280685/1000722794/14/img_Aboutus_title.jpg?v=458" alt="" />
              </div>
           </div>
        </div>
        <div class="container mx-auto">
           <div class="bg-white p-6">
              <div class="swiper productSelling max-w-4xl mx-auto py-16 px-5 sm:py-20 sm:px-6 lg:max-w-full lg:px-4 ">
                 <h2 class="text-[32px]   tracking-tight  ">
                    Sản phẩm bán chạy
                 </h2>
                 <div
                    class="swiper-wrapper mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">

                    <div class="group relative swiper-slide">
                       <div
                          class="w-full min-h-[483px] bg-gray-200 aspect-w-1 aspect-h-1  overflow-hidden lg:h-80 lg:aspect-none">
                          <div class="relative w-full h-full">
                             <img
                                src="https://product.hstatic.net/1000280685/product/1_6e483b11ff55442c88236e9d65b765d4_large.png"
                                alt="Front of men&#039;s Basic Tee in black."
                                class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full" />
                             <img
                                src="https://product.hstatic.net/1000280685/product/chin_s_den_a10e71f4aa32494385259566831d877b_large.png"
                                alt="Front of men&#039;s Basic Tee in black."
                                class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full opacity-0 group-hover:opacity-100" />
                          </div>

                          <svg xmlns="http://www.w3.org/2000/svg"
                             class="h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-150 top-[25%] z-50 group-hover:opacity-100 text-black"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg"
                             class="h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-250 top-1/3 z-50 group-hover:opacity-100 text-black"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
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

                    <div class="group relative swiper-slide">
                       <div
                          class="w-full min-h-[483px] bg-gray-200 aspect-w-1 aspect-h-1  overflow-hidden lg:h-80 lg:aspect-none">
                          <div class="relative w-full h-full">
                             <img
                                src="https://product.hstatic.net/1000280685/product/1_6e483b11ff55442c88236e9d65b765d4_large.png"
                                alt="Front of men&#039;s Basic Tee in black."
                                class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full" />
                             <img
                                src="https://product.hstatic.net/1000280685/product/chin_s_den_a10e71f4aa32494385259566831d877b_large.png"
                                alt="Front of men&#039;s Basic Tee in black."
                                class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full opacity-0 group-hover:opacity-100" />
                          </div>

                          <svg xmlns="http://www.w3.org/2000/svg"
                             class="h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-150 top-[25%] z-50 group-hover:opacity-100 text-black"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg"
                             class="h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-250 top-1/3 z-50 group-hover:opacity-100 text-black"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
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
                    <div class="group relative swiper-slide">
                       <div
                          class="w-full min-h-[483px] bg-gray-200 aspect-w-1 aspect-h-1  overflow-hidden lg:h-80 lg:aspect-none">
                          <div class="relative w-full h-full">
                             <img
                                src="https://product.hstatic.net/1000280685/product/1_6e483b11ff55442c88236e9d65b765d4_large.png"
                                alt="Front of men&#039;s Basic Tee in black."
                                class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full" />
                             <img
                                src="https://product.hstatic.net/1000280685/product/chin_s_den_a10e71f4aa32494385259566831d877b_large.png"
                                alt="Front of men&#039;s Basic Tee in black."
                                class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full opacity-0 group-hover:opacity-100" />
                          </div>

                          <svg xmlns="http://www.w3.org/2000/svg"
                             class="h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-150 top-[25%] z-50 group-hover:opacity-100 text-black"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg"
                             class="h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-250 top-1/3 z-50 group-hover:opacity-100 text-black"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
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
                    <div class="group relative swiper-slide">
                       <div
                          class="w-full min-h-[483px] bg-gray-200 aspect-w-1 aspect-h-1  overflow-hidden lg:h-80 lg:aspect-none">
                          <div class="relative w-full h-full">
                             <img
                                src="https://product.hstatic.net/1000280685/product/1_6e483b11ff55442c88236e9d65b765d4_large.png"
                                alt="Front of men&#039;s Basic Tee in black."
                                class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full" />
                             <img
                                src="https://product.hstatic.net/1000280685/product/chin_s_den_a10e71f4aa32494385259566831d877b_large.png"
                                alt="Front of men&#039;s Basic Tee in black."
                                class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full opacity-0 group-hover:opacity-100" />
                          </div>

                          <svg xmlns="http://www.w3.org/2000/svg"
                             class="h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-150 top-[25%] z-50 group-hover:opacity-100 text-black"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg"
                             class="h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-250 top-1/3 z-50 group-hover:opacity-100 text-black"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
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
                    <div class="group relative swiper-slide">
                       <div
                          class="w-full min-h-[483px] bg-gray-200 aspect-w-1 aspect-h-1  overflow-hidden lg:h-80 lg:aspect-none">
                          <div class="relative w-full h-full">
                             <img
                                src="https://product.hstatic.net/1000280685/product/1_6e483b11ff55442c88236e9d65b765d4_large.png"
                                alt="Front of men&#039;s Basic Tee in black."
                                class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full" />
                             <img
                                src="https://product.hstatic.net/1000280685/product/chin_s_den_a10e71f4aa32494385259566831d877b_large.png"
                                alt="Front of men&#039;s Basic Tee in black."
                                class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full opacity-0 group-hover:opacity-100" />
                          </div>

                          <svg xmlns="http://www.w3.org/2000/svg"
                             class="h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-150 top-[25%] z-50 group-hover:opacity-100 text-black"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg"
                             class="h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-250 top-1/3 z-50 group-hover:opacity-100 text-black"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
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
                    <div class="group relative swiper-slide">
                       <div
                          class="w-full min-h-[483px] bg-gray-200 aspect-w-1 aspect-h-1  overflow-hidden lg:h-80 lg:aspect-none">
                          <div class="relative w-full h-full">
                             <img
                                src="https://product.hstatic.net/1000280685/product/1_6e483b11ff55442c88236e9d65b765d4_large.png"
                                alt="Front of men&#039;s Basic Tee in black."
                                class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full" />
                             <img
                                src="https://product.hstatic.net/1000280685/product/chin_s_den_a10e71f4aa32494385259566831d877b_large.png"
                                alt="Front of men&#039;s Basic Tee in black."
                                class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full opacity-0 group-hover:opacity-100" />
                          </div>

                          <svg xmlns="http://www.w3.org/2000/svg"
                             class="h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-150 top-[25%] z-50 group-hover:opacity-100 text-black"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg"
                             class="h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-250 top-1/3 z-50 group-hover:opacity-100 text-black"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
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
                    <div class="group relative swiper-slide">
                       <div
                          class="w-full min-h-[483px] bg-gray-200 aspect-w-1 aspect-h-1  overflow-hidden lg:h-80 lg:aspect-none">
                          <div class="relative w-full h-full">
                             <img
                                src="https://product.hstatic.net/1000280685/product/1_6e483b11ff55442c88236e9d65b765d4_large.png"
                                alt="Front of men&#039;s Basic Tee in black."
                                class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full" />
                             <img
                                src="https://product.hstatic.net/1000280685/product/chin_s_den_a10e71f4aa32494385259566831d877b_large.png"
                                alt="Front of men&#039;s Basic Tee in black."
                                class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full opacity-0 group-hover:opacity-100" />
                          </div>

                          <svg xmlns="http://www.w3.org/2000/svg"
                             class="h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-150 top-[25%] z-50 group-hover:opacity-100 text-black"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg"
                             class="h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-250 top-1/3 z-50 group-hover:opacity-100 text-black"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
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
                    <div class="group relative swiper-slide">
                       <div
                          class="w-full min-h-[483px] bg-gray-200 aspect-w-1 aspect-h-1  overflow-hidden lg:h-80 lg:aspect-none">
                          <div class="relative w-full h-full">
                             <img
                                src="https://product.hstatic.net/1000280685/product/1_6e483b11ff55442c88236e9d65b765d4_large.png"
                                alt="Front of men&#039;s Basic Tee in black."
                                class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full" />
                             <img
                                src="https://product.hstatic.net/1000280685/product/chin_s_den_a10e71f4aa32494385259566831d877b_large.png"
                                alt="Front of men&#039;s Basic Tee in black."
                                class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full opacity-0 group-hover:opacity-100" />
                          </div>

                          <svg xmlns="http://www.w3.org/2000/svg"
                             class="h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-150 top-[25%] z-50 group-hover:opacity-100 text-black"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg"
                             class="h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-250 top-1/3 z-50 group-hover:opacity-100 text-black"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
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
           <div class="bg-gray-100">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div class="max-w-2xl mx-auto py-10 sm:py-24 lg:py-20 lg:max-w-none">
                    <div class="  lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">

                       <div class="group relative">
                          <div
                             class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                             <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
                                alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                                class="w-full h-full object-center object-cover">
                          </div>
                          <h3 class="mt-6 text-sm text-gray-500">
                             <a href="#">
                                <span class="absolute inset-0"></span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Aut ducimus amet excepturi adipisci reprehenderit accusamus accusantium praesentium
                             </a>
                          </h3>
                          <p class="text-base font-semibold text-gray-900">Work from home accessories</p>
                          <p class="text-xs font-semibold text-gray-900">Ngày tạo: 20 - 01 - 2022</p>
                          <a href="#" class="text-xs font-semibold text-gray-900">Xem thêm >></a>
                       </div>

                       <div class="group relative">
                          <div
                             class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                             <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg"
                                alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                                class="w-full h-full object-center object-cover">
                          </div>
                          <h3 class="mt-6 text-sm text-gray-500">
                             <a href="#">
                                <span class="absolute inset-0"></span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Aut ducimus amet excepturi adipisci reprehenderit accusamus accusantium praesentium
                             </a>
                          </h3>
                          <p class="text-base font-semibold text-gray-900">Work from home accessories</p>
                          <p class="text-xs font-semibold text-gray-900">Ngày tạo: 20 - 01 - 2022</p>
                          <a href="#" class="text-xs font-semibold text-gray-900">Xem thêm >></a>
                       </div>

                       <div class="group relative">
                          <div
                             class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                             <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg"
                                alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                                class="w-full h-full object-center object-cover">
                          </div>
                          <h3 class="mt-6 text-sm text-gray-500">
                             <a href="#">
                                <span class="absolute inset-0"></span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Aut ducimus amet excepturi adipisci reprehenderit accusamus accusantium praesentium
                             </a>
                          </h3>
                          <p class="text-base font-semibold text-gray-900">Work from home accessories</p>
                          <p class="text-xs font-semibold text-gray-900">Ngày tạo: 20 - 01 - 2022</p>
                          <a href="#" class="text-xs font-semibold text-gray-900">Xem thêm >></a>
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