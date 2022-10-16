const BASE_URL ='http://localhost:4040'

const newBook =  {
    "title": "Тестовая книга по CSS",
    "author": "Максим",
    "genres":["CSS"],
    "rating": 9
}

const options ={
    method: 'POST',
    headers: {

        "Content-Type": 'application/json',
    },
    body: JSON.stringify(newBook)
}
fetch(`${BASE_URL}/books`, options).then(responce =>responce.json()).then(console.log)