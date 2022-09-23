import { Grid, Typography } from "@mui/material";

const BottomLandingPage = () => {
  return (
    <Grid
      item
      container
      direction="column"
      sx={{ backgroundColor: "#121212", color: "white", p: 10 }}
    >
      <Grid item container sx={{ textAlign: "right" }}>
        <Grid item sx={{ border: "1px solid red" }} xs={6}>
          picture or gif
        </Grid>
        <Grid item sx={{ border: "1px solid red" }} xs={6}>
          <Typography variant="h2" fontWeight="900">
            READINGS
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            Learn about fundamental sorting algorithms and data structures with with sequential
            reading sections and summary quizzes
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item sx={{ border: "1px solid red" }} xs={6}>
          <Typography variant="h2" fontWeight="900">
            READINGS
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            Learn about fundamental sorting algorithms and data structures with with sequential
            reading sections and summary quizzes
          </Typography>
        </Grid>
        <Grid item sx={{ border: "1px solid red" }} xs={6}>
          picture or gif
        </Grid>
      </Grid>
      <Grid item container sx={{ textAlign: "right" }}>
        <Grid item sx={{ border: "1px solid red" }} xs={6}>
          picture or gif
        </Grid>
        <Grid item sx={{ border: "1px solid red" }} xs={6}>
          <Typography variant="h2" fontWeight="900">
            READINGS
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            Learn about fundamental sorting algorithms and data structures with with sequential
            reading sections and summary quizzes
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BottomLandingPage;
