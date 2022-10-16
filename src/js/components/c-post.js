const BASE_URL ='http://localhost:4040'

//ОТЛИЧИЯ ОТ metoda GET -- mwthod. headers, body
const newBook =  {
    "title": "Тестовая книга по CSS",
    "author": "Максим",
    "genres":["CSS"],
    "rating": 9
}

function addBook(book){
    const options ={
        method: 'POST',
        headers: {
    
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(book)
    }
    return fetch(`${BASE_URL}/books`, options).then(responce =>responce.json())
}

function renderBook(book){
    console.log("Пришел ответ от бэкенда, можно рисовать");
    console.log(book);
}
addBook({"title": "Тестовая книга по HTML",
"author": "Jobs",
"genres":["html"],
"rating": 9.8}).then(renderBook)
.catch(error =>console.log(error))

// addBook({"title": "OOP книга по C++",
// "author": "lenin",
// "genres":["C++"],
// "rating": 9.9}).then(renderBook)