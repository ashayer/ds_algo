import { useState, useEffect } from "react";
import { Grid, Typography, Button, Dialog } from "@mui/material";
import { NextPage } from "next";
// import { useNavigate } from "react-router-dom";
// import Signup from "../components/Signup/Signup";
// import useStore from "../../stores/authStore";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

import educate from "../assets/educate.svg";
import Image from "next/image";

const LandingPage: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (session?.user) {
    router.push({
      pathname: "/home",
    });
  }

  return (
    <Grid container direction="column" sx={{ overflowX: "hidden" }}>
      <Grid
        container
        item
        sx={{
          backgroundColor: "#FE6812",
          height: "95vh",
          border: "2px solid blue",
          textAlign: "center",
        }}
      >
        <Grid
          item
          container
          direction="column"
          sx={{ border: "2px solid red", pt: 10, alignItems: "center" }}
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
              sx={{ backgroundColor: "#121212", borderRadius: "10px", p: 2, mt: 10 }}
              endIcon={<ArrowForwardIcon />}
            >
              <Typography variant="h6">Start Learning</Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={6} sx={{ border: "2px solid red", pt: 10 }}>
          <Image src={educate} alt="Educator image" />
        </Grid>
      </Grid>
      <Grid item sx={{ backgroundColor: "#272838", height: "40vh", width: "100vw" }}></Grid>{" "}
      <Grid item sx={{ backgroundColor: "#121212", height: "100vh", width: "100vw" }}></Grid>
    </Grid>
  );
};

export default LandingPage;

