import { currentYear } from "./get-full-year";

currentYear = document.querySelector(".current_year");

const getDate = new Date().getFullYear();
currentYear.textContent = getDate;
