import { Grid, Button, Container, Box, Paper, Typography } from "@mui/material";

const GameQuestionText = ({ questionDisplay }: { questionDisplay: GameDisplayInfo }) => {
  return (
    <Grid item xs={10} sx={{ textAlign: "center", marginInline: "auto" }}>
      <Paper>
        <Typography variant="h4" fontWeight="bold">
          {questionDisplay.question}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default GameQuestionText;
