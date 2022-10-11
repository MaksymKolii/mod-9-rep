// Загружаем статьи при сабмите формы
// Загружаем страницы при клике на кнопку "Загрузить ещё"
// Обновляем страницу и параметры запроса
// рисуеи статьи
// Сброс значений при новом критерии поиска

/* https://newsapi.org/v2/everything?q=Apple&from=2022-10-11&sortBy=popularity&apiKey=API_KEY' */
const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]')
};

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore)

function onSearch(e) {
  e.preventDefault();
  const options = {
    headers: {
      Authorization: '6be54aba098d4ee4bc21992dc9b3c0d5',
    },
  };

  const searchQuery = e.currentTarget.elements.query.value;

  const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=5&page1`;
  fetch(url, options)
    .then(resolve => resolve.json())
    .then(console.log());
}
