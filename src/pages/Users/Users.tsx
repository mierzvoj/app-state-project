import React from "react";
import { UserData } from "../../model/user-data.model";
import UsersList from "./UsersList/UsersList";

const entryData: UserData[] = [
  {
    name: "name1",
    surname: "surname1",
    city: "Gdańsk",
    gender: "male",
    active: true,
    email: "name1@test",
    password: "test",
  },
  {
    name: "name2",
    surname: "surname2",
    city: "Gdańsk",
    gender: "male",
    active: true,
    email: "name2@test",
    password: "test",
  },
  {
    name: "name3",
    surname: "surname3",
    city: "Gdańsk",
    gender: "male",
    active: true,
    email: "name3@test",
    password: "test",
  },
];

export interface IUsersContext {
  users: UserData[];
}

export const UsersContext = React.createContext<IUsersContext>({ users: [] });

const Users = () => {
  return (
    <UsersContext.Provider
      value={{
        users: entryData,
      }}
    >
      <UsersList />
    </UsersContext.Provider>
  );
};

export default Users;
