import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="border p-4 rounded bg-white shadow-md">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-24 h-24 mx-auto"
      />
      <h3 className="text-center font-bold capitalize">{pokemon.name}</h3>
      <div className="mt-2">
        <p>Type: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
        <p>HP: {pokemon.stats[0].base_stat}</p>
        <p>Attack: {pokemon.stats[1].base_stat}</p>
        <p>Defense: {pokemon.stats[2].base_stat}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
