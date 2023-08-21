"use strict";

let title = prompt("Как называется ваш проект?");
console.log(title);

let screens = prompt("Какие типы экранов нужно разработать?");
console.log(screens);

let screensPrice = +prompt("Сколько будет стоить данная работа?");
console.log(screensPrice);

let adaptive = prompt("Нужен ли адаптив на сайте?");
if (adaptive) {
  adaptive = console.log(Boolean(" "));
} else {
  adaptive = console.log(Boolean(""));
}

let service1 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service1);
let servicePrice1 = +prompt("Сколько это будет стоить?");
console.log(servicePrice1);

let service2 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service2);
let servicePrice2 = +prompt("Сколько это будет стоить?");
console.log(servicePrice2);

let fullPrice = screensPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);
/*
const kickback = "25%";
let servicePercentPrice = fullPrice;
servicePercentPrice =
  servicePercentPrice - (servicePercentPrice / 100) * parseFloat(kickback);
console.log(servicePercentPrice);
Тут у меня именно вычитание  процентов,но я так понял нужно
 откат в 'рублях' вводить
*/

let rebate = 5000;
let servicePercentPrice = Math.ceil(fullPrice - rebate);

console.log(servicePercentPrice);
/*
if (fullPrice > 29999) {
  console.log("Даем скидку в 10%");
} else if (fullPrice > 14999 && fullPrice <= 29999) {
  console.log("Даем скидку в 5%");
} else if (fullPrice > 0 && fullPrice <= 14999) {
  console.log("Скидка не предусмотрена");
} else {
  console.log("Что то пошло не так");
}
При отрицательном значении выводит "Скидка не предусмотрена",
а не "Что то пошло не так".
*/

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

alert("Подтвердить действие");
