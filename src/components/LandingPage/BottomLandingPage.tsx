import { Grid, Typography } from "@mui/material";

const BottomLandingPage = () => {
  return (
    <Grid
      item
      container
      direction="column"
      sx={{ backgroundColor: "#121212", color: "white", p: 10 }}
    >
      <Grid item>
        <Typography variant="h2" fontWeight="900">
          READINGS
        </Typography>
        <Typography variant="h6" fontWeight="bold">
          Learn about fundamental sorting algorithms and data structures with with sequential
          reading sections and summary quizzes
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h2" fontWeight="900">
          QUIZ GAME
        </Typography>
        <Typography variant="h6" fontWeight="bold">
          Keep your skills sharp with a quiz game with 50+ randomly generated questions covering all
          reading topics.
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h2" fontWeight="900">
          SANDBOX
        </Typography>
        <Typography variant="h6" fontWeight="bold">
          EXPLORE SORTING ALGORITHMS THROUGH VISUALIZATIONS AND STEP-THROUGH CODE HIGHLIGHTING FOR A
          DEEPER UNDERSTANDING
        </Typography>
      </Grid>
    </Grid>
  );
};

export default BottomLandingPage;
