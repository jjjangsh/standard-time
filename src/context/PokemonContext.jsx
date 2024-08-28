import { createContext, useContext, useState } from "react";
import MOCK_DATA from "../mock";

const PokemonContext = createContext();

export function usePokemon() {
  return useContext(PokemonContext);
}

export function PokemonProvider({ children }) {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (e, pokemon) => {
    if (selectedPokemon.length >= 6) {
      alert("포켓몬은 최대 6마리만 선택할 수 있습니다.");
      return;
    }
    if (selectedPokemon.some((p) => p.id === pokemon.id)) {
      alert("이미 존재하는 포켓몬 입니다.");
    } else {
      setSelectedPokemon([...selectedPokemon, pokemon]);
    }
  };

  const removePokemon = (pokemon) => {
    setSelectedPokemon((prev) => prev.filter((p) => p.id !== pokemon.id));
  };

  return (
    <PokemonContext.Provider
      value={{
        selectedPokemon,
        addPokemon,
        removePokemon,
        pokemonList: MOCK_DATA,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
