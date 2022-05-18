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
import { useNavigate } from "react-router-dom";
import "./UserForm.css";

export interface LoginData {
  name?: string;
  surname?: string;
  city?: string;
  email?: string;
  password?: string;
}

const cities: string[] = ["Gdańsk", "Gdynia", "Sopot", "Warszawa", "Zakopane"];

export default function UserForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email === "test@test" && password === "test") {
      navigate("/pokemons");
    } else {
      setOpen(true);
    }
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
    <div className="Login">
      <form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <FormGroup>
          <FormLabel>Name</FormLabel>
          <FormControl>
            <TextField
              autoFocus
              value={name}
              onChange={(
                e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => setName(e.target.value)}
            />
          </FormControl>
          <FormLabel>Surname</FormLabel>
          <FormControl>
            <TextField
              value={surname}
              onChange={(
                e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => setSurname(e.target.value)}
            />
          </FormControl>
          <FormLabel>City</FormLabel>
          <FormControl>
            <Select
              value={city}
              onChange={(e) => setCity(e.target.value as string)}
            >
              {cities.map((c) => (
                <MenuItem value={c}>{c}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup defaultValue="female">
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Active"
          />
          <FormLabel>Email</FormLabel>
          <FormControl>
            <TextField
              type="email"
              value={email}
              onChange={(
                e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormLabel>Password</FormLabel>
          <FormControl>
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
        <Button color="secondary">Reset</Button>
      </form>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        message="Wrong authenthication data!"
        onClose={handleClose}
        action={action}
      />
    </div>
  );
}
