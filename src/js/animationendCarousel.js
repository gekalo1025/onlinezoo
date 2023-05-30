import { btnLeft, btnRight, carousel, petsCardActive, petsCardLeft, petsCardRight, mediaQuery } from "../js/const";
import getArrRandomPets from "../js/getArrRandomPets";
import { moveLeft, moveRight } from "../js/petsCarousel";
export default function animationendCarousel(event) {
  let countPets = mediaQuery.matches ? 4 : 6;
  let randomArr = getArrRandomPets(countPets);
  if (event.animationName === "move-left" || event.animationName === "move-left-1250" || event.animationName === "move-left-640") {
    petsCardActive.innerHTML = petsCardLeft.innerHTML;
    petsCardLeft.innerHTML = "";
    randomArr.forEach((el) => {
      petsCardLeft.appendChild(el);
    });
    carousel.classList.remove("transition-left");
  } else {
    petsCardActive.innerHTML = petsCardRight.innerHTML;
    petsCardRight.innerHTML = "";
    randomArr.forEach((el) => {
      petsCardRight.appendChild(el);
    });
    carousel.classList.remove("transition-right");
  }
  btnRight.disabled = false;
  btnLeft.disabled = false;
  btnLeft.addEventListener("click", moveLeft);
  btnRight.addEventListener("click", moveRight);
}
