import {
  Typography,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
} from "@mui/material";
import styles from "./homeCardsStyles";
import GridCardItem from "./GameCardItem";
import Link from "next/link";
// import { useNavigate } from "react-router-dom";
// import useUserStore from "../../stores/userStore";
// import useAuthStore from "../../stores/authStore";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const getUserStats = async (id: string) => {
//   const response = await axios.get(`/api/user/getUserStats/${id}`);
//   return response.data;
// };

const StatsCard = () => {
  // const navigate = useNavigate();
  // const username = useAuthStore((state) => state.username);
  // const id = useAuthStore((state) => state.id);
  // const setGameStats = useUserStore((state) => state.setGameStats);

  // const {
  //   data: gameStats,
  //   isLoading,
  //   isSuccess,
  //   isError,
  // } = useQuery(["user-stats"], () => getUserStats(id), { onSuccess: setGameStats });

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Error</div>;
  // }

  return (
    <>
      <Typography variant="h3" fontWeight="bold">
        STATS
      </Typography>
      <Divider />
      {
        <Grid container sx={{ ...styles.homeCardContainer }}>
          <GridCardItem>{/* <Typography variant="h5">{`${username}`}</Typography> */}</GridCardItem>
          <GridCardItem>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">
                      <strong>Points</strong>
                    </TableCell>
                    <TableCell align="center">
                      <strong>Games Played</strong>
                    </TableCell>
                    <TableCell align="center">
                      <strong>Highest Streak</strong>
                    </TableCell>
                    <TableCell align="center">
                      <strong>Total Correct</strong>
                    </TableCell>
                    <TableCell align="center">
                      <strong>Total Wrong</strong>
                    </TableCell>
                    <TableCell align="center">
                      <strong>Response Time (ms)</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    {/* <TableCell align="center">{`${gameStats.points}`}</TableCell>
                    <TableCell align="center">{`${gameStats.gamesPlayed}`}</TableCell>
                    <TableCell align="center">{`${gameStats.streak}`}</TableCell>
                    <TableCell align="center">{`${gameStats.numCorrect}`}</TableCell>
                    <TableCell align="center">{`${gameStats.numWrong}`}</TableCell>
                    <TableCell align="center">{`${gameStats.responseTime}`}</TableCell> */}
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </GridCardItem>
          <GridCardItem alignSelf="end">
            <Link href="/leaderboard" passHref>
              <Button variant="outlined" color="primary">
                <Typography variant="h4">Leaderboard</Typography>
              </Button>
            </Link>
          </GridCardItem>
        </Grid>
      }
    </>
  );
};

export default StatsCard;
