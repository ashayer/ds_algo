import { useState, useEffect } from "react";
import { Grid, Typography, Button, Dialog } from "@mui/material";
import { NextPage } from "next";
// import { useNavigate } from "react-router-dom";
// import Signup from "../components/Signup/Signup";
// import useStore from "../../stores/authStore";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

import TopLandingPage from "../components/LandingPage/TopLandingPage";
import MiddleLandingPage from "../components/LandingPage/MiddleLandingPage";
import BottomLandingPage from "../components/LandingPage/BottomLandingPage";
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
      <TopLandingPage />
      <MiddleLandingPage />
      <BottomLandingPage />
    </Grid>
  );
};

export default LandingPage;

