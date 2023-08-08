const refs = {
  form: document.querySelector("form"),
  email: document.querySelector("[name='email']"),
  password: document.querySelector("[name='password']"),
  submitBtn: document.querySelector("button"),
};

refs.form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value && password.value) {
    const submitFormData = {
      email: email.value,
      password: password.value,
    };
    console.log(submitFormData);
    event.currentTarget.reset();
    return;
  } else {
    alert("Please enter all data");
  }
}
