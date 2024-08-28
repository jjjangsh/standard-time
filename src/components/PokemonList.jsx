import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonList, addPokemon, selectedPokemon }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
      }}
    >
      {pokemonList.map((pokemon) => {
        const isSelected = selectedPokemon.some((p) => p.id === pokemon.id);
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            addPokemon={addPokemon}
            isSelected={isSelected}
          />
        );
      })}
    </div>
  );
};

export default PokemonList;
