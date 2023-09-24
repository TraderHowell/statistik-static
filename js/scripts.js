const toggle = document.querySelector("#nav-toggle");
const menu = document.querySelector("#nav-menu");

/* Toggle mobile menu */
function toggleMenu() {
if (menu.classList.contains("active")) {
menu.classList.remove("active");
toggle.innerHTML = "<i class='fas fa-bars'></i>";
} else {
menu.classList.add("active");
toggle.innerHTML = "<i class='fas fa-times'></i>";
}
}
/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);