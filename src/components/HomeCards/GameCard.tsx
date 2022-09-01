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
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import styles from "./HomeCardsStyles";
import GridCardItem from "./GameCardItem";

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
          <Button variant="outlined" color="success">
            <Typography variant="h3">Play</Typography>
          </Button>
        </GridCardItem>
      </Grid>
    </>
  );
};

export default GameCard;
