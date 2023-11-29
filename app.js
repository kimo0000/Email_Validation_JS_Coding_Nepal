const validationEl = document.querySelector(".validation");
const btnCheck = document.querySelector(".check");
const inputEl = document.querySelector("input");
const iconExcla = document.querySelector(".exclamation");
const resultEl = document.querySelector(".result");

let validPassword = /\w+@\w+.(com|fr|net)/;

const validationEmail = (e) => {
  let value = inputEl.value;
  resultEl.classList.add("active");
  if (!value) {
    inputEl.style.border = "1px solid #000";
    resultEl.innerHTML = "Input cant be blanc!";
    validationEl.classList.add("active");
  } else if (value && !validPassword.test(inputEl.value)) {
    inputEl.style.border = "2px solid red";
    resultEl.innerHTML = "Please enter a valid password!";
    resultEl.style.color = "red";
    iconExcla.className = "fa-solid fa-circle-exclamation exclamation";
    iconExcla.style.color = "red";
  } else if (value && validPassword.test(inputEl.value)) {
    resultEl.innerHTML = "This a valid email";
    resultEl.style.color = "green";
    iconExcla.className = "fa-solid fa-circle-check exclamation";
    iconExcla.style.color = "green";
  }
};

btnCheck.addEventListener("click", validationEmail);
