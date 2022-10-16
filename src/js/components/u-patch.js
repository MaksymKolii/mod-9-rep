const BASE_URL ='http://localhost:4040'

function updateBook(update, bookId){
    const options ={
        method: 'PATCH',
        headers: {
    
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(update)
    }
    return fetch(`${BASE_URL}/books/${bookId}`, options).then(responce =>responce.json())
}

const id =14
const updatedOptions = {
    "title": "Новая большая тестовая книга C++",
    "author": "MaSHA",
    "genres": [
      "C","C#","C++"
    ],
}
//  updateBook({
//     "title": "Новая большая тестовая книга повсему",
//     "genres": [
//       "html","C#","JS"
//     ],
// }, 1)

// updateBook(updatedOptions, id)