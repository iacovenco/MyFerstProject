"use strict";

const title = prompt("Как называется ваш проект?");

const screens = prompt("Какие типы экранов нужно разработать?");

const screensPrice = +prompt("Сколько будет стоить данная работа?");

let adaptive = prompt("Нужен ли адаптив на сайте?");

const service1 = prompt("Какой дополнительный тип услуги нужен?");

const servicePrice1 = +prompt("Сколько это будет стоить?");

const service2 = prompt("Какой дополнительный тип услуги нужен?");

const servicePrice2 = +prompt("Сколько это будет стоить?");

const fullPrice = screensPrice + servicePrice1 + servicePrice2;

const rebate = 5000;
const servicePercentPrice = Math.ceil(fullPrice - rebate);

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

console.log(title);
console.log(screens);
console.log(screensPrice);

if (adaptive) {
  adaptive = console.log(Boolean(" "));
} else {
  adaptive = console.log(Boolean(""));
}

console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
console.log(fullPrice);
console.log(servicePercentPrice);
