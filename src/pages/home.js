// eslint-disable-next-line import/no-unresolved
import Swiper from "swiper/bundle";
import { getAllProduct, getProduct } from "../api/products";
// import styles bundle
// eslint-disable-next-line import/no-unresolved
import "swiper/css/bundle";
import Banner from "../components/banner";
import Product from "../components/product";
import { limitBlog } from "../api/blogs";
import Popup from "../components/popup";

const HomePage = {
    async render() {
        const { data } = await getAllProduct();
        const { data: item } = await getProduct("Vdw6m91");
        const { data: blogItem } = await limitBlog(1, 3);
        document.title = "Trang chủ";
        return /* html */ `<main>
        ${Banner.render()}
        <div class="container mx-auto">
           <div class="mt-4">
              <div class="bg-fixed bg-center bg-cover bg-no-repeat" style="
                    background-image: linear-gradient(
                          113deg,
                          rgba(237, 145, 100, 0.8) 59%,
                          rgba(169, 81, 47, 1) 100%
                       ),
                       url(https://res.cloudinary.com/dhfndew6y/image/upload/v1642922404/js-nang-cao/mountain-g4a441ef95_1280_tg5r0d.png);
                 ">
                 <div class="grid grid-rows-2 grid-cols-4">
                    <div class="row-span-2 relative col-span-3">
                       <img class="absolute pt-10"
                          src="https://res.cloudinary.com/dhfndew6y/image/upload/v1642922403/js-nang-cao/Fear-of-God-Heavy-Canvas-Work-Jacket-Rust-removebg-preview_ytp0n5.png"
                          alt="" />
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
                                <select class="mt-1 h-10 bg-transparent focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-white border">
                                 ${item.options[1].value.map((size) => `<option class="text-black bg-[${size}]">${size}</option>`)}</select>
                             </div>

                             <div class="col-span-6 sm:col-span-3">
                                <label for="last-name" class="block text-sm font-medium">Color</label>
                                 <select class="mt-1 h-10 bg-transparent focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-white border">
                                 ${item.options[0].value.map((color) => `<option class="text-black bg-[${color}]">${color}</option>`)}</select>
                             </div>
                          </div>
                          <button data-id="${item.id}" class="add-to-cart w-full p-3 bg-white text-black mt-3">
                             Mua ngay
                          </button>
                       </div>
                    </div>
                    <div class="row-span-3 pt-2 pr-2">
                       <img
                          src="https://assets.vogue.com/photos/5b8fa78aaf28261cba2e4bdb/master/w_1920,c_limit/00022-FEAR-OF-GOD-VOGUE-SS19-PR.jpg"
                          alt="" />
                    </div>
                    <div class="col-span-3 bg-[#f7f7f7] flex justify-evenly items-center">
                       <div class="content text-center ml-[60px]">
                          <h2 class="text-4xl uppercase space-x-2 font-bold text-black">
                             fear of god
                          </h2>
                          <h3 class="uppercase">sixth collection</h3>
                          <h4>2018 - 2019</h4>
                       </div>
                       <img class="max-w-full"
                          src="https://res.cloudinary.com/dhfndew6y/image/upload/c_fill,h_292,x_129/v1645016829/233018-13949-fear-of-god-jacket-4_330x469_crop_center_2x_fmgsr4.jpg"
                          alt="" />
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <div class="container mx-auto mt-10">
           <div class="abouts flex ">
              <div class="abouts-content mx-auto w-1/2 ml-[49px]">
                 <h1 class="text-4xl font-bold text-zinc-600 font-mono">Fear of god</h1>
                 <p>
                 Fear of God là một thuơng hiệu thời trang đường phố do anh Jerry Lorenzo sáng lập năm 2013. Thương hiệu được định vị ở tầm cao của làng streetwear, với mức giá khởi điểm từ khoảng 100 đô-la Mỹ/sản phẩm. Các thiết kế được dựa trên văn hóa thể thao Mỹ, kết hợp cùng tính chất may đo thủ công thường thấy ở phân khúc thời trang cao cấp.

                 Fear of God là một thuơng hiệu thời trang hoàn toàn độc lập. Dù không có nhà đầu tư rót vốn, doanh số của thương hiệu vẫn nhân đôi mỗi năm, tính từ 2013 đến 2019.
                 
                 Cái tên thương hiệu Fear of God (tạm dịch: kính sợ đức chúa trời), đến từ nguồn gốc tín ngưỡng của gia đình nhà sáng lập Jerry Lorenzo, cũng như hình ảnh về Đức chúa trong quyển sách My Utmost for His Highest của tác giả Oswald Chambers.
                 </p>
                 <a href="/#/blogs/NFLDhpk">Đọc thêm</a>
              </div>
              <div class="about-image">
                 <img class="w-[60%] ml-auto" src="https://cdn.accentuate.io/70677266493/1608649750643/FGA_announcement_UPDATE.jpg?v=1640297646480" alt="" />
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
                    ${data.map((product) => `<div class="group relative swiper-slide">
                    <div
                       class="w-full min-h-[483px] bg-gray-200 aspect-w-1 aspect-h-1  overflow-hidden lg:h-80 lg:aspect-none">
                       <div class="relative w-full h-full">
                          <a href="/#/details/${product.id}">
                             <img
                                src="${product.featured_image}"
                                alt="Front of men&#039;s Basic Tee in black."
                                class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full" />
                          </a>
                          <a href="/#/details/${product.id}">
                             <img
                                src="${product.sub_image}"
                                alt="Front of men&#039;s Basic Tee in black."
                                class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full opacity-0 group-hover:opacity-100" />
                          </a></div>

                       <svg data-id="${product.id}" xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6 popup-product absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-150 top-[25%] z-50 group-hover:opacity-100 text-black"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                             d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                             d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                       </svg>
                       <svg data-id="${product.id}" xmlns="http://www.w3.org/2000/svg"
                          class="add-to-cart h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-250 top-1/3 z-50 group-hover:opacity-100 text-black"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                             d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                       </svg>
                    </div>
                    <div class="mt-4 flex justify-between">
                       <div>
                          <h3 class="text-sm text-gray-700">
                             <a href="/#/details/${product.id}">
                                <span aria-hidden="true" class="absolute inset-0"></span>
                                ${product.title}
                             </a>
                          </h3>
                          <p class="mt-1 text-sm text-gray-500">Black</p>
                       </div>
                       <p class="text-sm font-medium text-gray-900">${(+product.sale_off !== 0) ? (+product.price * (+product.sale_off / 100)).toLocaleString("vi", { style: "currency", currency: "VND" }) : (+product.price).toLocaleString("vi", { style: "currency", currency: "VND" })}</p>
                    </div>
                 </div>`).join("")}

                 </div>
              </div>
           </div>
        </div>

        <div class="container mx-auto">
           <div class="bg-gray-100">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div class="max-w-2xl mx-auto py-10 sm:py-24 lg:py-20 lg:max-w-none">
                    <div class=" lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                    ${blogItem.map((blog) => `<div class="group relative">
                    <div
                       class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                       <img src="${blog.thumbnail}"
                          alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                          class="w-full h-full object-center object-cover">
                    </div>
                    <h3 class="mt-6 text-sm text-gray-500">
                       <a href="/#/blogs/${blog.id}">
                          <span class="absolute inset-0"></span>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Aut ducimus amet excepturi adipisci reprehenderit accusamus accusantium praesentium
                       </a>
                    </h3>
                    <p class="text-base font-semibold text-gray-900">${blog.title}</p>
                    <p class="text-xs font-semibold text-gray-900">Ngày tạo: ${blog.create_at}</p>
                    <a href="/#/blogs/${blog.id}" class="text-xs font-semibold text-gray-900">Xem thêm >></a>
                 </div>`).join("")}
                       
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </main>`;
    },
    afterRender() {
        Product.afterRender();
        const activeMenu = document.querySelector("#menu");
        activeMenu.classList.toggle("text-white");
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 100) {
                activeMenu.classList.add(
                    "bg-white",
                    "shadow-lg",
                    "transition-all",
                    "text-black",
                );
            } else {
                activeMenu.classList.remove(
                    "bg-white",
                    "shadow-lg",
                    "transition-all",
                    "text-black",
                );
            }
        });
        const swiper = new Swiper(".banner", {
            spaceBetween: 30,
            loop: true,
            effect: "fade",
            autoplay: {
                delay: 5000,
            },
        });
        const productSelling = new Swiper(".productSelling", {
            slidesPerView: 1,
            spaceBetween: 10,
            breakpoints: {
                "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                "@0.75": {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                "@1.00": {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                "@1.50": {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            },
        });
        Popup.afterRender();
        return { swiper, productSelling };
    },
};
export default HomePage;