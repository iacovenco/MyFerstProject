"use strict";

const title = document.getElementsByTagName("h1")[0];
const buttonPlus = document.querySelector(".screen-btn");
const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");

const inputRange = document.querySelector(".rollback input[type='range']");
const spanRange = document.querySelector(".rollback .range-value");

const startBtn = document.getElementsByClassName("handler_btn")[0];
const resetBtn = document.getElementsByClassName("handler_btn")[1];

const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const fullTotalCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];

let screens = document.querySelectorAll(".screen");

const appData = {
  screens: [],
  screenPrice: 0,
  screenCount: 0,
  adaptive: true,
  price: 0,
  rollback: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},

  addTitle: function () {
    document.title = title.textContent;
  },

  start: function () {
    appData.addScreens();
    if (appData.screens.length != 0) {
      appData.addServices();
      appData.addRollback();
      appData.addPrices();

      appData.showResult();
    } else {
      alert("Выберите тип экранов и их количество!");
    }
  },

  init: function () {
    appData.addTitle();

    startBtn.addEventListener("click", appData.start);
    buttonPlus.addEventListener("click", appData.addScreenBlocks);
    inputRange.addEventListener("input", appData.showRollback);
  },

  showResult: function () {
    total.value = appData.screenPrice;
    totalCount.value = appData.screenCount;
    totalCountOther.value =
      appData.servicePricesPercent + appData.servicePricesNumber;
    fullTotalCount.value = appData.fullPrice;
    totalCountRollback.value = appData.servicePercentPrice;
  },

  addRollback: function () {
    appData.rollback = +inputRange.value;
  },

  showRollback: function () {
    spanRange.textContent = inputRange.value + "%";
  },

  addScreenBlocks: function () {
    let screens = document.querySelectorAll(".screen");
    const cloneScreen = screens[0].cloneNode(true);

    screens[screens.length - 1].after(cloneScreen);
  },

  addScreens: function () {
    let screens = document.querySelectorAll(".screen");
    appData.screens = [];

    screens.forEach(function (screen, index) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;

      if (+select.value != 0 && +input.value != 0) {
        appData.screens.push({
          id: index,
          name: selectName,
          price: +select.value * +input.value,
          count: input.value,
          isError: false,
        });
      } else {
        appData.screens.push({
          id: index,
          name: selectName,
          price: +select.value * +input.value,
          count: input.value,
          isError: true,
        });
      }
    });
    for (let screen of appData.screens) {
      if (screen.isError == true) {
        appData.screens = [];
      }
    }
  },

  addServices: function () {
    appData.servicesPercent = {};
    appData.servicesNumber = {};

    otherItemsPercent.forEach(function (item) {
      const check = item.querySelector('input[type="checkbox"]');
      const label = item.querySelector("label");
      const input = item.querySelector('input[type="text"]');

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });
    otherItemsNumber.forEach(function (item) {
      const check = item.querySelector('input[type="checkbox"]');
      const label = item.querySelector("label");
      const input = item.querySelector('input[type="text"]');

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addPrices: function () {
    appData.screenCount = 0;
    appData.screenPrice = 0;
    appData.servicePricesNumber = 0;
    appData.servicePricesPercent = 0;

    for (let screen of appData.screens) {
      if (screen.isError == false) {
        appData.screenPrice += +screen.price;
        appData.screenCount += +screen.count;
      }
    }

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }

    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent +=
        appData.screenPrice * (appData.servicesPercent[key] / 100);
    }

    appData.fullPrice =
      appData.screenPrice +
      appData.servicePricesPercent +
      appData.servicePricesNumber;

    appData.servicePercentPrice =
      appData.fullPrice * (1 - appData.rollback / 100);
  },
};

appData.init();
