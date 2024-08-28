import React from "react";

const Dashboard = ({ selectedPokemon, removePokemon }) => {
  const removePokemonHandler = (pokemon) => {
    removePokemon(pokemon);
  };
  return (
    <div>
      <h2>대시보드</h2>
      {selectedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <ul>
          {selectedPokemon.map((pokemon) => (
            <li key={pokemon.id}>
              {pokemon.korean_name}
              <button onClick={() => removePokemonHandler(pokemon)}>
                삭제
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
