import { useState, useEffect } from "react";
import { Grid, Typography, Button, Dialog } from "@mui/material";
import { NextPage } from "next";
// import { useNavigate } from "react-router-dom";
// import Signup from "../components/Signup/Signup";
// import useStore from "../../stores/authStore";

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
      <Grid item sx={{ backgroundColor: "#FE6812", height: "95vh", width: "100vw", pt: 10 }}>
        <Typography variant="h1">DSALGO</Typography>
        <Image src={educate} alt="Educator image" />
      </Grid>
      <Grid item sx={{ backgroundColor: "#272838", height: "40vh", width: "100vw" }}></Grid>{" "}
      <Grid item sx={{ backgroundColor: "#121212", height: "100vh", width: "100vw" }}></Grid>
    </Grid>
  );
};

export default LandingPage;

