import Alpine from "alpinejs";
import Router from "./router";

window.Alpine = Alpine;
console.log(window);
Alpine.start();

window.addEventListener("DOMContentLoaded", Router);