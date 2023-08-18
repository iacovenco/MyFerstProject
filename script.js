let title = "lesson02";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 1312;
let rollback = 99;
let fullPrice = 90;
let adaptive = true;

console.log(title, fullPrice, adaptive);
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log("Стоимость разработки сайта " + fullPrice + " рублей");
/* 
console.log(screens.toLowerCase());
console.log(screens.split(","));     
 Не совсем понял нужно и разбить в масив,
 и привести к нижнему регистру в одном выводе или в отдельных. 
*/
console.log(screens.toLowerCase().split(","));
console.log(fullPrice * (rollback / 100)); //хочу быть посредником)
