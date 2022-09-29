//const { join } = require("lodash");

const initialData = [
  {
    id: '1',
    title: `Apple. Эволюция компьютера`,
    author: `Владимир Невзоров`,
    img: `https://bukva.ua/img/products/449/449532_200.jpg`,
    plot: `Богато иллюстрированный хронологический справочник по истории компьютеров, в котором увлекательно 
    и в структурированном виде изложена информация о создании и развитии техники Apple на фоне истории 
    персональных компьютеров в целом.
    В книге даны описания десятков наиболее значимых моделей устройств как Apple, так и других производителей, 
    сопровождающиеся большим количеством оригинальных студийных фотографий.
    Книга предназначена для широкого круга читателей, интересующихся историей электроники. 
    Она также может послужить источником вдохновения для дизайнеров, маркетологов и предпринимателей.`,
  },
  {
    id: '2',
    title: `Как объяснить ребенку информатику`,
    author: `Кэрол Вордерман`,
    img: `https://bukva.ua/img/products/480/480030_200.jpg`,
    plot: `Иллюстрированная энциклопедия в формате инфографики о технических, социальных и культурных аспектах 
    в информатике. Пошагово объясняет, как детям максимально эффективно использовать компьютеры и интернет-сервисы, 
    оставаясь в безопасности. 
    Книга рассказывает обо всем: от хранения данных до жизни в интернет-пространстве, 
    от программирования до компьютерных атак. О том, как компьютеры функционируют, о современном программном 
    обеспечении, устройстве Интернета и цифровом этикете. Все концепты - от хакера до биткоина - 
    объясняются наглядно с помощью иллюстраций и схем.`,
  },
  {
    id: '3',
    title: `Путь скрам-мастера. #ScrumMasterWay`,
    author: `Зузана Шохова`,
    img: `https://bukva.ua/img/products/480/480090_200.jpg`,
    plot: `Эта книга поможет вам стать выдающимся скрам-мастером и добиться отличных результатов с вашей командой. 
    Она иллюстрированная и легкая для восприятия - вы сможете прочитать ее за выходные, а пользоваться полученными 
    знаниями будете в течение всей карьеры.
    Основываясь на 15-летнем опыте, Зузана Шохова рассказывает, какие роли и обязанности есть у скрам-мастера, 
    как ему решать повседневные задачи, какие компетенции нужны, чтобы стать выдающимся скрам-мастером, 
    какими инструментами ему нужно пользоваться.`,
  },
];

localStorage.setItem('books', JSON.stringify(initialData));
// При перезагрузки страницы наш скрипт читается сверху вниз и инициализируется заново, он доходит до 44 строки и перезаписывает и
// все равно есть там что т о или нет, вся логика начинается с нуля
// Для примера мы хотим работать не с initialData хранилищем, а записать данные в localStorage что потом можно было add,remowe,edit их




// * let PARSED_LOCAL_STORAGE = JSON.parse(localStorage.getItem('books'));

// 1) Задача в руте (корне) создать 2 Дива и дбавить им классы
const leftDiv = document.createElement('div');
const rightDiv = document.createElement('div');
leftDiv.classList.add('left');
rightDiv.classList.add('right');

//2) добавляем в root Но сначала надо получить ссылку на родителя
const rootDiv = document.querySelector('#root');
rootDiv.append(leftDiv, rightDiv);

const title = document.createElement('h1');
title.textContent = 'Library';
const list = document.createElement('ul');
const addBtn = document.createElement('button');
addBtn.textContent = 'ADD';
leftDiv.append(title, list, addBtn);

// 3) при кликании на название книги на (р-шку) справа должна появляться развернутая информация
// нужно создать слушателей для наших р -шек
// чтоб удобно было обращаться к р-шке  вписываем ей класс class ="book-title" в шаблон

function renderBooksList() {
  const books = JSON.parse(localStorage.getItem('books'))
  // Фу парсит данные из локальнюхранилища, пробегается по ним map-ом, на основании каждого из объекта в массиве созд.разметку
  const markup = books.map(({ title, id }) => {
    return `<li data-id ='${id}'><p class = "book-title">${title}</p><button>Edit</button><button class ="delete">Delete</button></li>`;
  }).join(''); // преобразуем в строку .join('');
// Сначала очищаем перед вставкой, чтоб не было задвоения
  list.innerHTML =''
  // добавляем разметку в наш список (list - пустой тег ul, который мы заапендили выше)
  list.insertAdjacentHTML('afterbegin', markup);
  // получаем ссылки на все р-шки(названия книг) и добавляем каждой из них слушателя, обработчик события click и колбек фу renderPreview
  const bookTitles = document.querySelectorAll('.book-title');
  bookTitles.forEach(el => {
    el.addEventListener('click', renderPreview);
  });

  const delBtns = document.querySelectorAll('.delete');
  delBtns.forEach(el => {
    el.addEventListener('click', deleteBook);
  });
}

// вызываем фу чтоб создался списочек книг
renderBooksList();

// 4) чтоб отображать превьюшку нужной книги нужно ее идентифицировать и мы добавляем датаАтрибут data-id =''
// Через e.target ищем р-шку, потом ее родителя (там где id) --  e.target.parentNode
// и у этой li-шки через датаАтрибут dataset.id считываем id  (e.target.parentNode.dataset.id)

// 5 в renderPreview нам нужно распарсить наш массив
function renderPreview(e) {
  const books = JSON.parse(localStorage.getItem('books'))
  const bookId = e.target.parentNode.dataset.id;
  // по полученному id-ку находим нашу книгу (с которой мы взаимодействуем кликая на p-шку в массиве
  const book = books.find(({ id }) => id === bookId);
//созд перем markup в котор записыв результ вызова фу createPreviewMarkup ( с нашей найденной книгой - book)
  const markup = createPreviewMarkup(book)
  console.log(markup);
  rightDiv.innerHTML = markup;
}

// Фу принимает объект книги и возвращает разметку для Превьюшки
function createPreviewMarkup({ title, author, img, plot }) {
  return `<div>
<h2>${title}</h2>
<p>${author}</p>
<img src ='${img}'/>
<p>${plot}</p>
</div>`;
}

// function findById(e){
//   const bookId = e.target.parentNode.dataset.id;
//   // по полученному id-ку находим нашу книгу (с которой мы взаимодействуем кликая на p-шку в массиве
//   return PARSED_LOCAL_STORAGE.find(({ id }) => id === bookId);
// }
// findById(e);

// Чтоб реализовать delete Добавляем в размутку на кнопку class ="delete" и в той же Фу renderBooksList и добавляем 
// каждой из них слушателя, обработчик события click и колбек фу

function deleteBook(e){

  const books = JSON.parse(localStorage.getItem('books'))
const bookId = e.target.parentNode.dataset.id;
//чтоб удалить выбранный елемент мы используем метод который возвращает массив С (либо в нашем случае без) выбранным(и) элемен
const filteredArray = books.filter(({id}) => id!==bookId)


// Теперь нам надо Перезаписать localStorage чтоб обновить
localStorage.setItem('books', JSON.stringify(filteredArray));
// И вызвать фу renderBooksList которая заново созд.разметку

// *важно-вызав этой фу к старой разметке добавляет новую => в фу renderBooksList надо добавить сначала очистку list.innerHTML =''
renderBooksList()
}