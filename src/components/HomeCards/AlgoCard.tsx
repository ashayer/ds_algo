import { Typography, Grid, Button, Divider } from "@mui/material";
import GridCardItem from "./GameCardItem";
import Link from "next/link";
import styles from "./HomeCardsStyles";

const StatsCard = () => {
  return (
    <>
      <Typography variant="h3" fontWeight="bold">
        SORTING ALGORITHMS
      </Typography>
      <Divider />
      <Grid container sx={{ ...styles.homeCardContainer }}>
        <GridCardItem>
          {/* <Typography>{`${calculateCompletedReadingForAlgo()}% Read`}</Typography> */}
        </GridCardItem>
        <GridCardItem width="45%" alignSelf="end">
          <Link href="/reading/algos" passHref>
            <Button variant="outlined" color="primary">
              <Typography variant="h4">Read</Typography>
            </Button>
          </Link>
        </GridCardItem>
        <GridCardItem width="45%" alignSelf="end">
          <Link href="/algosandbox" passHref>
            <Button variant="outlined" color="primary">
              <Typography variant="h4">Sandbox</Typography>
            </Button>
          </Link>
        </GridCardItem>
      </Grid>
    </>
  );
};

export default StatsCard;
