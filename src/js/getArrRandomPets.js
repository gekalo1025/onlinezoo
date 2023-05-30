import getRandomIntInclusive from "../js/getRandomIntInclusive";

export default function getArrRandomPets(countPets) {
  let allPetsCard = document.querySelectorAll(".pets__cards-row-active > .pet-card");
  const arrRandomPetsCard = [];

  while (arrRandomPetsCard.length < countPets) {
    let card = allPetsCard[getRandomIntInclusive(0, allPetsCard.length - 1)];

    if (!arrRandomPetsCard.includes(card)) {
      arrRandomPetsCard.push(card);
    }
  }
  return arrRandomPetsCard;
}
