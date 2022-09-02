import { useState } from "react";
import { Box, Button, Grid } from "@mui/material";

// const getUserStructureReading = async (id: string) => {
//   const response = await axios.get(`/api/user/getStructureReading/${id}`);
//   return response.data;
// };

const StructureReading = () => {
  const [sectionNum, setSectionNum] = useState<number>(0);
  //   const id = useAuthStore((state) => state.id);
  const [sectionArray, setSectionArray] = useState<any>([]);
  const [currentSubSection, setCurrentSubSection] = useState("");

  //   const { data, isLoading, isSuccess, isError } = useQuery<ReadingSection[], Error>(
  //     ["get-structure-reading"],
  //     () => getUserStructureReading(id),
  //     { onSuccess: setSectionArray },
  //   );

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
      {/* {isSuccess && !isLoading && sectionArray.length > 0 && (
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
      )} */}
    </Box>
  );
};

export default StructureReading;
