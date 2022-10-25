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

//  <p>Genres: ${genres.map(genr=>genr)}</p>

//*  Занятие в Аленой =========================================================================================================================
const fetchBtn = document.querySelector('.fetch');
const list = document.querySelector('.list');
const addBtn = document.querySelector('.add');
const formWrapper = document.querySelector('.form-wrapper');

addBtn.style.display = 'none';
const BASE_URL = 'http://localhost:4040';

fetchBtn.addEventListener('click', getBooks);

function getBooks() {
  fetch(`${BASE_URL}/books`)
    .then(responce => responce.json())
    .then(books => {
      // const arr = books.genres.map(gen=>gen)
      const markup = books
        .map(
          ({ id, title, author, genres, rating }) => `
    <li id=${id}>ID: ${id}
    <p>Book Title:<span class='title'>${title}</span></p>
    <p>Author:<span class='author'>${author}</span></p>  
    <p>Rating:<span class ='rating'> ${rating}</span></p> 
    <button class="delete">Delete</button>
    <button class="edit">Edit</button>
    </li>
    `
        )
        .join('');

      list.innerHTML = markup;
      fetchBtn.style.display = 'none';
      addBtn.style.display = 'inline';

      const delBtns = document.querySelectorAll('.delete');
      delBtns.forEach(btn => {
        btn.addEventListener('click', deleteBook);
      });

      const editBtns = document.querySelectorAll('.edit');
      editBtns.forEach(btn => btn.addEventListener('click', editBook));
    })
    .catch(err => console.log(err));
}

addBtn.addEventListener('click', addBook);

function addBook() {
  formWrapper.innerHTML = createFormMarkup();
  const form = document.querySelector('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const book = {
      title: e.target.elements.title.value,
      author: e.target.elements.author.value,
      rating: e.target.elements.rating.value,
    };

    const options = {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    fetch(`${BASE_URL}/books`, options)
      .then(() => {
        getBooks();
        form.innerHTML = '';
      })
      .catch(error => console.log(error));
  });
}

function createFormMarkup(title = '', author = '', rating = '') {
  return `<form>
    <label>
    Title:
    <input type = 'text' name='title' value="${title}"/>
    </label>
    <label>
    Author:
    <input type = 'text' name='author' value="${author}"/>
    </label>
    <label>
    Rating:
    <input type = 'text' name='rating' value="${rating}"/>
    </label>
    <button>Save button</button>
    </form>
    `;
}

function deleteBook(e) {
  const id = e.target.parentNode.id;
  fetch(`${BASE_URL}/books/${id}`, {
    method: 'DELETE',
  })
    .then(() => {
      console.log('Post deleted');
      getBooks();
    })
    .catch(error => console.log('Error:', error));
}


function editBook(e){
    const id = e.target.parentNode.id;

    const title = e.target.parentNode.querySelector('.title').textContent;
    console.log(title);
     const author = e.target.parentNode.querySelector('.author').textContent;
    const rating = e.target.parentNode.querySelector('.rating').textContent;
  
    formWrapper.innerHTML = createFormMarkup(title, author, rating);

    const form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      const book = {
        title: e.target.elements.title.value,
        author: e.target.elements.author.value,
        rating: e.target.elements.rating.value,
      };
  
      const options = {
        method: 'PATCH',
        body: JSON.stringify(book),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      };
  
      fetch(`${BASE_URL}/books/${id}`, options)
        .then(() => {
          getBooks();
          form.innerHTML = '';
        })
        .catch(error => console.log(error));
    });

}