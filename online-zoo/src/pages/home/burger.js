const burgerMenu = document.querySelector(".header__burger-menu");
const menu = document.querySelector(".menu-nav");
const blackout = document.querySelector(".blackout");
const testimonialCard = document.querySelector(".testimonials-card");
const testimonialCardAll = document.querySelectorAll(".testimonials-card");

burgerMenu.addEventListener("click", () => {
  menu.classList.toggle("burger-active");
});

document.body.addEventListener("click", (el) => {
  if (el.target.classList.contains("header__icon-close")) {
    menu.classList.remove("burger-active");
  }
  if (menu.classList.contains("burger-active")) {
    blackout.style.zIndex = "5";
    blackout.style.visibility = "visible";
  } else {
    blackout.style.visibility = "hidden";
    blackout.style.zIndex = "0";
  }
  if (el.target.classList.contains("blackout")) {
    menu.classList.remove("burger-active");
    testimonialCardAll.forEach((element) => {
      element.classList.remove("popup-active");
    });
    blackout.style.visibility = "hidden";
    blackout.style.zIndex = "0";
  }
});
