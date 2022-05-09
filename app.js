const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector(".nav-logo");
const headline = document.querySelector(".headline");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const navList = document.querySelector(".nav-list");
const menuItem = document.querySelector(".menu-item");
const navBurger = document.querySelector(".nav-burger");



//Hero Animation
const tl = new TimelineMax();

tl.fromTo(hero, 1, {
    height: "0%"
}, {
    height: "80%",
    ease: Power2.easeInOut
});
tl.fromTo(hero, 1, {
    width: "100%"
}, {
    width: "80%"
});

//Toggle Menu

function toggleMenu() {
    if (navList.classList.contains("show-menu")) {
        navList.classList.remove("show-menu");
        closeMenu.style.display = "none";
        openMenu.style.display = "block";
    } else {
        navList.classList.add("show-menu");
        closeMenu.style.display = "block";
        openMenu.style.display = "none";
    }
}



navBurger.addEventListener("click", toggleMenu);