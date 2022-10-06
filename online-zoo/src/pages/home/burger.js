const burgerMenu = document.querySelector(".header__burger-menu");
const menu = document.querySelector(".menu-nav");
const blackout = document.querySelector(".blackout");
const testimonialCard = document.querySelector(".testimonials-card");

burgerMenu.addEventListener("click", () => {
  menu.classList.toggle("burger-active");
});

document.body.addEventListener("click", (el) => {
  if (el.target.classList.contains("header__icon-close")) {
    menu.classList.toggle("burger-active");
  }
  if (
    menu.classList.contains("burger-active") ||
    testimonialCard.classList.contains("popup-active")
  ) {
    blackout.style.visibility = "visible";
  } else {
    blackout.style.visibility = "hidden";
  }
  if (el.target.classList.contains("blackout")) {
    menu.classList.remove("burger-active");
    testimonialCard.classList.remove("popup-active");
    blackout.style.visibility = "hidden";
  }
});
