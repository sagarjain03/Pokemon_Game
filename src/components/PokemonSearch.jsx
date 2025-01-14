import React, { useState } from "react";
import axios from "axios";

const PokemonSearch = ({ setPokemon, player }) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`
      );
      console.log(response.data);
      
      setPokemon(response.data);
      setError("");
    } catch (err) {
      setError("Pokémon not found!");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-semibold">{player}</h2>
      <input
        type="text"
        placeholder="Enter Pokémon Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-2 py-1 rounded my-2"
      />
      <button
        onClick={fetchPokemon}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Select
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default PokemonSearch;
