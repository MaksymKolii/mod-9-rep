
  /* https://newsapi.org/v2/everything?q=Apple&from=2022-10-11&sortBy=popularity&apiKey=API_KEY' */
const refs={
    searchForm: document.querySelector('.js-search-form'),

   articlesContainer: document.querySelector('.js-articles-container'),
}

refs.searchForm.addEventListener('submit', onSearch)

function onSearch(e){
    e.preventDefault()
    const options ={

        headers:{
            Authorization: '6be54aba098d4ee4bc21992dc9b3c0d5'
        }
    }
    
  
    const url = 'https://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page1';
    fetch(url, options)
    .then(resolve => resolve.json())
    .then(console.log())
}