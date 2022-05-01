import { useEffect, useState } from "react";
import "./App.css";
import Items, { PokemonData } from "./componets/Items/Items";

export interface AppState {
  loading: boolean;
  data: PokemonData;
}

function App() {
  const [appState, setAppState] = useState<AppState>({
    loading: false,
    data: {
      count: 0,
      next: null,
      previous: null,
      results: [],
    },
  });

  useEffect(() => {
    setAppState({ loading: true, data: { ...appState.data } });
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(
        (response) => response.json(),
        (error) => console.error(error)
      )
      .then((data) => {
        console.log(data);
        setAppState({ loading: false, data });
      });
  }, []);

  return (
    <div className="App">
      {appState.loading ? "Loading..." : <Items {...appState.data} />}
    </div>
  );
}

export default App;
