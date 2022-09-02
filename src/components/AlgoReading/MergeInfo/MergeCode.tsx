import { useState } from "react";
import { Grid, Typography, Box } from "@mui/material/";
import TextPopover from "../TextPopUpsAlgo/AlgoTextPopover";
import CodeBlock from "../../CodeBlock/CodeBlock";
import HighlightLineText from "../../HighlightLineText/HighlightLineText";
import { mergeString, mergeSortString } from "../../../assets/AlgoStrings";

const MergeCode = () => {
  const [hoveredLine, setHoveredLine] = useState<number[]>([]);

  return (
    <Grid container>
      <Grid container sx={{ align: "center", alignItems: "center" }}>
        <Grid item lg={4} md={12} sm={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CodeBlock hoveredLine={hoveredLine} code={mergeSortString} startingLineNumber={21} />
          </Box>
        </Grid>
        <Grid item lg={8} md={12} sm={12} xs={12} sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom>
            This is the code for the Merge Sort algorithm which can be implemented using two
            functions.
          </Typography>
          <Typography variant="h6" gutterBottom>
            The mergeSort function takes an array to be sorted a left index and a right index{" "}
            <HighlightLineText lineNum={[21]} setHoveredLine={setHoveredLine} />
            as the parameters. This function uses <TextPopover text="RECURSION" /> to call itself
            repeatedly until the left index is greater than or equal to the right index{" "}
            <HighlightLineText lineNum={[22]} setHoveredLine={setHoveredLine} />, which means the
            current array is of size 1 and can no longer be split.
          </Typography>
          <Typography variant="h6" gutterBottom>
            At each call, the middle index of the array is calculated{" "}
            <HighlightLineText lineNum={[23]} setHoveredLine={setHoveredLine} /> that allows for the
            recursion to go through one half, starting with the left. After all the arrays have been
            split into a size of 1, the merge function is called{" "}
            <HighlightLineText lineNum={[26]} setHoveredLine={setHoveredLine} />.
          </Typography>
        </Grid>
        <Grid item lg={5} md={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CodeBlock hoveredLine={hoveredLine} code={mergeString} startingLineNumber={0} />
          </Box>
        </Grid>
        <Grid item lg={7} xs={12} sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom>
            This merge function is where the elements will be compared and swapped. In this
            implementation we use an auxillary array that stores the current values of the passed in
            subarray <HighlightLineText lineNum={[4]} setHoveredLine={setHoveredLine} />, to be used
            a secondary array for comparisons, this gives the space complexity of O(n) as previously
            mentioned.
          </Typography>
          <Typography variant="h6" gutterBottom>
            In this function we have two pointers for the indexes of that temp array we just
            created. i is the leftmost index. j is index to the right of the middle{" "}
            <HighlightLineText lineNum={[3]} setHoveredLine={setHoveredLine} /> hence the + 1.
          </Typography>
          <Typography variant="h6" gutterBottom>
            We use a loop that iterates from the left index to the right index of the subarray that
            we get from the parameters{" "}
            <HighlightLineText lineNum={[1]} setHoveredLine={setHoveredLine} />.
          </Typography>
          <Typography variant="h6" gutterBottom>
            If i which is the left index of the array is greater than the middle index, it means
            that only the right subarray remains as we have iterated through all of the left side of
            the temp array. So swap the value in the temp array at index j with the k index in the
            original array.
            <HighlightLineText lineNum={[8]} setHoveredLine={setHoveredLine} />
          </Typography>
          <Typography variant="h6" gutterBottom>
            If the j the index to the right of the middle is greater than the right index, that
            means only the left subarray remains as we have iterated through the entire right side
            of the temp array. So swap the value in the temp array at index i with the k index in
            the original array. <HighlightLineText lineNum={[11]} setHoveredLine={setHoveredLine} />
          </Typography>
          <Typography variant="h6" gutterBottom>
            If neither of those conditions are met that means that we need to compare the i and j
            indexes. If the value in the temp array at index j is less than i, we want to swap that
            smaller value in the original array.
            <HighlightLineText lineNum={[14]} setHoveredLine={setHoveredLine} />. Then increase j.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Otherwise if the value in the temp array at index j is greater than at index i, we want
            to swap that value at the i index instead.
            <HighlightLineText lineNum={[17]} setHoveredLine={setHoveredLine} /> Then increase i.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MergeCode;
