import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import PokemonCard from "./PokemonCard";



const BattleArena = ({ pokemon1, pokemon2 }) => {
  const [log, setLog] = useState([]);
  const [winner, setWinner] = useState(null);
  const battleLogRef = useRef(null);

  // Function to animate battle log entries using GSAP
  const animateBattleLog = () => {
    gsap.fromTo(
      battleLogRef.current.children, 
      { opacity: 0, y: -20 }, 
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.5 }
    );
  };

  const calculateDamage = (attacker, defender) => {
    const attackPower = attacker.stats[1].base_stat; // Attack
    const defensePower = defender.stats[2].base_stat; // Defense
    const damage = Math.max(attackPower - defensePower / 2, 10); // Min 10
    return damage;
  };

  const simulateBattle = () => {
    let hp1 = pokemon1.stats[0].base_stat;
    let hp2 = pokemon2.stats[0].base_stat;

    const battleLog = [];
    let turn = 0;

    while (hp1 > 0 && hp2 > 0) {
      if (turn % 2 === 0) {
        const damage = calculateDamage(pokemon1, pokemon2);
        hp2 -= damage;
        battleLog.push(`${pokemon1.name} dealt ${damage} damage to ${pokemon2.name}`);
      } else {
        const damage = calculateDamage(pokemon2, pokemon1);
        hp1 -= damage;
        battleLog.push(`${pokemon2.name} dealt ${damage} damage to ${pokemon1.name}`);
      }
      turn++;
    }

    setLog(battleLog);
    setWinner(hp1 > 0 ? pokemon1.name : hp2 > 0 ? pokemon2.name : "Draw");
    animateBattleLog(); // Trigger the GSAP animation after the battle
  };

  useEffect(() => {
    if (log.length > 0) {
      animateBattleLog(); // Animations on log entries after battle log update
    }
  }, [log]);

  return (
    <div className="mt-6">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">Battle Arena</h2>
      <div className="flex justify-center gap-6 my-6">
        <PokemonCard pokemon={pokemon1} />
        <PokemonCard pokemon={pokemon2} />
      </div>
      <button
        onClick={simulateBattle}
        className="bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500 text-white px-6 py-3 rounded-full block mx-auto shadow-lg hover:scale-105 transition-all"
      >
        Start Battle
      </button>
      {log.length > 0 && (
        <div className="mt-6">
          <h3 className="font-bold text-xl">Battle Log:</h3>
          <ul className="list-disc pl-6" ref={battleLogRef}>
            {log.map((entry, index) => (
              <li key={index} className="text-gray-700 text-lg">
                {entry}
              </li>
            ))}
          </ul>
          <h3 className="font-bold text-center mt-4 text-2xl text-green-500">
            Winner: {winner}
          </h3>
        </div>
      )}
    </div>
  );
};

export default BattleArena;
