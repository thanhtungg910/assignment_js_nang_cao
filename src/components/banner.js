/* eslint-disable no-tabs */
/* eslint-disable import/no-unresolved */

const Banner = {
    render() {
        return /* html */ `
        <div class="swiper banner w-full">
			<div class="swiper-wrapper">
         <div class="swiper-slide w-full h-screen relative">
         <video style="width:100%" preload="auto" autoplay="true" loop="loop" muted="muted">
            <source
               src="https://res.cloudinary.com/dhfndew6y/video/upload/v1642922409/js-nang-cao/20211022_seveth_homepage_hero_com_omaxz9.mp4" type="video/mp4"
            />
            </video>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-center">
            <h2 class="text-white uppercase text-8xl font-medium  font-mono leading-tight">Seventh Collection <br> Fall/Winter</h2>
            <a href="" class="text-white uppercase p-96 text-2xl underline ">shop</a>
            </div>

            </div>
               <div class="swiper-slide 2xl:w-screen relative" >
					<img
               src="https://cdn.shopify.com/s/files/1/1003/3354/files/seafoam_hp_v2.001_x600.jpg?v=1640285164"
               style="width: 100%"
					/>
               <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-center">
                     <h2 class="text-white uppercase text-8xl font-medium  font-mono leading-tight">seafoam</h2>
                     <a href="" class="text-white uppercase text-2xl underline ">shop</a>
               </div>
				</div>
				<div class="swiper-slide h-screen relative" >
					<img
						src="https://cdn.shopify.com/s/files/1/1003/3354/files/2021.11.xx_thecalifornia_hero_x600.jpg?v=1636069244"
						style="width: 100%"
					/>
               <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-center">
               <h2 class="text-white uppercase text-8xl font-medium  font-mono leading-tight">fear of god longewear</h2>
               <a href="" class="text-white uppercase text-2xl underline ">shop</a>
         </div>
				</div>
			</div>
		</div>`;
    },
};
export default Banner;