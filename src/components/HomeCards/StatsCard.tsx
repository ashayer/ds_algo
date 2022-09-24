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
import GridCardItem from "./GameCardItem";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { trpc } from "../../utils/trpc";

const StatsCard = () => {
  const { data: session } = useSession();

  const gameStats = trpc.useQuery(["auth.get-user-info", { id: session?.user?.id as string }], {
    keepPreviousData: true,
  });

  if (gameStats.isLoading) {
    return <div>Loading...</div>;
  }

  if (gameStats.isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <Typography variant="h3" fontWeight="bold">
        STATS
      </Typography>
      <Divider />
      {
        <Grid
          container
          sx={{
            alignItems: "center",
            direction: "column",
            minHeight: "30vh",
            justifyContent: "space-around",
          }}
        >
          <GridCardItem>
            <Typography variant="h5">{`${gameStats.data?.name}`}</Typography>
          </GridCardItem>
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
                    <TableCell align="center">{`${gameStats.data?.points}`}</TableCell>
                    <TableCell align="center">{`${gameStats.data?.gamesplayed}`}</TableCell>
                    <TableCell align="center">{`${gameStats.data?.higheststreak}`}</TableCell>
                    <TableCell align="center">{`${gameStats.data?.rightanswer}`}</TableCell>
                    <TableCell align="center">{`${gameStats.data?.wronganswer}`}</TableCell>
                    <TableCell align="center">{`${gameStats.data?.responsetime}`}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </GridCardItem>
          <GridCardItem alignSelf="end">
            <Link href="/leaderboard" passHref>
              <Button variant="contained" color="primary">
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
