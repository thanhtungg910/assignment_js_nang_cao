const Contacts = {
    render() {
        document.title = "Liên hệ";
        return /* html */ `<div class="my-24 py-4 px-8 mx-auto lg:py-8 relative">
        <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8639810443356!2d105.74459841485445!3d21.038127785993236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1644326075105!5m2!1svi!2s"
           class="h-2/5 lg:h-full w-full lg:w-1/2 absolute inset-0 object-cover object-center xl:block hidden"
           style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        <div class="xl:mx-auto xl:container relative">
           <div class="flex flex-wrap xl:mx-auto xl:container">
              <div class="w-full relative lg:w-1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0">
                 <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8639810443356!2d105.74459841485445!3d21.038127785993236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1644326075105!5m2!1svi!2s"
                    class="h-full w-full xl:w-1/2 absolute inset-0 bg-cover bg-center xl:hidden" style="border:0;"
                    allowfullscreen="" loading="lazy"></iframe>
              </div>
              <div class="w-full lg:w-1/2 xl:pt-10 lg:pl-24">
                 <div class="flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4">
                    <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-indigo-700">
                       Liên hệ với chúng tôi
                    </h1>
                    <div class="w-full 2xl:w-8/12 mt-3" role="form">
                       <h2 class="text-gray-800 text-base md:text-lg leading-8 tracking-wider">Nếu có thắc mắc, vui
                          lòng gửi email cho chúng tôi theo mẫu dưới đây</h2>
                       <div class="mt-4 md:mt-8">
                          <p class="text-gray-800 text-base font-medium">Họ Tên</p>
                          <input
                             class="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800"
                             type="text" placeholder="Nguyen Van A" aria-label="enter your name input" />
                       </div>
                       <div class="mt-4 md:mt-8">
                          <p class="text-gray-800 text-base font-medium">Email </p>
                          <input
                             class="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800"
                             type="email" placeholder="example@mail.com" />
                       </div>
                       <div class="mt-4 md:mt-8">
                          <p class="text-gray-800 text-base font-medium">Nội dung</p>
                          <textarea
                             class="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 resize-none hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black xl:h-40 py-5 pl-4 text-gray-800"
                             type="text" placeholder="..." aria-label="enter your message input"></textarea>
                       </div>
                       <div class="py-5">
                          <button class="py-3 md:py-5 px-5 md:px-10 bg-gray-900 text-white 
                             hover:opacity-90 ease-in duration-150 text-sm md:text-lg tracking-wider
                              font-semibold focus:border-4 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Gửi
                          </button>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>`;
    },
    afterRender() {
        const activeMenu = document.querySelector("#menu");
        activeMenu.classList.toggle("text-black");
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
    },
};
export default Contacts;