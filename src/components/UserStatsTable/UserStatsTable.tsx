import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const UserStatsTable = () => {
  return (
    <Grid item container xs={10} sx={{ marginInline: "auto" }}>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography variant="h6" fontWeight="bold">
                  Points
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6" fontWeight="bold">
                  Streak
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6" fontWeight="bold">
                  Total Correct
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6" fontWeight="bold">
                  Total Wrong
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6" fontWeight="bold">
                  Response Time (ms)
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* <TableRow>
              <TableCell align="center">
                <Typography variant="h5">{`${sessionGameStats.points}`}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h5">{`${sessionGameStats.streak}`}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h5">{`${sessionGameStats.numCorrect}`}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h5">{`${sessionGameStats.numWrong}`}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h5">{`${sessionGameStats.responseTime}`}</Typography>
              </TableCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default UserStatsTable;
