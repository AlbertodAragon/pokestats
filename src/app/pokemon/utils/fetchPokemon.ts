export interface PokemonData {
  sprites: {
    front_default: string;
  };
}

export const fetchPokemonData = async (
  pokemonName: string
): Promise<PokemonData> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
  );

  if (!response.ok) {
    throw new Error("Could not fetch resource");
  }

  return response.json();
};
