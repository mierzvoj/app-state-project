import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pokemon, { PokemonItem } from "../Pokemon/Pokemon";
import "./Pokemons.css";

export interface PokemonData {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonItem[];
}

export interface AppState {
  loading: boolean;
  data: PokemonData;
}

function Pokemons() {
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
    <div className="pokemons">
      {appState.loading
        ? "Loading..."
        : appState.data.results.map((itm, index) => {
            return <Pokemon key={index} {...itm} />;
          })}
      <br></br>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Pokemons;
