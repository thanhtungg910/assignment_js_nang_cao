import { Product } from "../components";

const Details = {
    render() {
        return /* html */`
      <main>
         <div class="max-w-2xl mt-9 mx-auto pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pb-24 lg:px-8 lg:grid lg:grid-cols-2 grid-flow-col-dense lg:gap-x-8 ">
         <div class="mt-4 lg:mt-0 p-2 lg:row-span-3 relative">
         <div class="content-product sticky top-32">
            <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Basic Tee 6-Pack</h1>
            <h2 class="sr-only">Product information</h2>
            <p class="text-3xl text-gray-900">$192</p>
            <!-- Reviews-->
            <!-- Colors-->
            <div class="mt-10">
               <h3 class="text-sm text-gray-900 font-medium">Color</h3>
               <fieldset class="mt-4">
               <legend class="sr-only">Choose a color</legend>
               <div class="flex items-center space-x-3">
                  
                  <label class="relative rounded-full flex items-center justify-center cursor-pointer ring-gray-400 -m-0.5 p-0.5 focus:outline-none">
                     <input class="sr-only" type="radio" name="color-choice" value="White" aria-labelledby="color-choice-0-label">
                     <p class="sr-only" id="color-choice-0-label">White</p><span class="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full" aria-hidden="true"></span>
                  </label>
                  
                  <label class="relative rounded-full flex items-center justify-center cursor-pointer ring-gray-400 -m-0.5 p-0.5 focus:outline-none">
                     <input class="sr-only" type="radio" name="color-choice" value="Gray" aria-labelledby="color-choice-1-label">
                     <p class="sr-only" id="color-choice-1-label">Gray</p><span class="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full" aria-hidden="true"></span>
                  </label>
                  
                  <label class="relative rounded-full flex items-center justify-center cursor-pointer ring-gray-900 -m-0.5 p-0.5 focus:outline-none">
                     <input class="sr-only" type="radio" name="color-choice" value="Black" aria-labelledby="color-choice-2-label">
                     <p class="sr-only" id="color-choice-2-label">Black</p><span class="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full" aria-hidden="true"></span>
                  </label>
               </div>
               </fieldset>
            </div>
            <!-- Sizes-->
            <div class="mt-10">
               <div class="flex items-center justify-between">
               <h3 class="text-sm text-gray-900 font-medium">Size</h3><a class="text-sm font-medium text-indigo-600 hover:text-indigo-500" href="#">Size guide</a>
               </div>
               <fieldset class="mt-4">
               <legend class="sr-only">Choose a size</legend>
               <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                  <!-- Active: "ring-2 ring-indigo-500"-->
                  <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase bg-gray-50 text-gray-200 cursor-not-allowed hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                     <input class="sr-only" type="radio" name="size-choice" value="XXS" disabled="" aria-labelledby="size-choice-0-label">
                     <p id="size-choice-0-label">XXS</p>
                     <div class="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none" aria-hidden="true">
                     <svg class="absolute inset-0 w-full h-full text-gray-200 stroke-2" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                        <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke"></line>
                     </svg>
                     </div>
                  </label>
                  <!-- Active: "ring-2 ring-indigo-500"-->
                  <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase bg-white shadow-sm text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                     <input class="sr-only" type="radio" name="size-choice" value="XS" aria-labelledby="size-choice-1-label">
                     <p id="size-choice-1-label">XS</p>
                     <!--
                     Active: "border", Not Active: "border-2"
                     Checked: "border-indigo-500", Not Checked: "border-transparent"
                     -->
                     <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                  </label>
                  <!-- Active: "ring-2 ring-indigo-500"-->
                  <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase bg-white shadow-sm text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                     <input class="sr-only" type="radio" name="size-choice" value="S" aria-labelledby="size-choice-2-label">
                     <p id="size-choice-2-label">S</p>
                     <!--
                     Active: "border", Not Active: "border-2"
                     Checked: "border-indigo-500", Not Checked: "border-transparent"
                     -->
                     <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                  </label>
                  <!-- Active: "ring-2 ring-indigo-500"-->
                  <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase bg-white shadow-sm text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                     <input class="sr-only" type="radio" name="size-choice" value="M" aria-labelledby="size-choice-3-label">
                     <p id="size-choice-3-label">M</p>
                     <!--
                     Active: "border", Not Active: "border-2"
                     Checked: "border-indigo-500", Not Checked: "border-transparent"
                     -->
                     <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                  </label>
                  <!-- Active: "ring-2 ring-indigo-500"-->
                  <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase bg-white shadow-sm text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                     <input class="sr-only" type="radio" name="size-choice" value="L" aria-labelledby="size-choice-4-label">
                     <p id="size-choice-4-label">L</p>
                     <!--
                     Active: "border", Not Active: "border-2"
                     Checked: "border-indigo-500", Not Checked: "border-transparent"
                     -->
                     <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                  </label>
                  <!-- Active: "ring-2 ring-indigo-500"-->
                  <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase bg-white shadow-sm text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                     <input class="sr-only" type="radio" name="size-choice" value="XL" aria-labelledby="size-choice-5-label">
                     <p id="size-choice-5-label">XL</p>
                     <!--
                     Active: "border", Not Active: "border-2"
                     Checked: "border-indigo-500", Not Checked: "border-transparent"
                     -->
                     <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                  </label>
                  <!-- Active: "ring-2 ring-indigo-500"-->
                  <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase bg-white shadow-sm text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                     <input class="sr-only" type="radio" name="size-choice" value="2XL" aria-labelledby="size-choice-6-label">
                     <p id="size-choice-6-label">2XL</p>
                     <!--
                     Active: "border", Not Active: "border-2"
                     Checked: "border-indigo-500", Not Checked: "border-transparent"
                     -->
                     <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                  </label>
                  <!-- Active: "ring-2 ring-indigo-500"-->
                  <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase bg-white shadow-sm text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                     <input class="sr-only" type="radio" name="size-choice" value="3XL" aria-labelledby="size-choice-7-label">
                     <p id="size-choice-7-label">3XL</p>
                     <!--
                     Active: "border", Not Active: "border-2"
                     Checked: "border-indigo-500", Not Checked: "border-transparent"
                     -->
                     <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                  </label>
               </div>
               </fieldset>
            </div>
            <button class="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">Add to bag</button>
            <div class="w-[283px] mt-2 text-sm">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt possimus nostrum neque quas iusto iste, labore maxime laboriosam doloremque odio nulla repellat reiciendis, omnis rem rerum facere aut? Aperiam.
               
            </div>
         </div>
         </div>
         <div class="lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
         <div class="content-image float-right snap-y snap-mandatory">
            <div class="snap-always snap-center py-2 object-cover"><img src="https://picsum.photos/500" alt=""></div>
            <div class="snap-always snap-center py-2 object-cover"><img src="https://picsum.photos/500" alt=""></div>
            <div class="snap-always snap-center py-2 object-cover"><img src="https://picsum.photos/500" alt=""></div>
            <div class="snap-always snap-center py-2 object-cover"><img src="https://picsum.photos/500" alt=""></div>
            <div class="snap-always snap-center py-2 object-cover"><img src="https://picsum.photos/500" alt=""></div>
         </div>
         </div>
      </div>
      <div class="container mx-auto">
           <div class="bg-white p-6">
              <div class="max-w-4xl mx-auto py-16 px-5 sm:py-20 sm:px-6 lg:max-w-full lg:px-4 ">
                 <div class="flex justify-between">
                 <h2>Có thể bạn thích</h2>
                 </div>

                 <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
                    ${Product.render()}                    
                 </div>
              </div>
           </div>
        </div>
      </main>`;
    },
};
export default Details;