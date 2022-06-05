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
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [hobbies, setHobbies] = React.useState(["test1", "test2"]);
  const [hobby, setHobby] = React.useState("");

  const addHobby = () => {
    setHobbies([...hobbies, hobby]);
  };

  const removeHobby = (index: number) => {
    const result = [...hobbies];
    result.splice(index, 1);
    setHobbies(result);
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
          <Button onClick={onClose} autoFocus>
            Cancel
          </Button>
          <Button onClick={onClose}>Apply</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
