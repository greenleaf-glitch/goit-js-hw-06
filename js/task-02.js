const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulTarget = document.querySelector("ul");
let element = "";

const markup = ingredients
  .map((ingredient) => {
    return `<li class="item">${ingredient}</li>`;
  })
  .join("");

ulTarget.insertAdjacentHTML("afterbegin", markup);
