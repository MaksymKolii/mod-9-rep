import NewsApiServise from '../js/news-service_101';
// Загружаем статьи при сабмите формы
// Загружаем страницы при клике на кнопку "Загрузить ещё"
// Обновляем страницу и параметры запроса
// рисуеи статьи
// Сброс значений при новом критерии поиска

/* https://newsapi.org/v2/everything?q=Apple&from=2022-10-11&sortBy=popularity&apiKey=API_KEY' */
const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

const newsApiService = new NewsApiServise();
// let searchQuery =''

function onSearch(e) {
  e.preventDefault();

  
  newsApiService.query = e.currentTarget.elements.query.value;
  //При сабмите формы свойство Page сбрасываем на 1 -ую страницу для поиска
  newsApiService.resetPage();
  newsApiService.fetchArticles().then( articles => {
    
    clearArticlescontainer();
    renderEvents(articles)});
  // .then(articlesData => console.log(articlesData));
}

function onLoadMore(e) {
  e.preventDefault();

  newsApiService.fetchArticles().then(renderEvents);
}

function renderEvents(events) {
  let markup = events
    .map(({ url, urlToImage, title, author, description }) => {
      return `
        <li>
        <a href="${url}" target="blank" rel="noopener noreferrer">
        <article>
      <img src='${urlToImage}' alt='' width='480'>
      <h2>${title}</h2>
      <p>Posted by:${author}</p>
      <p>${description}</p>
      </article>
      </a>
      </li>`;
    })
    .join('');
  refs.articlesContainer.insertAdjacentHTML('beforeend', markup);
}

function clearArticlescontainer() {
  refs.articlesContainer.innerHTML = '';
}
