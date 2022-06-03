import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Calculation from "./pages/Calculations/Calculation/Calculation";
import LocationsForm from "./pages/Locations/LocationsForm/LocationsForm";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Pokemons from "./pages/Pokemons/Pokemons";
import PokemonsToolbar from "./pages/Pokemons/PokemonsToolbar/PokemonsToolbar";
import UserForm from "./pages/Users/UserForm/UserForm";
import Users from "./pages/Users/Users";
import UsersList from "./pages/Users/UsersList/UsersList";
// git conflict test
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement // git conflict test
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/users" element={<Users />}>
          <Route path="/users/list" element={<UsersList />}></Route>
          <Route path="/users/user/:index" element={<UserForm />}></Route>
        </Route>
        <Route path="/calculation" element={<Calculation />}></Route>
        <Route path="/locationsform" element={<LocationsForm />}></Route>
        <Route path="pokemons" element={<Pokemons />}>
          <Route path=":name" element={<PokemonsToolbar />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
