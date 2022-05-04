import { Link, useLocation } from "react-router-dom";

export interface LocationState {
  url: string;
  name: string;
}

function PokemonsToolbar() {
  const { state } = useLocation();
  const { url, name } = state as LocationState;
  return (
    <>
      <span>{url}</span>
      <span>{name}</span>
      <Link to="/">Home</Link>
    </>
  );
}

export default PokemonsToolbar;
