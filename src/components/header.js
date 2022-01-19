import Nav from "./partials/nav";

const Header = {
    render() {
        return /* html */ `
      <header class="relative">
            <div id="menu" class="container mx-auto fixed top-0 left-0 right-0 text-white  py-1   z-50">
            <div class="flex justify-around items-center header-top"><img
                  class="w-24 object-cover  "
                  src="https://logowik.com/content/uploads/images/fear-of-god4137.jpg"
                  alt="Logo">
               ${Nav.render()}
               <div class="header-right flex items-center gap-x-6">
                  <div class="focus-within:border-teal-500">
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
</svg>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
</svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>
               </div>
            </div>
         </div>
      </header>`;
    },
};
export default Header;