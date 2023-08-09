const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulTarget = document.querySelector("ul");

const elArr = ingredients.map((ingredient) => {
  let newEl = document.createElement("li");
  newEl.textContent = ingredient;
  newEl.classList.add("item");
  return newEl;
});

ulTarget.append(...elArr);

// const markup = ingredients
//   .map((ingredient) => {
//     return `<li class="item">${ingredient}</li>`;
//   })
//   .join("");
// ulTarget.insertAdjacentHTML("afterbegin", markup);
