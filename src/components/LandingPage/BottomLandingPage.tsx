import { Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import ReadingsGif from "../../assets/readings.gif";
import QuizGif from "../../assets/quiz.gif";
import SandboxGif from "../../assets/sandbox.gif";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { signIn } from "next-auth/react";

const BottomLandingPage = () => {
  return (
    <Grid
      item
      container
      direction="column"
      sx={{ backgroundColor: "#121212", color: "white", alignItems: "center" }}
    >
      <Grid item container xs={12} sx={{ py: 10 }}>
        <Grid item xs={12} lg={6} sx={{ px: 5 }}>
          <Image src={ReadingsGif} style={{ borderRadius: "20px" }} alt="readings gif" />
        </Grid>
        <Grid item xs={12} lg={6} sx={{ p: 5 }}>
          <Typography variant="h2" fontWeight="900" sx={{ color: "#FE6812" }}>
            READINGS
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            Learn about fundamental sorting algorithms and data structures through sequential
            reading sections and summary quizzes
          </Typography>
          <Typography variant="h4" fontWeight="bold" textAlign="right" sx={{ pt: 5 }}>
            Sorting Algorithms Covered
          </Typography>
          <Typography variant="h6" textAlign="right">
            Insertion - Selection - Merge - Quick
          </Typography>
          <Typography variant="h4" fontWeight="bold" sx={{ pt: 5 }}>
            Data Structures Covered
          </Typography>
          <Typography variant="h6">Queue - Stack - Linked Lists - Binary Tree</Typography>
        </Grid>
      </Grid>
      <Grid item container xs={12} sx={{ py: 5 }}>
        <Grid item xs={12} lg={6} order={{ xs: 2, lg: 1 }} sx={{ p: 5 }}>
          <Typography variant="h2" fontWeight="900" sx={{ color: "#FE6812" }}>
            QUIZ GAME
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            Keep your skills sharp with a quiz game with 50+ randomly generated questions covering
            all sorting algorithm topics.
          </Typography>
          <Typography variant="h6" fontWeight="bold" sx={{ pt: 10 }}>
            Questions topics range from basic time and space complexity to interactive drag and
            drop. Each question is randomly generated and range in difficulty.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6} order={{ xs: 1 }}>
          <Image src={QuizGif} style={{ borderRadius: "20px" }} alt="quiz gif" />
        </Grid>
      </Grid>
      <Grid item container xs={12} sx={{ py: 5 }}>
        <Grid item xs={12} lg={6} sx={{ px: 5 }}>
          <Image src={SandboxGif} style={{ borderRadius: "20px" }} alt="sandbox gif" />
        </Grid>
        <Grid item xs={12} lg={6} sx={{ p: 5 }}>
          <Typography variant="h2" fontWeight="900" sx={{ color: "#FE6812" }}>
            SANDBOX
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            Explore sorting algorithms through visualizations and step-through code highlighting for
            a deeper understanding.
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#121212", borderRadius: "10px", p: 2 }}
          endIcon={<ArrowForwardIcon />}
          onClick={() => signIn("google", { callbackUrl: "/home" })}
        >
          <Typography variant="h6">Start Learning</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default BottomLandingPage;
