import FormValidator from './FormValidator.js';
const form = document.querySelector(".form");
const fields = ["username","email","password","password_confirmation"];

const validator = new FormValidator(form,fields);
validator.initialize();