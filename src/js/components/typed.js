import Typed from "../../../node_modules/typed.js";
const typedText = document.querySelector(".hero__subtitle");

var typed = new Typed(typedText, {
  strings: ["Junior Frontend Developer"],
  startDelay: 500,
  backDelay: 1500,
  typeSpeed: 50,
  backSpeed: 80,
  // loop: true,
  smartBackspace: true,
});
