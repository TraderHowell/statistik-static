const toggle = document.querySelector("#nav-toggle");
const menu = document.querySelector("#nav-menu");
const logo = document.querySelector("#nav-logo");

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

function logoAnimationOn() {
    logo.src = "img/statistik-darkmode-animate.svg";
}

function logoAnimationOff() {
    logo.src = "img/statistik-darkmode.svg";
}

/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);
logo.addEventListener("mouseover", logoAnimationOn, false);
logo.addEventListener("mouseout", logoAnimationOff, false);