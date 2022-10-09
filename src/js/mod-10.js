//import pokemonCardTpl from '../templates/pokemon-card.hbs'
import API from '../js/api-service'
import REFS from '../js/get-refs'

// const refs = {
//   cardContainer: document.querySelector('.js-card-container'),
//   searchForm: document.querySelector('.js-search-form'),
// };

const refs = REFS()

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const query = form.elements.query.value;
  API.fetchPokemon(query)
    .then(renderPokemomByCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

// function fetchPokemon(pokemonId) {
//     const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`

//   return fetch(url).then(
//     responce => responce.json()
//   );
// }

function renderPokemomByCard(pokemon) {
  refs.cardContainer.innerHTML = `<div class="card">
    <div class="card-image-top">
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    </div>
    <div class="card-body">
        <h2 class="card-title">Имя - ${pokemon.name}</h2>
        <p class="card-text">Вес - ${pokemon.weight}</p>
        <p class="card-text">Рост - ${pokemon.height}</p>
        <p class="card-text">Умения</p>
         <ul class="list-group">
         <each ${pokemon.abilities}>
             <li class='list-group-item'>${pokemon.ability}</li>
        </each>
         </ul>
    </div>
    </div>`;
}

 function onFetchError(err){
    console.log(err)
    alert('Что то пошло не так')
 } 
    
