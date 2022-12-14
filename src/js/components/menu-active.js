import "./menu-active";

let menuLinks = document.querySelectorAll(".nav__link");

menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    menuLinks.forEach((el) => {
      el.classList.remove("nav__link--active");
      this.classList.add("nav__link--active");
    });
  });
});
