"use strict";

const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?");
let screensPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");

const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};
let allServicePrices = getAllServicePrices();

let fullPrice = getFullPrice(screensPrice, allServicePrices);

const getServicePercentPrices = function () {
  const rebate = 5000;
  return fullPrice - rebate;
};

const servicePercentPrice = getServicePercentPrices();

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

function getFullPrice(a, b) {
  let sum = a + b;
  return sum;
}

const getTitle = function (input) {
  const deliteInput = input.trim();
  const changeTitle =
    deliteInput.charAt(0).toUpperCase() +
    deliteInput.substring(1).toLowerCase();
  return changeTitle;
};
const fixTitle = getTitle(title);

const getRollbackMessage = function (price) {
  switch (true) {
    case price > 29999:
      return "Даем скидку в 10%";
      break;
    case price > 14999 && fullPrice <= 29999:
      return "Даем скидку в 5%";
      break;
    case price > 0 && fullPrice <= 14999:
      return "Скидка не предусмотрена";
      break;
    default:
      return "Что то пошло не так";
  }
};

showTypeOf(fixTitle);
showTypeOf(screensPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(screens);
console.log(servicePercentPrice);
