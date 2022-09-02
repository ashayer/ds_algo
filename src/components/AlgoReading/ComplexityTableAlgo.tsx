import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material/";

interface ComplexityTableProps {
  timeComplexityArray: string[];
  space: string;
}

const ComplexityTableAlgo = ({ timeComplexityArray, space }: ComplexityTableProps) => {
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
                <Typography variant="h6">Best</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6">Average</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6">Worst</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {timeComplexityArray.map((time, index) => (
                <TableCell key={index} align="center" sx={{ border: 0 }}>
                  <Typography variant="h6">{time}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h5" sx={{ borderBottom: "1px solid black" }}>
        Space Complexity
      </Typography>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell align="center">
                <Typography variant="h6">{space}</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ComplexityTableAlgo;
