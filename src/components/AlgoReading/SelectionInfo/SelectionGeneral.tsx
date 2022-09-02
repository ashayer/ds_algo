import { Grid, Typography, Box } from "@mui/material/";
import ComplexityTableAlgo from "../ComplexityTableAlgo";
import TextPopover from "../TextPopUpsAlgo/AlgoTextPopover";

const SelectionGeneral = () => {
  return (
    <Grid container>
      <Grid item xs={12} lg={8} sx={{ p: 4, borderBottom: "1px solid black" }}>
        <Typography variant="h6" gutterBottom>
          Selection sort is yet another <TextPopover text="IN-PLACE" /> sorting algorithm. It also
          creates a sorted and unsorted section but the unsorted section has been searched through,
          unlike Insertion Sort.
        </Typography>
        <Typography variant="h6" gutterBottom>
          This is because at each iteration the algorithm finds the smallest value in rest of the
          entire unsorted section and swaps that element with the element at the start of the
          unsorted section.The sorted section will always be built in the final order. Meaning that
          as soon as an element is swapped it will stay there for the rest of the algorithm.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Selection sort although also being a <TextPopover text="QUADRATIC" /> sorting algorithm it
          is much less efficient compared to Insertion sort.
        </Typography>
      </Grid>
      <Grid item xs={12} lg={4} sx={{ p: 4, borderBottom: "1px solid black" }}>
        <Box>&nbsp;</Box>
      </Grid>
      <Grid item xs={12} lg={4} sx={{ p: 4, textAlign: "center" }}>
        <ComplexityTableAlgo
          timeComplexityArray={["O(n\u00B2)", "O(n\u00B2)", "O(n\u00B2)"]}
          space="O(1)"
        />
      </Grid>
      <Grid item xs={12} lg={8} sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          The <TextPopover text="TIME" /> and <TextPopover text="SPACE" /> complexities of selection
          sort in <TextPopover text="BIG O" /> notation can be seen in the table. In all cases
          selection sort will have a time complexity of O(n&#178;). in-place.
        </Typography>
        <Typography variant="h6" gutterBottom>
          This is because it will always have to search through the entire unsorted section to find
          the smallest value. Even if the current element being compared is in the right position
          already the algorithm does not know that so it must ensure it is the smallest.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Selection sort is also <TextPopover text="UNSTABLE" />, given that the swaps are based on
          the minimum value found which can change the order of elements with the same value.
        </Typography>
        <Typography variant="h6">
          Selection sort also has a space complexity of O(1) since it is in-place just like
          Insertion Sort.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SelectionGeneral;
