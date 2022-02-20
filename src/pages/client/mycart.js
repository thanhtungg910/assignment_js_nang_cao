import MenuClient from "../../components/client/menuClient";
import Mycart from "../../components/client/mycart";

const MyCartPage = {
    render() {
        return /* html */ `<main class="max-w-5xl container mx-auto my-32">
        <div class="container mx-auto px-6 bg-white pb-6">
           <div class="grid grid-cols-3 gap-4">
              ${MenuClient.render()}
              <div class="col-span-2 w-full ">
               ${Mycart.render()}
           </div>
        </div>
     </main>`;
    },
};
export default MyCartPage;