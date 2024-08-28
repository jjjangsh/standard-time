import { useNavigate } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";

const PokemonCard = ({ pokemon }) => {
  const { addPokemon } = usePokemon();
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/detail/${pokemon.id}`)}>
      <img src={pokemon.img_url} />
      <p>{pokemon.korean_name}</p>
      <button
        style={{
          backgroundColor: "red",
        }}
        onClick={(e) => {
          e.stopPropagation();
          addPokemon(pokemon);
        }}
      >
        추가
      </button>
    </div>
  );
};

export default PokemonCard;
