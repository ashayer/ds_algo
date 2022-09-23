import { Grid, Typography, Button } from "@mui/material";

const MiddleLandingPage = () => {
  return (
    <Grid
      item
      container
      direction="column"
      sx={{
        backgroundColor: "#272838",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item sx={{ p: 10 }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            color: "#FE6812",
          }}
        >
          LEARN AS YOU NEED
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#B3B6B7",
          }}
        >
          Choose from a variety of learning materials and methods that best suit your needs and
          preferences.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default MiddleLandingPage;
