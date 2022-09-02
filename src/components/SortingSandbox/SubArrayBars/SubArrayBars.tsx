import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const SubArrayStepLabels = ({ varLabelSubArray, idx }: StepLabelsSubProps) => {
  const indexArray = varLabelSubArray?.filter((o) => o.index === idx);
  return (
    <>
      {indexArray.map((object, index) => (
        <Typography variant="h6" sx={{ width: "5vw" }} key={index}>
          {object.label}
        </Typography>
      ))}
    </>
  );
};

const SubArrayBars = ({
  sortHistorySubArray,
  step,
  varLabelSubArray,
  arrayMax,
}: SubArrayBarsProps) => {
  return (
    <Grid
      container
      sx={{
        position: "relative",
        justifyContent: "space-evenly",
      }}
    >
      {sortHistorySubArray[step]?.map((element, idx) => (
        <Grid item key={idx} sx={{ height: "25vh", width: "5vw", textAlign: "center" }}>
          {varLabelSubArray.length > 0 && (
            <SubArrayStepLabels
              varLabelSubArray={varLabelSubArray[step] as SortLabelHistoryElement[]}
              idx={idx}
            />
          )}
          <Box
            sx={{
              height: `${(element.value * 85) / arrayMax}%`,
              backgroundColor: element.color,
              position: "absolute",
              bottom: "0",
              borderRadius: "5px 5px 0px 0px",
              transition: "all 0.15s ease",
            }}
          >
            <Typography variant="h6" sx={{ width: "5vw" }} gutterBottom>
              {`${element.value}`}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default SubArrayBars;
