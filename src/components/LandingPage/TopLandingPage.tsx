import { Grid, Typography, Button, Dialog } from "@mui/material";
import Image from "next/image";
import educate from "../../assets/educate.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { signIn } from "next-auth/react";

const TopLandingPage = () => {
  return (
    <Grid
      container
      item
      sx={{
        backgroundColor: "#FE6812",
        pt: 10,
      }}
    >
      <Grid
        item
        container
        direction="column"
        sx={{ pt: 10, alignItems: "center" }}
        spacing={3}
        xs={6}
      >
        <Grid item>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              textDecoration: "underline",
              color: "white",
              textUnderlineOffset: "1rem",
              textDecorationThickness: "5px",
            }}
          >
            DSALGO
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontWeight: 900,
            }}
          >
            Supplement your learning
          </Typography>
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
      <Grid item xs={6} sx={{ pb: 10 }}>
        <Image src={educate} alt="Educator image" />
      </Grid>
    </Grid>
  );
};

export default TopLandingPage;
