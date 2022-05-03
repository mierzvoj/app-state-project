export interface PokemonItem {
  name: string;
  url: string;
}

function Pokemon(pokemonData: PokemonItem) {
  return <div>{pokemonData.name}</div>;
}

export default Pokemon;
