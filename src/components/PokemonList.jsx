import PokemonCard from "./PokemonCard";
import { usePokemon } from "../context/PokemonContext";

const PokemonList = () => {
  const { pokemonList } = usePokemon();
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
      }}
    >
      {pokemonList.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
      })}
    </div>
  );
};

export default PokemonList;
