import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { useNavigate } from "react-router-dom";
import UserDialog from "../UserDialog/UserDialog";
import { UsersContext } from "../Users";
import "./UsersList.css";

const UsersList = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRowDoubleClick = (
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    index: number
  ) => {
    navigate("/users/user/" + index);
  };

  return (
    <UsersContext.Consumer>
      {(context) => (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="header">Name</TableCell>
                <TableCell className="header">Surname</TableCell>
                <TableCell className="header">City</TableCell>
                <TableCell className="header">Gender</TableCell>
                <TableCell className="header">Active</TableCell>
                <TableCell className="header">Login</TableCell>
                <TableCell className="header">Password</TableCell>
                <TableCell className="header">Dialog</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {context.users.map((row, index) => (
                <TableRow
                  key={index}
                  onDoubleClick={(event) => handleRowDoubleClick(event, index)}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.surname}</TableCell>
                  <TableCell>{row.city}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell>{row.active ? "Active" : "Inactive"}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.password}</TableCell>
                  <TableCell>
                    <Button
                      onClick={(event) => handleClickOpen(event)}
                      autoFocus
                    >
                      ...
                    </Button>
                    <UserDialog open={open} onClose={handleClose}></UserDialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </UsersContext.Consumer>
  );
};

export default UsersList;
