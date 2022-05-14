import { Button, CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import PokemonTable, { PokemonItem } from "../PokemonTable/PokemonTable";
import "./Pokemons.css";

export interface PokemonData {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonItem[];
}

export interface PokemonsState {
  loading: boolean;
  data: PokemonData;
}

function Pokemons() {
  const [appState, setAppState] = useState<PokemonsState>({
    loading: false,
    data: {
      count: 0,
      next: null,
      previous: null,
      results: [],
    },
  });

  const [url, setUrl] = useState<string | null>(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  );

  useEffect(() => {
    if (url) {
      setAppState({
        loading: true,
        data: { ...appState.data },
      });

      fetch(url)
        .then(
          (response) => response.json(),
          (error) => console.error(error)
        )
        .then((data) => {
          console.log(data);
          setAppState({ loading: false, data });
        });
    }
  }, [url]);

  const onNext = () => setUrl(appState.data.next);
  const onPrevious = () => setUrl(appState.data.previous);

  return (
    <div className="pokemons">
      {appState.loading ? (
        <CircularProgress />
      ) : (
        <>
          <PokemonTable pokemons={appState.data.results} />
          <br />
          <div className="buttons">
            <Button color="primary" onClick={onPrevious}>
              Previous
            </Button>
            <Button color="primary" onClick={onNext}>
              Next
            </Button>
          </div>
          <br />
          <Outlet />
        </>
      )}
    </div>
  );
}

export default Pokemons;