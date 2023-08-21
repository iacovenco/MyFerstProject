"use strict";

const title = prompt("Как называется ваш проект?");
console.log(title);

const screens = prompt("Какие типы экранов нужно разработать?");
console.log(screens);

const screensPrice = +prompt("Сколько будет стоить данная работа?");
console.log(screensPrice);

let adaptive = prompt("Нужен ли адаптив на сайте?");

if (adaptive) {
  adaptive = console.log(Boolean(" "));
} else {
  adaptive = console.log(Boolean(""));
}

const service1 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service1);

const servicePrice1 = +prompt("Сколько это будет стоить?");
console.log(servicePrice1);

const service2 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service2);

const servicePrice2 = +prompt("Сколько это будет стоить?");
console.log(servicePrice2);

const fullPrice = screensPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);

const rebate = 5000;
const servicePercentPrice = Math.ceil(fullPrice - rebate);

console.log(servicePercentPrice);

switch (true) {
  case fullPrice > 29999:
    console.log("Даем скидку в 10%");
    break;
  case fullPrice > 14999 && fullPrice <= 29999:
    console.log("Даем скидку в 5%");
    break;
  case fullPrice > 0 && fullPrice <= 14999:
    console.log("Скидка не предусмотрена");
    break;
  default:
    console.log("Что то пошло не так");
}
