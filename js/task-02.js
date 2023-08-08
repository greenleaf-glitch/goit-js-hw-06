const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulTarget = document.querySelector("ul");

const markup = ingredients.forEach((ingredient) => {
  let element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add("item");
  ulTarget.append(element);
});
