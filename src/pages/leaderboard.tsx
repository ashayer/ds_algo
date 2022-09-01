import { useState } from "react";
import {
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Typography,
  Grid,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

function descendingComparator(a: any, b: any, orderBy: any) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order: any, orderBy: any) {
  return order === "desc"
    ? (a: any, b: any) => descendingComparator(a, b, orderBy)
    : (a: any, b: any) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  {
    id: "username",
    numeric: false,
    label: "Name",
  },
  {
    id: "points",
    numeric: true,
    disablePadding: false,
    label: "Points",
  },
  {
    id: "gamesPlayed",
    numeric: true,
    disablePadding: false,
    label: "Games Played",
  },
  {
    id: "streak",
    numeric: true,
    disablePadding: false,
    label: "Highest Streak",
  },
  {
    id: "numCorrect",
    numeric: true,
    disablePadding: false,
    label: "Total Correct",
  },
  {
    id: "numWrong",
    numeric: true,
    disablePadding: false,
    label: "Total Wrong",
  },
  {
    id: "responseTime",
    numeric: true,
    disablePadding: false,
    label: "Response Time (ms)",
  },
];

function EnhancedTableHead(props: any) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: any) => (event: any) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              <Typography>{headCell.label}</Typography>
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const LoadingLeaderboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "30vw",
        justifyContent: "center",
      }}
    >
      <CircularProgress size={200} thickness={1.8} />
    </Box>
  );
};

// const getUserStats = async () => {
//   const response = await axios.get("/api/user/getUsersGameStats");
//   return response.data;
// };

const Leaderboard = () => {
  const [order, setOrder] = useState("desc");
  const [orderBy, setOrderBy] = useState("points");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleRequestSort = (event: any, property: any) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //   const { data, isSuccess, isLoading, isError } = useQuery(["user-leaderboard"], getUserStats, {
  //     keepPreviousData: true,
  //   });

  return (
    <>
      {false ? (
        <LoadingLeaderboard />
      ) : (
        <Grid item container xs={10} sx={{ marginInline: "auto", mt: 5 }}>
          <TableContainer>
            <Table>
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                // rowCount={data.length}
                rowCount={10}
              />
              <TableBody sx={{ overflow: "scroll" }}>
                {/* {data
                  .slice()
                  .sort(getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: any) => {
                    return (
                      <TableRow hover tabIndex={-1} key={row.username}>
                        <TableCell component="th" scope="row">
                          <Typography noWrap sx={{ width: "15vw" }}>
                            {row.username}
                          </Typography>
                        </TableCell>
                        <TableCell align="right" id="points">
                          <Typography>{row.points}</Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography>{row.gamesPlayed}</Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography>{row.streak}</Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography>{row.numCorrect}</Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography>{row.numWrong}</Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography>{row.responseTime}</Typography>
                        </TableCell>
                      </TableRow>
                    );
                  })} */}
                {/* {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )} */}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[10, 15, 20]}
            component="div"
            count={10}
            // count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Grid>
      )}
    </>
  );
};

export default Leaderboard;
