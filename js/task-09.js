function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  bodyElem: document.body,
  colorBtn: document.querySelector(".change-color"),
  outputSpan: document.querySelector(".color"),
};

refs.colorBtn.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  const randomColor = getRandomHexColor();
  refs.bodyElem.style.backgroundColor = randomColor;
  refs.outputSpan.textContent = `${randomColor}`;
  return;
}
