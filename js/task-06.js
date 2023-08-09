const refs = {
  input: document.querySelector("#validation-input"),
};

refs.input.addEventListener("blur", checkLength);

function checkLength(event) {
  refs.input.classList.remove("valid", "invalid");
  return event.currentTarget.value.length ===
    Number(refs.input.dataset.length)
    ? refs.input.classList.add("valid")
    : refs.input.classList.add("invalid");
}
