import { Grid } from "@mui/material";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRef } from "react";

import TopLandingPage from "../components/LandingPage/TopLandingPage";
import MiddleLandingPage from "../components/LandingPage/MiddleLandingPage";
import BottomLandingPage from "../components/LandingPage/BottomLandingPage";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
const LandingPage: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const ref = useRef<null | HTMLDivElement>(null);

  if (session?.user) {
    router.push({
      pathname: "/home",
    });
  }

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Grid container direction="column" sx={{ overflowX: "hidden" }}>
      <Head>
        <title>Welcome!</title>
      </Head>
      <TopLandingPage handleClick={handleClick} />
      <div ref={ref}>
        <MiddleLandingPage />
      </div>
      <BottomLandingPage />
      <Footer />
    </Grid>
  );
};

export default LandingPage;

