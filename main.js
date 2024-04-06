// ------------navbar
const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo img");
const navBtn = document.querySelector(".nav .container .btn");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".nav .container ul");

document.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    nav.classList.add("fix");
    logo.setAttribute("src", "./images/logo/logo.svg");
    navBtn.classList.remove("btn-outline");
    navBtn.classList.add("btn-primary");
  }
  if (window.scrollY < 30) {
    nav.classList.remove("fix");
    logo.setAttribute("src", "./images/logo/white-logo.svg");
    navBtn.classList.add("btn-outline");
    navBtn.classList.remove("btn-primary");
  }
});

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  menu.classList.toggle("active");
});
