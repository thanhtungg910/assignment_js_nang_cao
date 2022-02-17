import { getBlog } from "../api/blogs";

const ArticlePage = {
    async render(id) {
        document.title = "Bai viet 1";
        const { data } = await getBlog(id);
        return /* html */`
        <main class="max-w-5xl mx-auto pb-10 pt-10 mt-6">
           <div class="flex flex-wrap overflow-hidden">
              <div class="w-full overflow-hidden md:w-4/6 lg:w-4/6 xl:w-4/6">
                 <div class="mr-2 md:mr-4 ml-2">
                    <div class="pb-10">
                       <!-- first post -->
                       <div>
                          <img class="article-image" src="./images/1-770x518.jpg" alt="">
                          <a href="/#/blogs" class="font-mono"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                        </svg>Back</a>
                          <h2 class="text-gray-900 font-serif text-3xl my-5 font-thin"><a href="">${data.title}</a></h2>
                          <span class="text-xs text-gray-800 font-thin block mb-5">By Page. December 02, 2019</span>
                          <div class="article-body">
                             ${data.content}
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
  
              <div class="w-full overflow-hidden md:w-2/6 lg:w-2/6 xl:w-2/6">
                 <!-- sidebar -->
                 <div class="ml-2 md:ml-4 mr-2">
                    
                    <div class="mt-20">
                       <h2 class="font-light text-xl mb-5 text-center">Search the blog</h2>
                       <div class="relative border rounded-sm overflow-hidden">
                          <form action="">
                             <input class="w-full relative p-5 font-light text-gray-900 border-0" type="text" name="s"
                                id="" placeholder="Search...">
                             <button type="submit" class="bg-transparent border-0 absolute right-0 px-5 py-5 top-2">
                                <span class="block w-5">
                                   <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                      <path
                                         d="M495 466.2L377.2 348.4c29.2-35.6 46.8-81.2 46.8-130.9C424 103.5 331.5 11 217.5 11 103.4 11 11 103.5 11 217.5S103.4 424 217.5 424c49.7 0 95.2-17.5 130.8-46.7L466.1 495c8 8 20.9 8 28.9 0 8-7.9 8-20.9 0-28.8zm-277.5-83.3C126.2 382.9 52 308.7 52 217.5S126.2 52 217.5 52C308.7 52 383 126.3 383 217.5s-74.3 165.4-165.5 165.4z" />
                                      </svg>
                                </span>
                             </button>
                          </form>
                       </div>
                    </div>
                    <div class="mt-10 bg-gray-100 rounded-sm p-5">
                       <div class="pb-6">
                          <div class="w-10 mx-auto mt-6 text-gray-900">
                             <svg class="fill-current" viewBox="-1 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path
                                   d="M505.668 246.465c-.89-.906-54.297-54.309-55.668-55.68V55c0-30.328-24.672-55-55-55H115C84.672 0 60 24.672 60 55v135.785C.379 250.406 0 248.301 0 257v210c0 24.813 20.188 45 45 45h420c24.813 0 45-20.188 45-45V257c0-3.855-1.54-7.71-4.332-10.535zm-35.992 6.426L450 262.73v-29.516zM115 30h280c13.785 0 25 11.215 25 25v222.73l-120 60V197c0-8.285-6.715-15-15-15H135c-8.285 0-15 6.715-15 15v95.73l-30-15V55c0-13.785 11.215-25 25-25zm155 257.973l-66.68-44.453a15.004 15.004 0 00-15.027-.938L150 261.73V212h120zm-120 7.297l43.922-21.961L270 324.027v28.703l-15 7.5-105-52.5zm-90-32.54l-19.676-9.84L60 233.216zM465 482H45c-8.27 0-15-6.73-15-15V281.27l218.293 109.148a15.008 15.008 0 0013.414 0L480 281.27V467c0 8.27-6.73 15-15 15zm0 0" />
                                <path
                                   d="M195 91h120c8.285 0 15-6.715 15-15s-6.715-15-15-15H195c-8.285 0-15 6.715-15 15s6.715 15 15 15zm0 0M135 151h240c8.285 0 15-6.715 15-15s-6.715-15-15-15H135c-8.285 0-15 6.715-15 15s6.715 15 15 15zm0 0M375 181h-30c-8.285 0-15 6.715-15 15s6.715 15 15 15h30c8.285 0 15-6.715 15-15s-6.715-15-15-15zm0 0M375 241h-30c-8.285 0-15 6.715-15 15s6.715 15 15 15h30c8.285 0 15-6.715 15-15s-6.715-15-15-15zm0 0" />
                                </svg>
                          </div>
                          <h2 class="font-light text-xl mb-2 text-center pt-5 text-gray-900">Subscribe to our newsletter
                          </h2>
                          <span class="block text-center article-body text-xs italic">Get the news right in your
                             inbox!</span>
                          <form action="">
                             <div class="bg-white border border-gray-400 mt-5 rounded-sm overflow-hidden">
                                <input class="bg-transparent w-full p-3" type="text" name="name" id=""
                                   placeholder="First Name">
                             </div>
                             <div class="bg-white border border-gray-400 mt-3 rounded-sm overflow-hidden">
                                <input class="bg-transparent w-full p-3" type="email" name="email" id=""
                                   placeholder="Email Address">
                             </div>
                             <div class="mt-3 article-body text-xs italic">
                                <span class="inline-block pr-1">
                                   <input type="checkbox" name="" id="privacy-check">
                                </span>
                                <label for="privacy-check">By checking this you agree to our Privacy Policy.</label>
                             </div>
                             <button type="submit"
                                class="w-full rounded-sm bg-gray-900 text-white tracking-widest text-sm uppercase font-medium py-3 mt-5">Subscribe</button>
                          </form>
                       </div>
                    </div>
                    <div class="mt-10">
                       <h2 class="font-light text-xl mb-5 text-gray-900 text-center">Categories</h2>
                       <ul>
                          <li class="flex"><a href=""
                                class="text-gray-900 font-thin font-serif text-lg py-2 block flex-1">Travel Tips</a><span
                                class="text-gray-700 text-lg font-thin p-2">2</span></li>
                          <li class="flex"><a href=""
                                class="text-gray-900 font-thin font-serif text-lg py-2 block flex-1">Destinations</a><span
                                class="text-gray-700 text-lg font-thin p-2">10</span></li>
                          <li class="flex"><a href=""
                                class="text-gray-900 font-thin font-serif text-lg py-2 block flex-1">Inspiration</a><span
                                class="text-gray-700 text-lg font-thin p-2">7</span></li>
                          <li class="flex"><a href=""
                                class="text-gray-900 font-thin font-serif text-lg py-2 block flex-1">Travel Gear</a><span
                                class="text-gray-700 text-lg font-thin p-2">4</span></li>
                       </ul>
                    </div>
                    <div class="mt-10">
                       <h2 class="font-light text-xl mb-5 text-gray-900 text-center">Recent Posts</h2>
                       <ul>
                          <li class="mb-3">
                             <a href="" class="flex">
                                <div class="w-1/3">
                                   <img class="rounded" src="./images/1-100x100.jpg" alt="">
                                </div>
                                <div class="w-2/3 p-2">
                                   <h3 class="text-gray-900 font-thin font-serif mb-2">Use Travel To Make Someone Fall In
                                      Love...</h3>
                                   <span class="text-xs text-gray-800 font-thin block mb-5">December 02, 2019</span>
                                </div>
                             </a>
                          </li>
                          <li class="mb-3">
                             <a href="" class="flex">
                                <div class="w-1/3">
                                   <img class="rounded" src="./images/2-100x100.jpg" alt="">
                                </div>
                                <div class="w-2/3 p-2">
                                   <h3 class="text-gray-900 font-thin font-serif mb-2">The Hidden Mystery Behind Travel
                                   </h3>
                                   <span class="text-xs text-gray-800 font-thin block mb-5">October 22, 2019</span>
                                </div>
                             </a>
                          </li>
                          <li class="mb-3">
                             <a href="" class="flex">
                                <div class="w-1/3">
                                   <img class="rounded" src="./images/3-100x100.jpg" alt="">
                                </div>
                                <div class="w-2/3 p-2">
                                   <h3 class="text-gray-900 font-thin font-serif mb-2">Do You Make These Simple
                                      Mistakes...</h3>
                                   <span class="text-xs text-gray-800 font-thin block mb-5">October 10, 2019</span>
                                </div>
                             </a>
                          </li>
                       </ul>
                    </div>
                 </div>
              </div>
           </div>
        </main>`;
    },
    afterRender() {
        const activeMenu = document.querySelector("#menu");
        activeMenu.classList.toggle("text-black");
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 50) {
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
export default ArticlePage;