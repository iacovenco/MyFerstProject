"use strict";

const appData = {
  title: "",
  screens: "",
  screensPrice: 0,
  adaptive: true,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: "",
  service2: "",
  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "калькулятор верстки");

    appData.screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Простые, Сложные"
    );

    do {
      appData.screensPrice = prompt("Сколько будет стоить данная работа?");
    } while (!isNumber(appData.screensPrice));
    appData.screensPrice = Number(appData.screensPrice.trim());

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },
  getAllServicePrices: function () {
    let result = 0;

    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
      } else if (i === 1) {
        appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
      }
      let extra = prompt("Сколько это будет стоить?");

      while (!isNumber(extra)) {
        extra = prompt("Сколько это будет стоить?");
      }

      result += +extra;
    }
    return result;
  },
  getFullPrice: function () {
    return appData.screensPrice + appData.allServicePrices;
  },
  getServicePercentPrices: function () {
    let rollback = 5000;
    return appData.fullPrice - rollback;
  },
  getTitle: function () {
    return (
      appData.title.trim()[0].toUpperCase() + appData.title.trim().toLowerCase()
    );
  },
  getRollbackMessage: function (price) {
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
        return "Что-то пошло не так";
    }
  },
  start: function () {
    appData.asking();

    const savePrice = parseFloat(appData.screensPrice);

    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.allServicePrices + savePrice;
    appData.servicePercentPrice = appData.getServicePercentPrices();
    appData.title = appData.getTitle();

    appData.logger();
  },
  logger: function () {
    console.log("Свойства и методы appData:");
    for (let key in this) {
      console.log(key + ": " + appData[key]);
    }
  },
};

const isNumber = function (num) {
  if (num === null) {
    return false;
  }
  num = num.trim();
  return num !== "" && !isNaN(Number(num));
};

appData.start();
