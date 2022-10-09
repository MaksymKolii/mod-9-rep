const BASE_URL = 'https://pokeapi.co/api/v2'

function fetchPokemon(pokemonId) {
    const url = `${BASE_URL}/pokemon/${pokemonId}`

  return fetch(url).then(
    responce => responce.json()
  );
}

export default {fetchPokemon}