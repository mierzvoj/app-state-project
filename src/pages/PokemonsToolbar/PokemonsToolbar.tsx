import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BackDefault from "./PokemonSprites/BackDefault/BackDefault";
import FrontDefault from "./PokemonSprites/FrontDefault/FrontDefault";

export interface LocationState {
  url: string;
  name: string;
}

function PokemonsToolbar() {
  const { state } = useLocation();
  const { url, name } = state as LocationState;

  const [appState, setAppState] = useState<any>({});

  useEffect(() => {
    if (url) {
      fetch(url)
        .then(
          (response) => response.json(),
          (error) => console.error(error)
        )
        .then((data) => {
          setAppState({ data });
        });
    }
  }, [url]);

  return (
    <>
      <span>{url}</span>
      <span>{name}</span>
      <Link to="/">Home</Link>
      <FrontDefault url={appState?.data?.sprites?.front_default}></FrontDefault>
      <BackDefault url={appState?.data?.sprites?.back_default}></BackDefault>
    </>
  );
}

export default PokemonsToolbar;
