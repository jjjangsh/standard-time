import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock.js";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    if (selectedPokemon.length >= 6) {
      alert("포켓몬은 최대 6마리만 추가할 수 있습니다.");
    } else {
      setSelectedPokemon([...selectedPokemon, pokemon]);
    }
  };

  const removePokemon = (pokemon) => {
    setSelectedPokemon((prev) => prev.filter((p) => p.id !== pokemon.id));
  };

  return (
    <div>
      <Dashboard
        selectedPokemon={selectedPokemon}
        removePokemon={removePokemon}
      />
      <PokemonList
        pokemonList={MOCK_DATA}
        addPokemon={addPokemon}
        selectedPokemon={selectedPokemon}
      />
    </div>
  );
};

export default Dex;
