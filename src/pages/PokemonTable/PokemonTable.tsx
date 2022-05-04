import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import "./PokemonTable.css";

export interface PokemonItem {
  name: string;
  url: string;
}

const PokemonTable = ({ pokemons }: { pokemons: PokemonItem[] }) => {
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
            <TableRow key={row.name}>
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
