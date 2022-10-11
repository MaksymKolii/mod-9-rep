[document.querySelector(".js-search-form"),document.querySelector(".js-articles-container")][0].addEventListener("submit",(function(e){e.preventDefault(),fetch("https://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page1",{headers:{Authorization:"6be54aba098d4ee4bc21992dc9b3c0d5"}}).then((e=>e.json())).then(console.log())}));
//# sourceMappingURL=101.8d9bfa88.js.map
