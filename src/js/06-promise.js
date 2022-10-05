// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;

// const { times } = require("lodash")

//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('Промис 1 выполнился успешно, с результатом(исполнен, fulfied)');
//     }

//     reject('Промис1 выполнился с ошибкой (отклонен, rejected)');
//   }, 1000);
// });

// console.log(promise);
// promise.then(
//   res => {
//     console.log(`${res}`);
//   },
//   err => {
//     console.log(err);
//   }
// );

// promise.then(onFulfield, onRejected)

// function onFulfield(res) {
//   console.log('onFulfield 2 -> onFulfield');
//   console.log(`${res}`);
// }

// function onRejected(error) {
//   console.log('onRejected 2 -> onRejected');
//   console.log(`${error}`);
// }

// //chaining
// // promise
// //   .then(onFulfield)
// //   .then(x => {
// //     console.log(x);
// //     //throw new Error('Ошибка во втором then')
// //     return 10;
// //   })
// //   .then(y => {
// //     console.log(y);
// //   })
// //   .catch(err => {
// //     console.log(err);
// //   })
// //   .finally(() => {
// //     console.log('Я выполнюсь в любом случае!!!');
// //   });

// const makeOrder = dish => {
//   const DELAY = 1000;
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const passed = Math.random() > 0.5;

//       if (passed) {
//         resolve('makeOrder Вот Ваше блюдо');
//       }
//       reject('makeOrder Извините закончились продукты');
//     }, DELAY);
//   });
// };

// makeOrder('пирожок').then(onMakeOrderSuccess).catch(onMakeOrderError);

// const makeOrder1 = (dish, onResolved, onError) => {
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     if (passed) {
//       resolve('Вот Ваше блюдо');
//     }
//     reject('Извините закончились продукты');
//   });
// };

// function onMakeOrderSuccess(res) {
//   console.log('onMakeOrderSuccess');
//   console.log(`${res}`);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }
// makeOrder1('пирожок').then(onMakeOrderSuccess).catch(onMakeOrderError);

// const makeOrder2 = (dish, onResolved, onError) => {
//   return Promise.resolve(`makeOrder2 Вот Ваше блин - блюдо ${dish}`);

//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     if (passed) {
//       resolve(`makeOrder2 Вот Ваше блин - блюдо ${dish}`);
//     }
//     reject('makeOrder2 Извините закончились продукты');
//   });
// };
// makeOrder2('пирожок').then(onMakeOrderSuccess2).catch(onMakeOrderError2);

// function onMakeOrderSuccess2(res) {
//   console.log('onMakeOrderSuccess2');
//   console.log(`${res}`);
// }

// function onMakeOrderError2(error) {
//   console.log('onMakeOrderError2');
//   console.log(error);
// }

// Покемоны  https://pokeapi.co/
// fetch('https://pokeapi.co/api/v2/pokemon/2')
//   .then(r => r.json())
//   .then(pokemon => {
//     console.log(pokemon);
//   });

//  [Промисы на примере бургер-вечеринки]( https://habr.com/ru/company/njx/blog/323066/)

// асинхронная операция
// function cookBurger(type) {}

// // обычная операция
// function makeMilkshake(type) {}

// function order(type) {
//   return new Promise(function (resolve, reject) {
//     var burger = cookBurger(type);
//     burger.ready = function (err, burger) {
//       if (err) {
//         return reject(Error('Error while cooking'));
//       }
//       return resolve(burger);
//     };
//   });
// }

const horses = [
  'Secretariat',
  'Eclipce',
  'West Australian',
  'Flying Fox',
  'Seabiscult',
];

console.log(
  '%c Заезд начался, ставки не принимаются!',
  'color: brown; font-size: 14px'
);

// run('Mango').then((x)=>{
//   console.log(x);
// })

// console.log(`Заезд окончен, принимаются ставки`
// // 'color: blue; font-size: 14px'
// );

function run(horse) {
  return new Promise(resolve => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

//const promises = horses.map(horse => run(horse))
const promises = horses.map(run);
//console.log(promises);
Promise.race(promises).then(({ horse, time }) => {
  console.log(
    `%c Победил ${horse}, финишировав за ${time}, времени`,
    'color: green; font-size: 14px'
  );
});

Promise.all(promises).then(x => {
  console.log(x);

  console.log(
    `%c Заезд окончен, принимаются ставки`,
    'color: blue; font-size: 14px'
  );
});

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
