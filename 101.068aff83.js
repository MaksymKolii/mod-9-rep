!function(){const e={searchForm:document.querySelector(".js-search-form"),articlesContainer:document.querySelector(".js-articles-container"),loadMoreBtn:document.querySelector('[data-action="load-more"]')};e.searchForm.addEventListener("submit",(function(e){e.preventDefault(),t.query=e.currentTarget.elements.query.value,t.resetPage(),t.fetchArticles().then(r)})),e.loadMoreBtn.addEventListener("click",(function(e){e.preventDefault(),t.fetchArticles().then(r)}));const t=new class{fetchArticles(){const e=`https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page${this.page}`;return fetch(e,{headers:{Authorization:"6be54aba098d4ee4bc21992dc9b3c0d5"}}).then((e=>e.json())).then((e=>(console.log(e),this.incrementPage(),e.articles)))}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}constructor(){this.searchQuery="",this.page=1}};function r(t){const r=t.map((({url:e,urlToImage:t,title:r,author:n,description:a})=>`\n        <li>\n        <a href="${e}" target="blank" rel="noopener noreferrer">\n        <article>\n      <img src='${t}' alt='' width='480'>\n      <h2>${r}</h2>\n      <p>Posted by:${n}</p>\n      <p>${a}</p>\n      </article>\n      </a>\n      </li>`)).join("");e.articlesContainer.insertAdjacentHTML("beforeend",r)}}();
//# sourceMappingURL=101.068aff83.js.map
