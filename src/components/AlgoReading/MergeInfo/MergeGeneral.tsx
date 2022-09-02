import { Grid, Typography, Box } from "@mui/material/";
import ComplexityTableAlgo from "../ComplexityTableAlgo";
import TextPopover from "../TextPopUpsAlgo/AlgoTextPopover";

const MergeGeneral = () => {
  return (
    <Grid container>
      <Grid item xs={12} lg={8} sx={{ p: 4, borderBottom: "1px solid black" }}>
        <Typography variant="h6" gutterBottom>
          Merge sort is an <TextPopover text="OUT-OF-PLACE" /> sorting algorithm that uses the
          principle of <TextPopover text="DIVIDE-AND-CONQUER" /> to sort.
        </Typography>
        <Typography variant="h6" gutterBottom>
          The typical Merge sort implementation will break down the original array using{" "}
          <TextPopover text="RECURSION" /> into smaller arrays of size 1. Then those smaller
          sub-lists will be merged together based on their values to produce a sorted array.
        </Typography>
        <Typography variant="h6" gutterBottom>
          As a result of that recursive behavior it will first sort the entire left half of the
          array then the right half. Then it will finally merge those two together to sort the
          array.
        </Typography>
        <Typography variant="h6">
          Unlike insertion or selection sort, Merge sort is a <TextPopover text="LINEARITHMIC" />{" "}
          algorithm, as it does not use a <TextPopover text="NESTED FOR LOOP" />.
        </Typography>
      </Grid>
      <Grid item xs={12} lg={4} sx={{ p: 4, borderBottom: "1px solid black" }}>
        <Box>&nbsp;</Box>
      </Grid>
      <Grid item xs={12} lg={4} sx={{ p: 4, textAlign: "center" }}>
        <ComplexityTableAlgo
          timeComplexityArray={["O(nlogn)", "O(nlogn)", "O(nlogn)"]}
          space="O(n)"
        />
      </Grid>
      <Grid item xs={12} lg={8} sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          The <TextPopover text="TIME" /> and <TextPopover text="SPACE" /> complexities of Merge
          sort in <TextPopover text="BIG O" /> notation can be seen in the table. In all cases Merge
          sort will be O(nlogn). Even for an already sorted array, Merge sort will require the same
          time as an unsorted array.
        </Typography>
        <Typography variant="h6" gutterBottom>
          This is because regardless of the values and order, the entire array must be broken down
          into the size 1 sub-lists. All sub-lists will always be compared regardless of the their
          original values. The space complexity is O(n) for this same reason.
        </Typography>
        <Typography variant="h6">
          For every element in the original array the algorithm will need to create a list
          containing just that element, so the algorithm will using at least n number of lists,
          where n is the length of the list.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default MergeGeneral;
