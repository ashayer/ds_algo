import { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  Tooltip,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import styles from "./homeCardsStyles";
import GridCardItem from "./GameCardItem";
import Link from "next/link";
const GameCard = () => {
  const [gameLength, setGameLength] = useState("0");
  const handleLengthChange = (e: SelectChangeEvent) => {
    setGameLength(e.target.value);
  };
  return (
    <>
      <Typography variant="h3" fontWeight="bold">
        GAME
      </Typography>
      <Divider />
      <Grid container sx={{ ...styles.homeCardContainer }}>
        <GridCardItem>
          <Typography variant="h5">Game Options</Typography>
        </GridCardItem>
        <GridCardItem>
          <FormControl sx={{ width: "50%" }}>
            <InputLabel id="game-length-select">Number of Questions</InputLabel>
            <Select
              labelId="game-length-select"
              value={gameLength}
              label="Number of Questions"
              onChange={handleLengthChange}
            >
              <MenuItem value="0">Endless</MenuItem>
              <MenuItem value="20">20</MenuItem>
              <MenuItem value="40">40</MenuItem>
            </Select>
          </FormControl>
        </GridCardItem>
        <GridCardItem alignSelf="end">
          <Link href="/game" passHref>
            <Button variant="outlined" color="success">
              <Typography variant="h4">Play</Typography>
            </Button>
          </Link>
        </GridCardItem>
      </Grid>
    </>
  );
};

export default GameCard;
