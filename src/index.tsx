import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Calculation from "./pages/Calculations/Calculation/Calculation";
import Login from "./pages/Common/Login/Login";
import NotFound from "./pages/Common/NotFound/NotFound";
import Drawing from "./pages/Drawing/Drawing";
import Locations from "./pages/Locations/Locations";
import LocationsForm from "./pages/Locations/LocationsForm/LocationsForm";
import LocationsList from "./pages/Locations/LocationsList/LocationsList";
import Pokemons from "./pages/Pokemons/Pokemons";
import PokemonsToolbar from "./pages/Pokemons/PokemonsToolbar/PokemonsToolbar";
import UserForm from "./pages/Users/UserForm/UserForm";
import Users from "./pages/Users/Users";
import UsersList from "./pages/Users/UsersList/UsersList";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
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
        <Route path="/locations" element={<Locations />}>
          <Route path="/locations/list" element={<LocationsList />}></Route>
          <Route
            path="/locations/location/:index"
            element={<LocationsForm />}
          ></Route>
        </Route>
        <Route path="/calculation" element={<Calculation />}></Route>
        <Route path="pokemons" element={<Pokemons />}>
          <Route path=":name" element={<PokemonsToolbar />}></Route>
        </Route>
        <Route path="drawing" element={<Drawing />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
