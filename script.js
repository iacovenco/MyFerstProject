"use strict";

let title;
let screens;
let screensPrice;
let adaptive;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt("Как называется ваш проект?", "Калькулятор верстки");

  screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");

  do {
    screensPrice = prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screensPrice));

  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
  let result = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1) {
      prompt("Какой дополнительный тип услуги нужен?");
    }
    let extra = prompt("Сколько это будет стоить?");

    while (!isNumber(extra)) {
      extra = prompt("Сколько это будет стоить?");
    }

    result += +extra;
  }
  return result;
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getFullPrice = function () {
  return screensPrice + allServicePrices;
};

const getServicePercentPrices = function () {
  let rollback = 5000;
  return fullPrice - rollback;
};

const getTitle = function () {
  return title.trim()[0].toUpperCase() + title.trim.substr(1).toLowerCase;
};

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

asking();

const savePrice = parseFloat(screensPrice);

allServicePrices = getAllServicePrices();
fullPrice = allServicePrices + savePrice;
servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(screensPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);

console.log(getRollbackMessage(fullPrice));

console.log(screens.length);
console.log(servicePercentPrice);

console.log(
  "Стоймость верстки " + screensPrice + " рублей",
  "Стоймость разработки " + fullPrice + " рублей"
);
