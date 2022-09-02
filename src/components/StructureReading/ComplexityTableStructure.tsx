import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material/";

const ComplexityTable = ({ complexityArray }: { complexityArray: string[] }) => {
  return (
    <>
      <Typography variant="h5" sx={{ borderBottom: "1px solid black" }}>
        Time Complexities
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography variant="h6">Access/Search</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6">Insert/Delete</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {complexityArray.map((time, index) => (
                <TableCell key={index} align="center">
                  <Typography variant="h6">{time}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ComplexityTable;
