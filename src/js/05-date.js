// const date = new Date()
// console.dir(date);

// Создает ОБЪЕКТ new Date.getTime() с методами и т.д.
// Создает просто значение времени как число  Date.now();

// const day1 = Date.now();
// console.log('day1',day1);
// setTimeout(()=>{
//     const day2 = Date.now();
//     console.log('day1',day1);
//     console.log('day2',day2);

// console.log(day2-day1);

// }, 3000)

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

const timer = {
  intervalId: null,
  isActive: false,
  init() {
    const time = convertMs(0);
    updateClockFace(time);
  },
  start() {
    if (this.isActive) {
      return;
    }
    const startTime = Date.now();
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      //ниже уже не надо и мы преобразовываем
      const { days, hours, minutes, seconds } = convertMs(deltaTime);
      console.log(`${days}:${hours}:${minutes}:${seconds}`);

      const time = convertMs(deltaTime);
      updateClockFace(time);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

timer.init();

//! ----------------------------------------------------------------------------------------------------------------------------------
//*  Создадим класс Timer на основе нашего объекта Этот класс будет предоставлять логику нашего таймера, наш класс не должен ни-
// чего знать про Фу updateClockFace (обновление интерфейса-вставка данных в разметку) Если хотим обновлять интерфейс на каждом тикании
//можем в Класс передать Фу обновл, положим ее в объект настроек const timer = new Timer({ onTicTac: updateClockFace}) т.е. создали
// свойство onTicTac в которое передали ссылку на внешнюю функцию onClockFace. Класс будет знать, что ему может передадут св-во
// onTicTac. Ф!! Функции addLeadingZero() и convertMs() сделаем методами класса т.к.они не отвечают за рисование Интерфейса

// class Timer {
//   constructor({ onTicTac }) {
//     this.intervalId = null;
//     this.isActive = false;
//     this.onTicTac = onTicTac;
//     this.init();
//   }

//   // для того чтоб сразу появлялось табло ( а не тогда, кокда на стпарт кликнули)
//   init(){
//     const time = this.convertMs(0);
//     this.onTicTac(time);
//   }
//   start() {
//     if (this.isActive) {
//       return;
//     }
//     const startTime = Date.now();
//     this.isActive = true;
//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;

//       const time = this.convertMs(deltaTime);
//       //ссылка на ФУ updateClockFace(time)
//       this.onTicTac(time);
//     }, 1000);
//   }
//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
// // Для обнуления  при стопе
//     const time = this.convertMs(0);
//       this.onTicTac(time);
//   }

//   addLeadingZero(value) {
//     return String(value).padStart(2, '0');
//   }

//   convertMs(ms) {
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;
//     const days = this.addLeadingZero(Math.floor(ms / day));
//     const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
//     const minutes = this.addLeadingZero(
//       Math.floor(((ms % day) % hour) / minute)
//     );
//     const seconds = this.addLeadingZero(
//       Math.floor((((ms % day) % hour) % minute) / second)
//     );

//     return { days, hours, minutes, seconds };
//   }
// }

// const timer = new Timer({
//   onTicTac: updateClockFace,
// });
//!====================================================================================================================================


refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer))

// ?Повесил disabled или снимаю для домашки 
// refs.startBtn.addEventListener('click', () => {
//   refs.startBtn.disabled = true;
//   refs.stopBtn.disabled = false;
//   timer.start();
// });

// refs.stopBtn.addEventListener('click', () => {
//   refs.startBtn.disabled = false;
//   refs.stopBtn.disabled = true;

//   timer.stop();
// });

function updateClockFace({ days, hours, minutes, seconds }) {
  refs.clockface.textContent = `${days}:${hours}:${minutes}:${seconds}`;
}

// Принимает число, приводит к строке и добавляет в значение 0,  если число меньше 2-х знакв
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}