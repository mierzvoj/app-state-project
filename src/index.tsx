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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/user/:name" element={<UserForm />}></Route>
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
