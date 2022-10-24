// Т.к. мы установили json-server  в документации написано запустить json-server --watch db.json
// мы в package.jsone в поле "scripts"  создадим элемент например с именем "server" и пропишем то что хотят json-server --watch db.json
// Итого будет в package.jsone ---   "server":"json-server --watch db.json"

// Далее вызываем npm run server

//import './components/r-get'
//import './components/c-post'
// import './components/u-patch'
//import './components/d-delete'
//import './components/asynk-crud'

// http://fecore.net.ua/books/m5ph3r-javascript/module-82/scope.html#hoisting

// function getFruit(name) {
//   const fruits = {
//     apple: '🍎',
//     citrus: '🍋',
//     banana: '🍌',
//     grapes: '🍇',
//   };

//   return new Promise((resolve, reject) =>
//     setTimeout(() => resolve(fruits[name]), 500)
//   );
// }
// async function aMakeSmoothie() {
//   try {
//     console.time('aMakeSmoothie');

//     const grapes = getFruit('grapes')
//     const citrus = getFruit('citrus')
//     const apple = getFruit('apple')

//     const fruits = await Promise.all([grapes,citrus, apple])
//     console.log(fruits);
//     console.timeEnd('aMakeSmoothie')
//     return fruits

//     // const grapes = await getFruit('grapes');
//     // const citrus = await getFruit('citrus');
//     // const apple = await getFruit('apple');
//     // console.log(grapes);
//     // console.log(citrus);
//     // console.log(apple);
//     // console.timeEnd('aMakeSmoothie');


//   } catch (error) {
//     console.log('Ошибка');
//   }
// }

// aMakeSmoothie().then(data =>console.log(data))

//*  Занятие в Аленой =========================================================================================================================
const fetchBtn = document.querySelector('.fetch')