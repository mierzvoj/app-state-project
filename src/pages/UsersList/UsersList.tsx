import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { UserData } from "../../model/user-data.model";
import "./UsersList.css";

const UsersList = ({ users }: { users: UserData[] }) => {
  return (
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
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.surname}</TableCell>
              <TableCell>{row.city}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell>{row.active ? "Active" : "Inactive"}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.password}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersList;
