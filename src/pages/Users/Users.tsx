import React, { Dispatch, SetStateAction, useState } from "react";
import { Outlet } from "react-router-dom";
import { UserData } from "../../model/user-data.model";
const people: string = "";
const entryData: UserData[] = [
  {
    name: "name1",
    surname: "surname1",
    city: "Gdańsk",
    gender: "male",
    active: true,
    email: "name1@test",
    password: "test",
    hobbies: ["Swimming", "Photography"],
  },
  {
    name: "name2",
    surname: "surname2",
    city: "Gdańsk",
    gender: "male",
    active: true,
    email: "name2@test",
    password: "test",
    hobbies: ["Running", "Tourism"],
  },
  {
    name: "name3",
    surname: "surname3",
    city: "Gdańsk",
    gender: "male",
    active: true,
    email: "name3@test",
    password: "test",
    hobbies: ["Chess", "Video games", "Music"],
  },
];

export interface IUsersContext {
  users: UserData[];
  setUsers: Dispatch<SetStateAction<UserData[]>>;
}

export const UsersContext = React.createContext<IUsersContext>({
  users: entryData,
  setUsers: () => {},
});

const Users = () => {
  const [users, setUsers] = useState<UserData[]>(entryData);
  const value = { users, setUsers };

  return (
    <UsersContext.Provider value={value}>
      <Outlet />
    </UsersContext.Provider>
  );
};

export default Users;
