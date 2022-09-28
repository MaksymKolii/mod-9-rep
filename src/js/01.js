
const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
let timerId = null;

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    console.log(`I love async JS!  ${Math.random()}`);
  }, 1000);
});


stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  console.log(`Interval with id ${timerId} has stopped!`);
});

// const date = new Date();

// console.log(date);
// console.log(typeof(date));
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(date.toString());
// console.log(typeof(date.toString()));
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(new Date(0));
// // "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

// console.log(new Date(15000));
// // "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"

const date = new Date();
console.log("Date: ", date);

// Возвращает день месяца от 1 до 31
console.log("getDate(): ", date.getDate());

// Возвращает день недели от 0 до 6
console.log("getDay(): ", date.getDay());

// Возвращает месяц от 0 до 11
console.log("getMonth(): ", date.getMonth());

// Возвращает год из 4 цифр
console.log("getFullYear(): ", date.getFullYear());

// Возвращает час
console.log("getHours(): ", date.getHours());

// Возвращает минуты
console.log("getMinutes(): ", date.getMinutes());

// Возвращает секунды
console.log("getSeconds(): ", date.getSeconds());

// Возвращает миллисекунды
console.log("getMilliseconds(): ", date.getMilliseconds());


// Возвращает день месяца от 1 до 31
console.log("getUTCDate(): ", date.getUTCDate());

// Возвращает день недели от 0 до 6
console.log("getUTCDay(): ", date.getUTCDay());

// Возвращает месяц от 0 до 11
console.log("getUTCMonth(): ", date.getUTCMonth());

// Возвращает год из 4 цифр
console.log("getUTCFullYear(): ", date.getUTCFullYear());

// Возвращает час
console.log("getUTCHours(): ", date.getUTCHours());

// Возвращает минуты
console.log("getUTCMinutes(): ", date.getUTCMinutes());

// Возвращает секунды
console.log("getUTCSeconds(): ", date.getUTCSeconds());

// Возвращает миллисекунды
console.log("getUTCMilliseconds(): ", date.getUTCMilliseconds());