// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;

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


const makeOrder = dish => {
  const DELAY = 1000;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const passed = Math.random() > 0.5;

      if (passed) {
        resolve('makeOrder Вот Ваше блюдо');
      }
      reject('makeOrder Извините закончились продукты');
    }, DELAY);
  });
};

makeOrder('пирожок').then(onMakeOrderSuccess).catch(onMakeOrderError);


// const makeOrder1 = (dish, onResolved, onError) => {
//     return new Promise((resolve, reject) => {

//         const passed = Math.random() > 0.5;
  
//         if (passed) {
//           resolve('Вот Ваше блюдо');
//         }
//         reject('Извините закончились продукты');
    
//     });
//   };
//   makeOrder1('пирожок').then(onMakeOrderSuccess).catch(onMakeOrderError);

const makeOrder2 = (dish, onResolved, onError) => {
    return new Promise((resolve, reject) => {

        const passed = Math.random() > 0.5;
  
        if (passed) {
          resolve(`makeOrder2 Вот Ваше блин - блюдо ${dish}`);
        }
        reject('makeOrder2 Извините закончились продукты');
    
    });
  };
  makeOrder2('пирожок').then(onMakeOrderSuccess2).catch(onMakeOrderError2);

function onMakeOrderSuccess(res) {
  console.log('onMakeOrderSuccess');
  console.log(`${res}`);
}

function onMakeOrderError(error) {
  console.log('onMakeOrderError2');
  console.log(error);
}

function onMakeOrderSuccess2(res) {
    console.log('onMakeOrderSuccess2');
    console.log(`${res}`);
  }
  
  function onMakeOrderError2(error) {
    console.log('onMakeOrderError');
    console.log(error);
  }
  