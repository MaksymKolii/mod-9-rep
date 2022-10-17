const BASE_URL = 'http://localhost:4040';

const newBook = {
  title: ' по CSS',
  author: 'МаксимKKK',
  genres: ['CSS'],
  rating: 9.01,
};

async function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  const responce = await fetch(`${BASE_URL}/books`, options);
  const newBook = await responce.json();
  return newBook;
}

// async function addBookAndUpdateUI(){
//     try {
//         const book = await addBook({})
//         console.log(book);

//     } catch (error) {
//         console.log(error);
//     }
// }
//addBookAndUpdateUI()
//addBook(newBook).then(x=>console.log(x)).catch()

async function fetchBooks() {
  const responce = await fetch(`${BASE_URL}/books`);
  const book = await responce.json();
  return book;
}

async function fetchBooksByID(bookId) {
  const responce = await fetch(`${BASE_URL}/books/${bookId}`);
  const book = await responce.json();
  return book;
}

async function removeBooks(bookId) {
  const url = `${BASE_URL}/books/${bookId}`;
  const options = {
    method: 'DELETE',
  };
  const responce = await fetch(url, options);
  const book = await responce.jason();
  return book;
}

async function updateBook(update, bookId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };
  const responce = await fetch(`${BASE_URL}/books/${bookId}`, options);
  const updatrdbook = await responce.json();
  return updateBook;
}
