import { Grid, Typography, Box } from "@mui/material/";
import ComplexityTableAlgo from "../ComplexityTableAlgo";
import TextPopover from "../TextPopUpsAlgo/AlgoTextPopover";

const InsertionGeneral = () => {
  return (
    <Grid container>
      <Grid item xs={12} lg={8} sx={{ p: 4, borderBottom: "1px solid black" }}>
        <Typography variant="h6" gutterBottom>
          Insertion sort is an <TextPopover text="IN-PLACE" /> sorting algorithm that functions
          similar to how one would sort a deck of cards by hand. Through each iteration it will
          created a smaller sorted subsection of the original array with the values compared so far.
          The head of the smaller section will always be the largest value seen so far.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Because of this each iteration does not always put the current element in its final
          position. The position of any element can change as it seeks through the unsorted section.
        </Typography>
        <Typography variant="h6">
          Similar to other <TextPopover text="QUADRATIC" /> sorting algorithms it is very efficient
          for smaller data sets. In fact variations of the quick sort algorithm, which will be
          covered later, use insertion sort for smaller arrays, commonly around the size of 10
          instead of its typical algorithm. It is also very efficient on nearly sorted lists as
          well, due to the nature of its conditional swaps.
        </Typography>
      </Grid>
      <Grid item xs={12} lg={4} sx={{ p: 4, borderBottom: "1px solid black" }}>
        <Box>&nbsp;</Box>
      </Grid>
      <Grid item xs={12} lg={4} sx={{ p: 4, textAlign: "center" }}>
        <ComplexityTableAlgo
          timeComplexityArray={["O(n)", "O(n\u00B2)", "O(n\u00B2)"]}
          space="O(1)"
        />
      </Grid>
      <Grid item xs={12} lg={8} sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          The <TextPopover text="TIME" /> and <TextPopover text="SPACE" /> complexities of Insertion
          Sort in <TextPopover text="BIG O" /> notation can be seen in the table. As you can see it
          has the best case of O(n), which is only possible if the array is already sorted.
        </Typography>
        <Typography variant="h6" gutterBottom>
          This is also the reason why it is more efficient on already sorted arrays. It only has to
          do a comparison which the adjacent element. If it compares two element with the same value
          it just moves on to the next iteration. This also gives insertion sort the property of
          being a <TextPopover text="STABLE" /> sorting algorithm.
        </Typography>
        <Typography variant="h6">
          For the Space Complexity since it is an in-place algorithm, insertion sort has a space
          complexity of O(1).
        </Typography>
      </Grid>
    </Grid>
  );
};

export default InsertionGeneral;
