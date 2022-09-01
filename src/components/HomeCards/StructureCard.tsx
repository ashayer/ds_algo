import { Typography, Grid, Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./HomeCardsStyles";
import GridCardItem from "./GameCardItem";
const StatsCard = () => {
  const navigate = useNavigate();

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
          <Button
            fullWidth
            variant="outlined"
            color="info"
            onClick={() => navigate("/structurereading")}
          >
            <Typography variant="h3">Read</Typography>
          </Button>
        </GridCardItem>
        <GridCardItem width="45%" alignSelf="end">
          <Button fullWidth variant="contained" onClick={() => navigate("/structuresandbox")}>
            <Typography variant="h3">Sandbox</Typography>
          </Button>
        </GridCardItem>
      </Grid>
    </>
  );
};

export default StatsCard;
