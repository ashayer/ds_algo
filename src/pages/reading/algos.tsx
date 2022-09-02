import { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
// import SortingAlgorithmAccordion from "../../components/ReadingsGeneral/Accordion";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
// import useAuthStore from "../../stores/authStore";

// const getUserAlgoReading = async (id: string) => {
//   const response = await axios.get(`/api/user/getAlgoReading/${id}`);
//   return response.data;
// };
import type { NextPage } from "next";

const AlgoReading: NextPage = () => {
  const [sectionNum, setSectionNum] = useState<number>(0);
  // const id = useAuthStore((state) => state.id);
  const [sectionArray, setSectionArray] = useState<any>([]);
  const [currentSubSection, setCurrentSubSection] = useState("");

  // const { data, isLoading, isSuccess, isError } = useQuery<ReadingSection[], Error>(
  //   ["get-algo-reading"],
  //   () => getUserAlgoReading(id),
  //   { onSuccess: setSectionArray },
  // );

  const nextSection = () => {
    setCurrentSubSection("");
    if (sectionNum < sectionArray.length - 1) setSectionNum(sectionNum + 1);
  };

  const prevSection = () => {
    setCurrentSubSection("");
    if (sectionNum > 0) setSectionNum(sectionNum - 1);
  };

  return (
    <Box maxWidth="xl" sx={{ marginInline: "auto", mt: 2 }}>
      <>asdasdasda</>
      {/* {isSuccess && !isLoading && sectionArray.length > 0 && (
        <>
          <SortingAlgorithmAccordion
            sectionNum={sectionNum}
            sectionArray={sectionArray}
            setSectionArray={setSectionArray}
            currentSubSection={currentSubSection}
            setCurrentSubSection={setCurrentSubSection}
            isAlgo={true}
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
      )} */}
    </Box>
  );
};

export default AlgoReading;
