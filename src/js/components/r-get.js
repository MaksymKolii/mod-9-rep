const BASE_URL ='http://localhost:4040'

function fetchBooks(){

    fetch(`${BASE_URL}/books`).then(responce =>responce.json()).then(console.log)
}

function fetchBooksByID(bookId){

    fetch(`${BASE_URL}/books/${bookId}`).then(responce =>responce.json()).then(console.log)
}

fetchBooks()
fetchBooksByID(2)