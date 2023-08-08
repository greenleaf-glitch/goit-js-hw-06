const categoriesQuantity =
  document.querySelector("#categories").children.length;
console.log("Number of categories: ", categoriesQuantity);

const categoriesArr = [
  ...document.querySelector("#categories").children,
];

categoriesArr.forEach((category) => {
  console.log(
    "Category: ",
    category.firstElementChild.textContent
  );
  console.log(
    "Elements: ",
    category.querySelectorAll("li").length
  );
});
