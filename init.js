const menuActive = () => {
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
};
export default menuActive;