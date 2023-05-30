import { blackout, menu, testimonialCardAll, burgerMenu } from "./const";

document.body.addEventListener("click", (event) => {
  toggleBurgerMenu(event);
});

burgerMenu.addEventListener("click", () => menu.classList.toggle("burger-active"));

export default function toggleBurgerMenu(event) {
  {
    if (event.target.classList.contains("header__icon-close")) {
      menu.classList.remove("burger-active");
    }
    if (menu.classList.contains("burger-active")) {
      blackout.style.zIndex = "5";
      blackout.style.visibility = "visible";
    } else {
      blackout.style.visibility = "hidden";
      blackout.style.zIndex = "0";
    }
    if (event.target.classList.contains("blackout")) {
      menu.classList.remove("burger-active");
      testimonialCardAll.forEach((element) => {
        element.classList.remove("popup-active");
      });
      blackout.style.visibility = "hidden";
      blackout.style.zIndex = "0";
    }
  }
}
