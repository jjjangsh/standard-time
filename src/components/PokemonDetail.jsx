import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../mock.js";

const PokemonDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const pokemon = MOCK_DATA.find((p) => p.id === Number(id));

  return (
    <div>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h2>{pokemon.korean_name}</h2>
      <p>타입: {pokemon.types.join(", ")}</p>
      <p>{pokemon.description}</p>
      <button onClick={() => navigate("/dex")}>뒤로 가기</button>
    </div>
  );
};

export default PokemonDetail;
