import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import "./PokemonTable.css";

export interface PokemonItem {
  name: string;
  url: string;
}

const PokemonTable = ({ pokemons }: { pokemons: PokemonItem[] }) => {
  const navigate = useNavigate();

  const handleClick = (
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    row: PokemonItem
  ) => {
    navigate("/pokemons/" + row.name, {
      state: { url: row.url, name: row.name },
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="header">Pokemon name</TableCell>
            <TableCell className="header">Details url</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemons.map((row) => (
            <TableRow
              key={row.name}
              onClick={(event) => handleClick(event, row)}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.url}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PokemonTable;
