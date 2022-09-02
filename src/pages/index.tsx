import { useState, useEffect } from "react";
import { Grid, Typography, Button, Dialog } from "@mui/material";
import { NextPage } from "next";
// import { useNavigate } from "react-router-dom";
// import Signup from "../components/Signup/Signup";
// import useStore from "../../stores/authStore";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

const LandingPage: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (session?.user) {
    router.push({
      pathname: "/home",
    });
  }

  return (
    <Grid
      container
      direction="column"
      sx={{
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        marginInline: "auto",
      }}
      maxWidth="md"
    >
      <Grid item sx={{ mt: 10 }}>
        <Button variant="contained" onClick={() => signIn("google", { callbackUrl: "/home" })}>
          <Typography>GET STARTED</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default LandingPage;

