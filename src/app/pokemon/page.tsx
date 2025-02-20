"use client";
import { useState } from "react";
import Image from "next/image";
import { fetchPokemonData, PokemonData } from "./utils/fetchPokemon";

export default function PokemonFetcher() {
  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemonData, setPokemonData] = useState<PokemonData>();
  const [error, setError] = useState<string | null>(null);

  const imagePokemon = pokemonData?.sprites?.front_default;

  const handleFetch = async () => {
    try {
      setError(null);
      const data = await fetchPokemonData(pokemonName);
      setPokemonData(data);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        placeholder="Enter Pokémon Name"
        className="border p-2 rounded mb-2"
      />
      <button
        onClick={handleFetch}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Fetch Pokémon
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {imagePokemon && (
        <Image
          src={imagePokemon}
          alt={pokemonName}
          width={128}
          height={128}
          className="mt-4"
        />
      )}
    </div>
  );
}
