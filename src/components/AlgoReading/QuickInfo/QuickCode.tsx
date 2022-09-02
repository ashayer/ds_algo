import { useState } from "react";
import { Grid, Typography, Box } from "@mui/material/";
import TextPopover from "../TextPopUpsAlgo/AlgoTextPopover";
import CodeBlock from "../../CodeBlock/CodeBlock";
import HighlightLineText from "../../HighlightLineText/HighlightLineText";
import { partitionString, quickSortString } from "../../../assets/AlgoStrings";
const QuickCode = () => {
  const [hoveredLine, setHoveredLine] = useState<number[]>([]);

  return (
    <Grid container>
      <Grid container sx={{ align: "center", alignItems: "center" }}>
        <Grid item lg={4} md={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CodeBlock hoveredLine={hoveredLine} code={quickSortString} startingLineNumber={12} />
          </Box>
        </Grid>
        <Grid item lg={8} md={12} sm={12} xs={12} sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom>
            This is the code for the quick sort algorithm which also can be written with two
            functions. The quickSort function similar to the one in mergeSort uses{" "}
            <TextPopover text="RECURSION" /> to split the array into smaller sub-lists until the
            left index is greater than or equal to the right index.
          </Typography>
          <Typography variant="h6">
            Instead of a middle index, we calculate a pivot{" "}
            <HighlightLineText lineNum={[14]} setHoveredLine={setHoveredLine} /> which functions as
            the center for the next two sub-lists to be created. This pivot index is found using the
            second partition function.
          </Typography>
        </Grid>
        <Grid item lg={4} md={12} sm={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CodeBlock hoveredLine={hoveredLine} code={partitionString} startingLineNumber={0} />;
          </Box>
        </Grid>
        <Grid item lg={8} md={12} sm={12} xs={12} sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom>
            As mentioned previously we use the left most as the index{" "}
            <HighlightLineText lineNum={[2]} setHoveredLine={setHoveredLine} />
            <HighlightLineText lineNum={[3]} setHoveredLine={setHoveredLine} /> for the pivot.
          </Typography>
          <Typography variant="h6" gutterBottom>
            When then loop from the left to the right index of the current array. At each iteration
            we check if the value at index i is less than the pivotValue which is the leftmost
            element. If it is less than the pivotValue we swap that element at i with the element at
            pivotIndex + 1 <HighlightLineText lineNum={[6]} setHoveredLine={setHoveredLine} />. It
            is important to increment the pivotIndex, before swapping.
          </Typography>
          <Typography variant="h6" gutterBottom>
            At the end of that loop we swap the element at the left index with the element at the
            pivotIndex. The resulting array, will have all elements less than pivotValue to the left
            of the pivotIndex, and all elements greater to the right. We also now have the new
            pivotIndex. <HighlightLineText lineNum={[10]} setHoveredLine={setHoveredLine} />
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QuickCode;

// int main() {
//   vector<int> test = {5,3,1,45,24,4,7,3,1,3,2,8,5,7};
//   quickSort(test, 0, 13);
//   for(int i = 0; i<14; i++){
//       cout << test[i] << " ";
//   }
//   cout << endl;
//   return 0;
// }
