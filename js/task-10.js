const refs = {
  boxes: document.querySelector("#boxes"),
  controls: document.querySelector("#controls"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector(
    "button[data-destroy]"
  ),
  input: document.querySelector("input"),
};

let boxAmount;
let boxSize = 30;

refs.input.addEventListener("input", getInputValue);
refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getInputValue(event) {
  boxAmount = 0;
  const min = Number(refs.input.min);
  const max = Number(refs.input.max);
  const currentValue = Math.round(
    parseFloat(event.currentTarget.value)
  );

  if (
    !isNaN(currentValue) &&
    currentValue >= min &&
    currentValue <= max
  ) {
    return (boxAmount = currentValue);
  }
}

function createBoxes() {
  let boxArr = [];
  for (let index = 0; index < boxAmount; index++) {
    const newBox = document.createElement("div");
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    boxArr.push(newBox);
    boxSize += 10;
  }
  refs.boxes.append(...boxArr);
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
  boxSize = 30;
}
