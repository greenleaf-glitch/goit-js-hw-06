const refs = {
  counterEl: document.querySelector("#counter"),
  span: document.querySelector("#value"),
};

const btnDecr = refs.counterEl.firstElementChild;
const btnIncr = refs.counterEl.lastElementChild;

let counterValue = 0;

btnDecr.addEventListener("click", () => {
  counterValue--;
  return (refs.span.textContent = counterValue);
});

btnIncr.addEventListener("click", () => {
  counterValue++;
  return (refs.span.textContent = counterValue);
});
