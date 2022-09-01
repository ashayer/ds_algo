import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { Grid } from "@mui/material";
import GameCard from "../components/HomeCards/GameCard";
import StatsCard from "../components/HomeCards/StatsCard";
import AlgoCard from "../components/HomeCards/AlgoCard";
import DataCard from "../components/HomeCards/StructureCard";

const HomeGridItem = ({ child }: { child: JSX.Element }) => (
  <Grid item xs={12} lg={6} sx={{ pt: 5, pr: 5, pl: 5 }}>
    {child}
  </Grid>
);

const HomeGridContainer = ({ children }: { children: JSX.Element[] }) => {
  return (
    <Grid item container xs={11} sx={{ mt: 1, textAlign: "center", marginInline: "auto" }}>
      {children.map((child: JSX.Element, index) => (
        <HomeGridItem child={child} key={index} />
      ))}
    </Grid>
  );
};

const Home: NextPage = () => {
  return (
    <HomeGridContainer>
      <GameCard />
      <StatsCard />
      <AlgoCard />
      <DataCard />
    </HomeGridContainer>
  );
};

export default Home;

