import { validateForms } from "../functions/validate-forms";

const rules = [
  {
    ruleSelector: ".input-name",
    rules: [
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Введите 3 и более символов",
      },
      {
        rule: "maxLength",
        value: 25,
        errorMessage: "Введите не более 25 символов",
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя",
      },
    ],
  },
  {
    ruleSelector: ".input-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон",
      },
    ],
  },
  {
    ruleSelector: ".input-email",
    rules: [
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Введите 3 и более символов",
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните E-mail",
      },
      {
        rule: "email",
        value: true,
        errorMessage: "Введите корректный E-mail",
      },
    ],
  },
];

const afterForm = () => {
  console.log("Успешно отправлено!");
};

validateForms(".contact__form", rules, afterForm);
