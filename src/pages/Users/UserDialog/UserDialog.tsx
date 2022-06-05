import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import * as React from "react";
import "./UserDialog.css";

export default function UserDialog({
  open,
  onClose,
  hobbies,
  handleHobbies,
}: {
  open: boolean;
  onClose: () => void;
  hobbies: string[];
  handleHobbies: (hobbies: string[]) => void;
}) {
  const [hobby, setHobby] = React.useState("");

  const addHobby = () => {
    handleHobbies([...hobbies, hobby]);
  };

  const removeHobby = (index: number) => {
    const result = [...hobbies];
    result.splice(index, 1);
    handleHobbies(result);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"User's hobbies"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"></DialogContentText>
          <form>
            <FormGroup id="formgroup">
              <FormLabel>New hobby</FormLabel>
              <FormControl id="hobby">
                <div className="hobbies-input">
                  <TextField
                    autoFocus
                    value={hobby}
                    onChange={(
                      e: React.ChangeEvent<
                        HTMLTextAreaElement | HTMLInputElement
                      >
                    ) => setHobby(e.target.value)}
                  />
                  <Button color="primary" disabled={!hobby} onClick={addHobby}>
                    +
                  </Button>
                </div>
              </FormControl>
            </FormGroup>
          </form>
          <ul>
            {hobbies.map((h, index) => (
              <li key={index}>
                {h}
                <Button color="primary" onClick={() => removeHobby(index)}>
                  -
                </Button>
              </li>
            ))}
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
