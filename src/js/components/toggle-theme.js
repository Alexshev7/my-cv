import "./toggle-theme";

const switchThemeBtn = document.querySelector(".switch-theme");
const sectionTitleContainer = document.querySelectorAll(".section-title");
const sectionTitles = document.querySelectorAll(".section-title__text");
const portfolioItems = document.querySelectorAll(".portfolio__item");
const portfolioCaption = document.querySelectorAll(".portfolio__caption");
const textParagraph = document.querySelectorAll("p");
const navLinks = document.querySelectorAll(".nav__link");
const burgerline = document.querySelectorAll(".burger__line");
const formInput = document.querySelectorAll(".form__input");
const portfolioButtons = document.querySelectorAll(".portfolio-btn__item");
const contactButtons = document.querySelectorAll(".contact-btn");
const buttonArr = [...portfolioButtons, ...contactButtons];
const body = document.querySelector(".site-container");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
const hero = document.querySelector(".hero");
const portfolio = document.querySelector(".portfolio");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const heroTitle = document.querySelector(".hero__title");
const heroArrowDown = document.querySelector(".hero__arrow-down");
const formWrapper = document.querySelector(".form-wrapper");
const contactForm = document.querySelector(".contact__form");
const textareaForm = document.querySelector(".textarea");
const footer = document.querySelector(".footer");
const sectionArr = [about, contact, portfolio];
let theme = "light";

// получить тему из localStorage
function getThemeStorage() {
  theme = localStorage.getItem("theme");
  if (theme === "dark" && !body.classList.contains("dark-theme")) {
    switchTheme();
  }
}
// Вызвать тему после загрузки страницы
window.addEventListener("load", getThemeStorage);

// Переключение темы
function switchTheme() {
  switchThemeBtn.classList.toggle("checkbox-dark");
  body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
  sectionArr.forEach((section) => section.classList.toggle("dark-theme"));
  buttonArr.forEach((btn) => btn.classList.toggle("dark-theme-btn"));
  sectionTitleContainer.forEach((container) =>
    container.classList.toggle("section-title-dark")
  );
  sectionTitles.forEach((title) =>
    title.classList.toggle("section-title-dark")
  );
  burgerline.forEach((burgerline) =>
    burgerline.classList.toggle("burger-line-dark")
  );
  portfolioItems.forEach((item) =>
    item.classList.toggle("portfolio__item--dark")
  );
  portfolioCaption.forEach((caption) =>
    caption.classList.toggle("portfolio__caption--dark")
  );
  navLinks.forEach((links) => links.classList.toggle("link-dark"));
  textParagraph.forEach((text) => text.classList.toggle("text-dark"));
  formInput.forEach((input) => input.classList.toggle("input-dark"));
  header.classList.toggle("header-dark");
  nav.classList.toggle("nav-dark");
  hero.classList.toggle("hero-dark");
  heroTitle.classList.toggle("hero-title-dark");
  heroArrowDown.classList.toggle("arrow-dark");
  formWrapper.classList.toggle("form-wrapper-dark");
  contactForm.classList.toggle("contact__form--dark");
  textareaForm.classList.toggle("textarea-dark");
  footer.classList.toggle("footer-dark");
}

switchThemeBtn.addEventListener("click", switchTheme);

// save checkbox in localStorage
document.getElementById("checkbox__field").onclick = function () {
  if (document.getElementById("checkbox__field").checked) {
    localStorage.setItem("checkbox__field", "true");
  } else {
    localStorage.setItem("checkbox__field", "false");
  }
};
if (localStorage.getItem("checkbox__field") == "true") {
  document.getElementById("checkbox__field").setAttribute("checked", "checked");
}
