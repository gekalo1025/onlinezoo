const burgerMenu = document.querySelector(".header__burger-menu");
const menu = document.querySelector(".menu-nav");
const blackout = document.querySelector(".blackout");
burgerMenu.addEventListener("click", () => {
  menu.classList.toggle("burger-active");
});

document.body.addEventListener("click", (el) => {
  if (el.target.classList.contains("header__icon-close")) {
    menu.classList.toggle("burger-active");
  }
  if (menu.classList.contains("burger-active")) {
    blackout.style.display = "block";
  } else {
    blackout.style.display = "none";
  }
  if (el.target.classList.contains("blackout")) {
    menu.classList.remove("burger-active");
    blackout.style.display = "none";
  }
});
