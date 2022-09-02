import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const StepLabels = ({ varLabelArray, idx }: StepLabelsProps) => {
  const indexArray = varLabelArray?.filter((o) => o.index === idx);
  return (
    <>
      {indexArray.map((object, index) => (
        <Typography variant="h6" sx={{ width: "6vw" }} key={index}>
          {object.label}
        </Typography>
      ))}
    </>
  );
};

const ArrayBars = ({ sortHistoryArray, step, varLabelArray, arrayMax }: ArrayBarsProps) => {
  return (
    <Grid
      container
      sx={{
        position: "relative",
        justifyContent: "space-evenly",
        mt: "2vh",
      }}
    >
      {sortHistoryArray[step]?.map((element, idx) => (
        <Grid
          item
          key={idx}
          sx={{
            height: "35vh",
            width: "6vw",
            textAlign: "center",
          }}
        >
          {varLabelArray.length > 0 && (
            <StepLabels
              varLabelArray={varLabelArray[step] as SortLabelHistoryElement[]}
              idx={idx}
            />
          )}
          <Box
            sx={{
              height: `${(element.value * 65) / arrayMax}%`,
              backgroundColor: element.color,
              position: "absolute",
              bottom: "0",
              borderRadius: "5px 5px 0px 0px",
              transition: "all 0.15s ease",
            }}
          >
            <Typography variant="h4" sx={{ width: "6vw" }}>
              {`${element.value}`}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ArrayBars;
