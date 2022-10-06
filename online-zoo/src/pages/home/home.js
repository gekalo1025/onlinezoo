import "../../stylesheets/main.scss";
import "../home/burger";

const blackout = document.querySelector(".blackout");
const testimonialCard = document.querySelector(".testimonials-card");
testimonialCard.addEventListener("click", () => {
  blackout.style.display = "block";
  testimonialCard.classList.toggle("popup-active");
});

/////pets carousel ////
const btnLeft = document.querySelector(".button-arrow-left");
const btnRight = document.querySelector(".button-arrow-right");
const carousel = document.querySelector(".carousel");
const petsCardLeft = document.querySelector(".pets__cards-row-left");
const petsCardActive = document.querySelector(".pets__cards-row-active");
const petsCardRight = document.querySelector(".pets__cards-row-right");
const mediaQuery = window.matchMedia("(max-width: 998px)");

function moveLeft() {
  carousel.classList.add("transition-left");
  btnLeft.removeEventListener("click", moveLeft);
  btnRight.removeEventListener("click", moveRight);
  btnLeft.disabled = true;
  btnRight.disabled = true;
}

function moveRight() {
  carousel.classList.add("transition-right");
  btnLeft.removeEventListener("click", moveLeft);
  btnRight.removeEventListener("click", moveRight);
  btnLeft.disabled = true;
  btnRight.disabled = true;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

if (mediaQuery.matches) {
  petsCardActive.lastElementChild.remove();
  petsCardActive.lastElementChild.remove();
  petsCardLeft.lastElementChild.remove();
  petsCardLeft.lastElementChild.remove();
  petsCardRight.lastElementChild.remove();
  petsCardRight.lastElementChild.remove();
}

function randomPets() {
  let arrPetsCard = document.querySelectorAll(
    ".pets__cards-row-active > .pet-card"
  );
  const arrRandomPetsCard = [];
  let countPets = mediaQuery.matches ? 4 : 6;
  while (arrRandomPetsCard.length < countPets) {
    let item = arrPetsCard[getRandomIntInclusive(0, arrPetsCard.length - 1)];
    if (!arrRandomPetsCard.includes(item)) {
      arrRandomPetsCard.push(item);
    }
  }
  return arrRandomPetsCard;
}

btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);

carousel.addEventListener("animationend", (event) => {
  let randomArr = randomPets();
  if (
    event.animationName === "move-left" ||
    event.animationName === "move-left-1250" ||
    event.animationName === "move-left-640"
  ) {
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
});
