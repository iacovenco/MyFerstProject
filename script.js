"use strict";

const appData = {
  title: "",
  screens: [],
  screensPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,

  servicePercentPrice: 0,
  services: {},
  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();

    appData.logger();
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  isString: function (str) {
    return typeof str === "string" && !isNaN(parseFloat(str));
  },

  asking: function () {
    do {
      appData.title = prompt("Как называется ваш проект?");
    } while (this.isString(appData.title));

    for (let i = 0; i < 2; i++) {
      let nameServise = "";

      do {
        nameServise = prompt("Какие типы экранов нужно разработать?");
      } while (this.isString(nameServise));
      let price = 0;

      do {
        price = prompt("Сколько будет стоить данная работа?");
      } while (!appData.isNumber(price));

      appData.screens.push({ id: i, name: nameServise, price: price });
    }

    for (let i = 0; i < 2; i++) {
      let nameServise = "";

      do {
        nameServise = prompt("Какой дополнительный тип услуги нужен?");
      } while (this.isString(nameServise));
      let price = 0;

      do {
        price = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(price));

      appData.services[nameServise] = +price;
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },
  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screensPrice += +screen.price;
    }

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },

  getFullPrice: function () {
    appData.fullPrice = +appData.screensPrice + appData.allServicePrices;
  },
  getServicePercentPrices: function () {
    appData.servicePercentPrice =
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100); //слетают скобки
  },
  getTitle: function () {
    appData.title =
      appData.title.trim()[0].toUpperCase() +
      appData.title.trim().substring(1).toLowerCase();
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
  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
  },
};

appData.start();
