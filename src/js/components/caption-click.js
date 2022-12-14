import "./caption-click";

const portfolioCaption = document.body.querySelectorAll(".portfolio__caption");

portfolioCaption.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.classList.toggle("portfolio__caption--active");
  });
});
