import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@material-ui/core";
import "./ValuesList.css";

const ValuesList = ({ values }: { values: number[] }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="header">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {values.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell className="footer">
              Sum: {values.reduce((p, c) => p + c, 0)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default ValuesList;
