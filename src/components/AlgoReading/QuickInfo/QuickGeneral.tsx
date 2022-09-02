import { Grid, Typography, Box } from "@mui/material/";
import ComplexityTableAlgo from "../ComplexityTableAlgo";
import TextPopover from "../TextPopUpsAlgo/AlgoTextPopover";

const QuickGeneral = () => {
  return (
    <Grid container>
      <Grid item xs={12} lg={8} sx={{ p: 4, borderBottom: "1px solid black" }}>
        <Typography variant="h6" gutterBottom>
          Quick sort is an <TextPopover text="IN-PLACE" /> sorting algorithm. Similar to merge sort
          it uses <TextPopover text="DIVIDE-AND-CONQUER" /> as its guiding principle. Naturally, it
          also can be implemented using <TextPopover text="RECURSION" />.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Instead of breaking down every element into a list of size 1 then merging together, Quick
          Sort uses a pivot element the separate the array into two subsists, where one list
          contains elements smaller than the pivot and the other larger than the pivot.The smallest
          possible sub-list being a size of 2.
        </Typography>
        <Typography variant="h6" gutterBottom>
          The choice of a pivot value can change the performance of the algorithm in certain lists.
          All questions and implementations on this site use the leftmost element as the pivot, for
          the sake of simplicity.
        </Typography>
        <Typography variant="h6" gutterBottom>
          However, this choice can lead to the worst case performance. Typically, the best method
          for choosing the pivot is the (median of three), where you choose the median values of the
          first, middle, and last elements.
        </Typography>
      </Grid>
      <Grid item xs={12} lg={4} sx={{ p: 4, borderBottom: "1px solid black" }}>
        <Box>&nbsp;</Box>
      </Grid>
      <Grid item xs={12} lg={4} sx={{ p: 4, textAlign: "center" }}>
        <ComplexityTableAlgo
          timeComplexityArray={["O(nlogn)", "O(nlogn)", "O(n\u00B2)"]}
          space="O(logn)"
        />
      </Grid>
      <Grid item xs={12} lg={8} sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          The <TextPopover text="TIME" /> and <TextPopover text="SPACE" /> complexities of Quick
          sort in <TextPopover text="BIG O" /> notation can be seen in the table. Just like merge
          sort, it has an best and average performance of O(nlogn).
        </Typography>
        <Typography variant="h6" gutterBottom>
          But it also can have a worst case performance of O(n&#178;). If the pivot is chosen as the
          leftmost element and the input array is an already sorted list (ascending or descending)
          or an array with the exact same values we will get a worst case performance. This because
          in all of these cases the pivot will create unbalanced sub-lists of wildly different
          sizes. With an already sorted list, the algorithm will create two sub-lists of size 0 and
          size n-1.
        </Typography>
        <Typography variant="h6" gutterBottom>
          This because in these cases the pivot will create unbalanced sub-lists of wildly different
          sizes. With an already sorted list for example, the algorithm will create two sub-lists of
          size 1 and size n-1, which is inefficient for divide-and-conquer.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Because the smallest possible list is only size 2, we do not need to create a new list for
          every element, which gives quick sort a better space complexity of O(logn) compared to
          Merge Sort.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default QuickGeneral;
