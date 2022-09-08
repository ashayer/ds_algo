import { useEffect, useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import type { NextPage } from "next";
import AlgoSectionArray from "../../utils/algoSectionReading";
import StructureSectionArray from "../../utils/structureSectionReading";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DataStructureAccordion from "../../components/ReadingsGeneral/Accordion";

const localStorageHelper = () => {
  if (typeof window !== "undefined") {
    const isAlgoReading = localStorage.getItem("algoReading");
    const isStructureReading = localStorage.getItem("structureReading");

    if (!isAlgoReading) {
      localStorage.setItem("algoReading", JSON.stringify(AlgoSectionArray));
    }
    if (!isStructureReading) {
      localStorage.setItem("structureReading", JSON.stringify(StructureSectionArray));
    }
  }
};

const StructureReading: NextPage = () => {
  const [sectionNum, setSectionNum] = useState<number>(0);
  const [sectionArray, setSectionArray] = useState<any>(JSON.stringify(StructureSectionArray));
  const [currentSubSection, setCurrentSubSection] = useState("");

  const nextSection = () => {
    setCurrentSubSection("");
    if (sectionNum < sectionArray.length - 1) setSectionNum(sectionNum + 1);
  };

  const prevSection = () => {
    setCurrentSubSection("");
    if (sectionNum > 0) setSectionNum(sectionNum - 1);
  };

  useEffect(() => {
    localStorageHelper();
    if (typeof window !== "undefined") {
      setSectionArray(JSON.parse(localStorage.getItem("structureReading") as string));
    }
  }, []);

  return (
    <Box maxWidth="xl" sx={{ marginInline: "auto", mt: 2 }}>
      {sectionArray.length > 0 && (
        <>
          <DataStructureAccordion
            sectionNum={sectionNum}
            sectionArray={sectionArray}
            setSectionArray={setSectionArray}
            currentSubSection={currentSubSection}
            setCurrentSubSection={setCurrentSubSection}
            isAlgo={false}
          />
          <Grid
            container
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2vh",
            }}
          >
            <Button
              onClick={prevSection}
              variant="contained"
              disabled={sectionNum < 1}
              sx={{
                visibility: `${sectionNum === 0 ? "hidden" : "visible"}`,
              }}
            >
              <ArrowBackIcon />
              {sectionNum > 0 ? `${sectionArray[sectionNum - 1].sectionName}` : null}
            </Button>

            <Button
              onClick={nextSection}
              variant="contained"
              disabled={
                sectionNum === sectionArray.length - 1 || !sectionArray[sectionNum].completed
              }
              sx={{
                visibility: `${sectionNum === sectionArray.length - 1 ? "hidden" : "visible"}`,
              }}
            >
              {sectionNum < sectionArray.length - 1
                ? `${sectionArray[sectionNum + 1].sectionName}`
                : null}
              <ArrowForwardIcon />
            </Button>
          </Grid>
        </>
      )}
    </Box>
  );
};

export default StructureReading;
