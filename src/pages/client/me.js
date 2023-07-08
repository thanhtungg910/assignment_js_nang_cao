import MenuClient from "../../components/client/menuClient";
import Mycart from "../../components/client/mycart";

const MePage = {
    async render() {
        document.title = "Quản lý tài khoản";
        return /* html */ `<main class="max-w-5xl container mx-auto my-32">
        <div class="container mx-auto px-6 bg-white pb-6">
           <div class="grid grid-cols-3 gap-4">
              ${await MenuClient.render()}
              <div class="col-span-2 w-full border-2 rounded-lg shadow ">
              <div class="w-full overflow-hidden rounded-lg">
              <div class="w-full overflow-x-auto">
                 <table class="w-full whitespace-no-wrap">
                    <thead>
                       <tr
                          class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                          <th class="px-4 py-3">Sản phẩm</th>
                          <th class="px-4 py-3">Số lượng</th>
                          <th class="px-4 py-3">Tổng tiền</th>
                          <th class="px-4 py-3">Trạng thái</th>
                       </tr>
                    </thead>
                    <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                       ${await Mycart.render()}
                    </tbody>
                 </table>
              </div>
           </div>
           </div>
        </div>
     </main>`;
    },
    afterRender() {
        MenuClient.afterRender();
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
export default MePage;