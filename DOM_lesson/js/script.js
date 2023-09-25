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

const inputElements = document.querySelectorAll(".main-total input[type=text]"); //
const selectElement = document.querySelectorAll(".main-controls__input"); //

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
    this.addTitle();

    startBtn.addEventListener("click", this.start);
    resetBtn.addEventListener("click", this.reset);
    buttonPlus.addEventListener("click", this.addScreenBlocks);
    inputRange.addEventListener("input", this.showRollback);
  },

  showResult: function () {
    total.value = this.screenPrice;
    totalCount.value = this.screenCount;
    totalCountOther.value =
      this.servicePricesPercent + this.servicePricesNumber;
    fullTotalCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
  },

  addRollback: function () {
    this.rollback = +inputRange.value;
  },

  showRollback: function () {
    spanRange.textContent = inputRange.value + "%";
  },

  addScreenBlocks: function () {
    let screens = document.querySelectorAll(".screen");
    let cloneScreen = screens[0].cloneNode(true);

    screens[screens.length - 1].after(cloneScreen);
  },

  addScreens: function () {
    let screens = document.querySelectorAll(".screen");
    this.screens = [];

    screens.forEach((screen, index) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;

      if (+select.value != 0 && +input.value != 0) {
        this.screens.push({
          id: index,
          name: selectName,
          price: +select.value * +input.value,
          count: input.value,
          isError: false,
        });
      } else {
        this.screens.push({
          id: index,
          name: selectName,
          price: +select.value * +input.value,
          count: input.value,
          isError: true,
        });
      }
    });
    for (let screen of this.screens) {
      if (screen.isError == true) {
        this.screens = [];
      }
    } // Блокировка всех input[type=text] и select элементов
    screens.forEach((screen) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");

      select.disabled = true;
      input.disabled = true;
    });
    // Скрытие кнопки "Рассчитать" и отображение кнопки "Сброс"
    startBtn.style.display = "none";
    resetBtn.style.display = "inline-block";
  },

  addServices: function () {
    this.servicesPercent = {};
    this.servicesNumber = {};

    otherItemsPercent.forEach((item) => {
      const check = item.querySelector('input[type="checkbox"]');
      const label = item.querySelector("label");
      const input = item.querySelector('input[type="text"]');

      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    });
    otherItemsNumber.forEach((item) => {
      const check = item.querySelector('input[type="checkbox"]');
      const label = item.querySelector("label");
      const input = item.querySelector('input[type="text"]');

      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addPrices: function () {
    this.screenCount = 0;
    this.screenPrice = 0;
    this.servicePricesNumber = 0;
    this.servicePricesPercent = 0;

    for (let screen of this.screens) {
      if (screen.isError == false) {
        this.screenPrice += +screen.price;
        this.screenCount += +screen.count;
      }
    }

    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }

    for (let key in this.servicesPercent) {
      this.servicePricesPercent +=
        this.screenPrice * (this.servicesPercent[key] / 100);
    }

    this.fullPrice =
      this.screenPrice + this.servicePricesPercent + this.servicePricesNumber;

    this.servicePercentPrice =
      this.fullPrice +
      (this.fullPrice - this.fullPrice * (1 - this.rollback / 100));
  },

  reset: function () {
    let screens = document.querySelectorAll(".screen");
    let checkbox = document.querySelectorAll('input[type="checkbox"]');
    checkbox.forEach((check) => {
      check.checked = false;
    });

    screens.forEach((screen, key) => {
      if (key == 0) {
        const select = screen.querySelector("select");
        const input = screen.querySelector("input");

        select.disabled = false;
        select.value = "";
        input.disabled = false;
        input.value = "";
        screen.disabled = false;
        screen.value = "";
      } else {
        screen.remove();
      }
    });

    inputRange.value = 0;
    spanRange.textContent = "0%";

    for (let i = 0; i < inputElements.length; i++) {
      inputElements[i].disabled = false;
      inputElements[i].value = "";
    }
    selectElement.selectedIndex = 0;
    // Скрытие кнопки "Сброс" и отображение кнопки "Рассчитать"
    resetBtn.style.display = "none";
    startBtn.style.display = "inline-block";
  },
};

appData.init();
