const BASE_URL ='http://localhost:4040'

function removeBooks(bookId){

    const url = `${BASE_URL}/books/${bookId}`
    const options = {
        "method": "DELETE",
    }
    return fetch(url, options).then(resolve => resolve.jason())
}
removeBooks(9)
removeBooks(11)