import LoadMoreBtn from '../js/components/101-load-more-btn';
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
  //loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',

  hidden: false,
});
console.log(loadMoreBtn);

refs.searchForm.addEventListener('submit', onSearch);

loadMoreBtn.refs.button.addEventListener('click', fetchArticles); // Поменяли onLoadMore на fetchArticles
// refs.loadMoreBtn.addEventListener('click', onLoadMore);

const newsApiService = new NewsApiServise();
// const searchQuery =''

function onSearch(e) {
  e.preventDefault();

  newsApiService.query = e.currentTarget.elements.query.value;
  if (newsApiService.query === '') {
    return alert('Please fill form');
  }

  //Кнопка загрузки показывается и сразу переходит в состоян disable (btn-disabled, "ЗАГРУЖАЕМ"б и показываем spinner (remove class is-hiden)
  loadMoreBtn.show();
  // loadMoreBtn.disable();

  //При сабмите формы свойство Page сбрасываем на 1 -ую страницу для поиска
  newsApiService.resetPage();
  clearArticlescontainer();

  // Это уже не надо (задваивание кода) меняем на функцию fetchArticles
  // loadMoreBtn.disable();
  // newsApiService.fetchArticles().then(articles => {
  //   clearArticlescontainer(); // вынесли выше
  //   renderEvents(articles);
  //   // Если fetch успешный активируем опять кнопке показать ещё
  //   loadMoreBtn.enable();
  // });

  fetchArticles()
  // .then(articlesData => console.log(articlesData));
}
// Это уже не надо (задваивание кода) меняеи на Фу fetchArticles
// function onLoadMore() {
//   loadMoreBtn.disable();
//   newsApiService.fetchArticles().then((artic)=> {
//     renderEvents(artic)
//     loadMoreBtn.enable();
//   });
// }

function fetchArticles(){
  loadMoreBtn.disable();
  newsApiService.fetchArticles().then((artic)=> {
    renderEvents(artic)
    loadMoreBtn.enable();
  });
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
