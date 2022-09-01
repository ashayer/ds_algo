import { Typography, Grid, Button, Divider } from "@mui/material";
import styles from "./HomeCardsStyles";
import GridCardItem from "./GameCardItem";
const StatsCard = () => {
  return (
    <>
      <Typography variant="h3" fontWeight="bold">
        DATA STRUCTURES
      </Typography>
      <Divider />
      <Grid container sx={{ ...styles.homeCardContainer }}>
        <GridCardItem>
          {/* <Typography>{`${calculateCompletedReadingForData()}% Read`}</Typography> */}
        </GridCardItem>
        <GridCardItem width="45%" alignSelf="end">
          <Button fullWidth variant="outlined" color="info">
            <Typography variant="h3">Read</Typography>
          </Button>
        </GridCardItem>
        <GridCardItem width="45%" alignSelf="end">
          <Button fullWidth variant="contained">
            <Typography variant="h3">Sandbox</Typography>
          </Button>
        </GridCardItem>
      </Grid>
    </>
  );
};

export default StatsCard;
