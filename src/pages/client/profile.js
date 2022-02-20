import MenuClient from "../../components/client/menuClient";
import Profile from "../../components/client/profile";

const ProfilePage = {
    render() {
        document.title = "Thông tin cá nhân";
        return /* html */ `<main class="max-w-5xl container mx-auto my-32">
        <div class="container mx-auto px-6 bg-white pb-6">
           <div class="grid grid-cols-3 gap-4">
              ${MenuClient.render()}
              <div class="col-span-2 w-full ">
               ${Profile.render()}
           </div>
        </div>
     </main>`;
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
export default ProfilePage;