import Alpine from "alpinejs";
import Router from "./router";

window.Alpine = Alpine;
Alpine.start();

window.addEventListener("DOMContentLoaded", Router);