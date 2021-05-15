const hMenuButton = document.querySelector(".menu");
const menu = document.querySelector(".header-content nav");
const closeMenu = document.querySelector(".close-menu");
const body = document.querySelector("body");

hMenuButton.addEventListener("click", function () {
  hMenuButton.style.display = "none";
  menu.style.display = "block";
  closeMenu.classList.remove("visibility");
  body.style.overflow = "hidden";
});
closeMenu.addEventListener("click", function () {
  hMenuButton.style.display = "flex";
  menu.style.display = "none";
  closeMenu.classList.add("visibility");
  body.style.overflow = "auto";
});
