import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";
import { LocationsContext } from "../Locations";
import "./LocationsList.css";

const LocationsList = () => {
  const navigate = useNavigate();

  const handleClick = (
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    index: number
  ) => {
    navigate("/locations/location/" + index);
  };

  return (
    <LocationsContext.Consumer>
      {(context) => (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="header">Street</TableCell>
                <TableCell className="header">Street No.</TableCell>
                <TableCell className="header">City</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {context.locations.map((row, index) => (
                <TableRow
                  key={index}
                  onClick={(event) => handleClick(event, index)}
                >
                  <TableCell component="th" scope="row">
                    {row.street}
                  </TableCell>
                  <TableCell>{row.streetNo}</TableCell>
                  <TableCell>{row.city}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </LocationsContext.Consumer>
  );
};

export default LocationsList;
