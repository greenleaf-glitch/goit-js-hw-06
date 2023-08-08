function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  boxes: document.querySelector("#boxes"),
  controls: document.querySelector("#controls"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector(
    "button[data-destroy]"
  ),
  input: document.querySelector("input"),
};

let amount;
let boxSize = 30;

refs.input.addEventListener("input", (event) => {
  amount = event.currentTarget.value;
});
refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = refs.input.value;

  for (let index = 0; index < amount; index++) {
    const newBox = document.createElement("div");
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    refs.boxes.append(newBox);
    boxSize += 10;
  }
  refs.input.reset();
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
  boxSize = 30;
}
