import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  IconButton,
  Snackbar,
  TextField,
} from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import React, { ChangeEvent, FormEvent, useState } from "react";
import ValuesList from "../ValuesList/ValuesList";
import "./Calculation.css";

export default function Calculation() {
  const [value, setValue] = useState<number>(0);
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<number[]>([]);

  const validateForm = () => {
    return !Number.isNaN(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValues([...values, value]);
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
          <FormGroup id="formgroup">
            <FormLabel>Value</FormLabel>
            <FormControl id="value">
              <TextField
                autoFocus
                type="number"
                value={value}
                onChange={(
                  e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
                ) => setValue(+e.target.value)}
              />
            </FormControl>
          </FormGroup>
          <Button type="submit" color="default" disabled={!validateForm()}>
            Apply
          </Button>
        </form>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          message="Value added!"
          onClose={handleClose}
          action={action}
        />
      </div>
      <ValuesList values={values} />
    </>
  );
}
