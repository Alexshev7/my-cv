import "./textarea-validation";

const textarea = document.querySelector(".textarea");
const counter = document.querySelector(".current");
const maxlength = 360;

textarea.addEventListener("input", onInput);

function onInput(event) {
  event.target.value = event.target.value.substr(0, maxlength);
  const length = event.target.value.length;
  counter.textContent = length;
}

function resetCounter() {
  counter.textContent = 0;
}

export default resetCounter;
