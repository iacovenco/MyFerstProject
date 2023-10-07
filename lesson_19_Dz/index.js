window.onload = () => {
  let timeOfDay = document.getElementById("timeDay");
  let currentDay = document.getElementById("currentDay");
  let currentTime = document.getElementById("currentTime");
  let daysToNewYear = document.getElementById("daysToNewYear");

  function updateTime() {
    let now = new Date();
    let hour = now.getHours();

    // Определение времени суток
    if (hour >= 5 && hour < 12) {
      timeOfDay.textContent = "Доброе утро";
    } else if (hour >= 12 && hour < 18) {
      timeOfDay.textContent = "Добрый день";
    } else if (hour >= 18 && hour < 24) {
      timeOfDay.textContent = "Добрый вечер";
    } else {
      timeOfDay.textContent = "Доброй ночи";
    }

    // Определение текущего дня
    let daysWeek = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];
    let day = now.getDay();
    currentDay.textContent = daysWeek[day];

    // Отображение текущего времени
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    currentTime.textContent = hours + ":" + minutes + ":" + seconds;

    // Расчет дней до нового года
    let newYear = new Date(now.getFullYear() + 1, 0, 1);
    let timeToNewYear = newYear - now;
    let daysToNewYearValue = Math.floor(timeToNewYear / (1000 * 60 * 60 * 24));

    daysToNewYear.textContent = daysToNewYearValue;
  }

  // Обновление времени каждую секунду
  setInterval(updateTime, 1000);

  // Инициализация времени при загрузке страницы
  updateTime();
};
