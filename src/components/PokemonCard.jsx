import React from "react";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemon, addPokemon, isSelected }) => {
  const navigate = useNavigate();

  const addPokemonHandler = (e) => {
    e.stopPropagation();

    if (isSelected) {
      alert("이미 추가된 포켓몬 입니다");
    } else {
      addPokemon(pokemon);
    }
  };

  return (
    <div onClick={() => navigate(`/detail/${pokemon.id}`)}>
      <img src={pokemon.img_url} />
      <p>{pokemon.korean_name}</p>
      <button
        style={{
          backgroundColor: "red",
        }}
        onClick={addPokemonHandler}
      >
        추가
      </button>
    </div>
  );
};

export default PokemonCard;
