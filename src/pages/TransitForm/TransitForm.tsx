import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { TransitData } from "../../model/transit-data.model";
import TransitList from "../TransitsList/TransitList";
import "./TransitForm.css";

const cities: string[] = ["Gdańsk", "Gdynia", "Sopot"];
export default function TransitForm() {
  const [name, setName] = useState("");
  const [addressFrom, setAddressFrom] = useState("");
  const [addressTo, setAddressTo] = useState("");
  const [city, setCity] = useState("");
  const [transitGroupId, setTransitGroupId] = useState("");
  const [open, setOpen] = useState(false);
  const [transits, setTransits] = useState<TransitData[]>([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTransits([
      ...transits,
      { name, addressFrom, addressTo, city, transitGroupId },
    ]);
    setOpen(true);
  };
  const validateForm = () => {
    return name.length > 0 && city.length > 0;
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
    setAddressFrom("");
    setAddressTo("");
    setCity("");
    setTransitGroupId("");
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
      <div className="Location">
        <form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
          <FormGroup id="formgroup">
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
            <FormLabel>Address From</FormLabel>
            <FormControl id="addressFrom">
              <TextField
                value={addressFrom}
                onChange={(
                  e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
                ) => setAddressFrom(e.target.value)}
              />
            </FormControl>
            <FormLabel>Address To</FormLabel>
            <FormControl id="addressTo">
              <TextField
                value={addressTo}
                onChange={(
                  e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
                ) => setAddressTo(e.target.value)}
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
          </FormGroup>
          <FormLabel>Group Id</FormLabel>
          <FormControl id="groupId">
            <TextField
              value={transitGroupId}
              onChange={(
                e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => setTransitGroupId(e.target.value)}
            />
          </FormControl>
          <Button type="submit" color="primary" disabled={!validateForm()}>
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
      <TransitList transits={transits} />
    </>
  );
}
