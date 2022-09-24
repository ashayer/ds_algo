import { Grid, Typography, Button, Dialog, IconButton } from "@mui/material";
import Image from "next/image";
import educate from "../../assets/educate.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { signIn } from "next-auth/react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
const TopLandingPage = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <Grid
      container
      item
      sx={{
        backgroundColor: "#FE6812",
        pt: 5,
        height: "95vh",
        alignItems: "center",
      }}
      textAlign="center"
    >
      <Grid
        item
        container
        direction="column"
        sx={{ py: 5, alignItems: "center" }}
        spacing={3}
        xs={12}
        lg={6}
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
              p: 2,
            }}
          >
            Supplement your learning
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            sx={{ borderRadius: "10px", px: 2, py: 1 }}
            endIcon={<ArrowForwardIcon />}
            onClick={() => signIn("google", { callbackUrl: "/home" })}
          >
            <Typography variant="h6">Start Learning</Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Image src={educate} alt="Educator image" />
      </Grid>
      <Grid item xs={12} color="white" sx={{ alignSelf: "end" }}>
        <IconButton color="inherit" onClick={handleClick}>
          <KeyboardDoubleArrowDownIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default TopLandingPage;
