import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Snackbar,
  TextField,
} from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import React, { ChangeEvent, FormEvent, useState } from "react";
import "./UserForm.css";

export interface UserData {
  name?: string;
  surname?: string;
  city?: string;
  gender?: "female" | "male";
  active?: boolean;
  email?: string;
  password?: string;
}

const cities: string[] = ["Gdańsk", "Gdynia", "Sopot", "Warszawa", "Zakopane"];

export default function UserForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("female");
  const [active, setActive] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const users: UserData[] = [];

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleReset = () => {
    setName("");
    setSurname("");
    setCity("");
    setGender("female");
    setActive(true);
    setEmail("");
    setPassword("");
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <div className="Login">
        <form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
          <FormGroup>
            <FormLabel>Name</FormLabel>
            <FormControl id="name">
              <TextField
                autoFocus
                value={name}
                onChange={(
                  e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
                ) => setName(e.target.value)}
              />
            </FormControl>
            <FormLabel>Surname</FormLabel>
            <FormControl id="surname">
              <TextField
                value={surname}
                onChange={(
                  e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
                ) => setSurname(e.target.value)}
              />
            </FormControl>
            <FormLabel>City</FormLabel>
            <FormControl id="city">
              <Select
                value={city}
                onChange={(e) => setCity(e.target.value as string)}
              >
                {cities.map((c) => (
                  <MenuItem key={c} value={c}>
                    {c}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl id="gender">
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                defaultValue={gender}
                value={gender}
                onChange={(e) => setGender(e.target.value as string)}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  checked={active}
                  onChange={(e) => setActive(e.target.checked as boolean)}
                />
              }
              label="Active"
            />
            <FormLabel>Email</FormLabel>
            <FormControl id="email">
              <TextField
                type="email"
                value={email}
                onChange={(
                  e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
                ) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormLabel>Password</FormLabel>
            <FormControl id="password">
              <TextField
                type="password"
                value={password}
                onChange={(
                  e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
                ) => setPassword(e.target.value)}
              />
            </FormControl>
          </FormGroup>
          <Button type="submit" color="default" disabled={!validateForm()}>
            Apply
          </Button>
          <Button color="secondary" onClick={handleReset}>
            Reset
          </Button>
        </form>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          message="Item added!"
          onClose={handleClose}
          action={action}
        />
      </div>
    </>
  );
}
