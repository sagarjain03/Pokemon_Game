import  { useState } from "react";
import PokemonSearch from "./components/PokemonSearch";
import BattleArena from "./components/BattleArena";

const App = () => {
  const [pokemon1, setPokemon1] = useState(null);
  const [pokemon2, setPokemon2] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Pokémon Battle Simulator</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <PokemonSearch setPokemon={setPokemon1} player="Player 1" />
        <PokemonSearch setPokemon={setPokemon2} player="Player 2" />
      </div>
      {pokemon1 && pokemon2 && (
        <BattleArena pokemon1={pokemon1} pokemon2={pokemon2} />
      )}
    </div>
  );
};

export default App;
