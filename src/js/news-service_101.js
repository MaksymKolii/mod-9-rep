export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    // console.log(this);
    const options = {
      headers: {
        Authorization: '6be54aba098d4ee4bc21992dc9b3c0d5',
      },
    };

    const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page${this.page}`;
    return fetch(url, options)
      .then(resolve => resolve.json())
      .then(data => {
        console.log(data);
        //По результату Успешного запроса - увеличиваем страницу на 1 
        this.incrementPage()
        return data.articles
      });
  }
  incrementPage(){
    this.page += 1;
  }

  resetPage(){
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
