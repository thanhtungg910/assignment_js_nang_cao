const productList = [
    {
        id: 1,
        image: "https://product.hstatic.net/1000280685/product/1_6e483b11ff55442c88236e9d65b765d4_large.png",
        subimage: "https://product.hstatic.net/1000280685/product/chin_s_den_a10e71f4aa32494385259566831d877b_large.png",
        title: "Basic Tee",
        color: "Black",
        price: "35",
    },
    {
        id: 2,
        image: "https://product.hstatic.net/1000280685/product/1_6e483b11ff55442c88236e9d65b765d4_large.png",
        subimage: "https://product.hstatic.net/1000280685/product/chin_s_den_a10e71f4aa32494385259566831d877b_large.png",
        title: "Basic Tee",
        color: "Black",
        price: "35",
    },
    {
        id: 3,
        image: "https://product.hstatic.net/1000280685/product/1_6e483b11ff55442c88236e9d65b765d4_large.png",
        subimage: "https://product.hstatic.net/1000280685/product/chin_s_den_a10e71f4aa32494385259566831d877b_large.png",
        title: "Basic Tee",
        color: "Black",
        price: "35",
    },
    {
        id: 4,
        image: "https://product.hstatic.net/1000280685/product/1_6e483b11ff55442c88236e9d65b765d4_large.png",
        subimage: "https://product.hstatic.net/1000280685/product/chin_s_den_a10e71f4aa32494385259566831d877b_large.png",
        title: "Basic Tee",
        color: "Black",
        price: "35",
    },
    {
        id: 5,
        image: "https://product.hstatic.net/1000280685/product/1_6e483b11ff55442c88236e9d65b765d4_large.png",
        subimage: "https://product.hstatic.net/1000280685/product/chin_s_den_a10e71f4aa32494385259566831d877b_large.png",
        title: "Basic Tee",
        color: "Black",
        price: "35",
    },
    {
        id: 6,
        image: "https://product.hstatic.net/1000280685/product/1_6e483b11ff55442c88236e9d65b765d4_large.png",
        subimage: "https://product.hstatic.net/1000280685/product/chin_s_den_a10e71f4aa32494385259566831d877b_large.png",
        title: "Basic Tee",
        color: "Black",
        price: "35",
    },
    {
        id: 7,
        image: "https://product.hstatic.net/1000280685/product/1_6e483b11ff55442c88236e9d65b765d4_large.png",
        subimage: "https://product.hstatic.net/1000280685/product/chin_s_den_a10e71f4aa32494385259566831d877b_large.png",
        title: "Basic Tee",
        color: "Black",
        price: "35",
    },
    {
        id: 8,
        image: "https://product.hstatic.net/1000280685/product/1_6e483b11ff55442c88236e9d65b765d4_large.png",
        subimage: "https://product.hstatic.net/1000280685/product/chin_s_den_a10e71f4aa32494385259566831d877b_large.png",
        title: "Basic Tee",
        color: "Black",
        price: "35",
    },
];
const Product = {
    render() {
        const result = productList.map(({
            id,
            image,
            subimage,
            title,
            color,
            price,
        }) => /* html */`<div class="group relative">
        <div
           class="w-full min-h-[483px] bg-gray-200 aspect-w-1 aspect-h-1  overflow-hidden lg:h-80 lg:aspect-none">
           <div class="relative w-full h-full">
              <img
                 src="${image}"
                 alt="Front of men&#039;s Basic Tee in black."
                 class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full" />
              <img
                 src="${subimage}"
                 alt="Front of men&#039;s Basic Tee in black."
                 class="w-full h-full absolute object-center object-cover lg:w-full lg:h-full opacity-0 group-hover:opacity-100" />
           </div>
  
           <svg xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-150 top-[25%] z-10 group-hover:opacity-100 text-black"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                 d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                 d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
           </svg>
           <svg xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 absolute opacity-0 right-4 cursor-pointer transition ease-in-out delay-250 top-1/3 z-10 group-hover:opacity-100 text-black"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                 d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
           </svg>
        </div>
        <div class="mt-4 flex justify-between">
           <div>
              <h3 class="text-sm text-gray-700">
                 <a href="/detail/${id}">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${title}
                 </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">${color}</p>
           </div>
           <p class="text-sm font-medium text-gray-900">${price}</p>
        </div>
     </div>`).join(" ");
        return result;
    },
};
export default Product;