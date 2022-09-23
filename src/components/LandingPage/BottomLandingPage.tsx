import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import ReadingsGif from "../../assets/readings.gif";
import QuizGif from "../../assets/quiz.gif";
import SandboxGif from "../../assets/sandbox.gif";
const BottomLandingPage = () => {
  return (
    <Grid
      item
      container
      direction="column"
      sx={{ backgroundColor: "#121212", color: "white", p: 10 }}
    >
        <Grid item container sx={{ py: 10 }}>
          <Grid item xs={6}>
            <Image src={ReadingsGif} style={{ borderRadius: "20px" }} alt="readings gif" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h2" fontWeight="900" sx={{}}>
              READINGS
            </Typography>
            <Typography variant="h6" fontWeight="bold">
              Learn about fundamental sorting algorithms and data structures through sequential
              reading sections and summary quizzes
            </Typography>
          </Grid>
        </Grid>
      <Grid item container sx={{ py: 10 }}>
        <Grid item xs={6}>
          <Typography variant="h2" fontWeight="900">
            QUIZ GAME
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            Keep your skills sharp with a quiz game with 50+ randomly generated questions covering
            all reading topics.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Image src={QuizGif} style={{ borderRadius: "20px" }} alt="quiz gif" />
        </Grid>
      </Grid>
      <Grid item container sx={{ py: 10 }}>
        <Grid item xs={6}>
          <Image src={SandboxGif} style={{ borderRadius: "20px" }} alt="sandbox gif" />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" fontWeight="900">
            SANDBOX
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            EXPLORE SORTING ALGORITHMS THROUGH VISUALIZATIONS AND STEP-THROUGH CODE HIGHLIGHTING FOR
            A DEEPER UNDERSTANDING
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BottomLandingPage;
