const books = document.querySelector(".books");
const book = document.querySelectorAll(".book");
const bookLi = document.getElementsByTagName("li");
const chaptersTwo = book[0].querySelectorAll("li");
const chaptersFive = book[5].querySelectorAll("li");

//Удалить рекламу со страницы
const adv = document.querySelectorAll(".adv");
adv[0].remove();

//Заменить картинку заднего фона на другую из папки image
document.body.style.backgroundImage = "url('image/sad.jpg')";
//Восстановить порядок книг
function sortBook() {
  book[1].after(book[0]);
  books.append(book[4]);
  books.append(book[3]);
  books.append(book[5]);
  books.append(book[2]);
}
sortBook();

//Исправить заголовок в книге
book[4].querySelector("h2 a").textContent =
  "Книга 3. this и Прототипы Объектов";

//Добавить главу
book[2].querySelector("ul > li").innerHTML = "Глава 8: За пределами ES6";
bookLi[56].before(bookLi[47]);

function chapters() {
  chaptersTwo[10].before(chaptersTwo[2]);
  chaptersTwo[9].before(chaptersTwo[7]);
  chaptersTwo[4].before(chaptersTwo[6], chaptersTwo[8]);
  chaptersFive[3].before(chaptersFive[9]);
  chaptersFive[6].before(chaptersFive[2]);
  chaptersFive[8].before(chaptersFive[5]);
}
chapters();

//console.log(bookLi);
