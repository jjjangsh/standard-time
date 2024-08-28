import { PokemonProvider } from "./context/PokemonContext";
import Router from "./shared/Router";

const App = () => {
  return (
    <div>
      <PokemonProvider>
        <Router />
      </PokemonProvider>
    </div>
  );
};

export default App;
