import { Grid, Typography, Box } from "@mui/material/";
import ComplexityTable from "../ComplexityTableStructure";
import TextPopover from "../TextPopUpsStructure/StructureTextPopover";

const BinaryTreeGeneral = () => {
  return (
    <Grid container>
      <Grid item xs={12} lg={8} sx={{ p: 4, borderBottom: "1px solid black" }}>
        <Typography variant="h6" gutterBottom>
          A binary tree is a data structure that unsurprisingly follows a similar structure to a
          tree, except upside down. Where the branches and leaves visually grow and expand downwards
          from the root. Similar to a linked list, every element is a node with children. In the
          case of a binary tree however, every node will linked to exactly two children.
        </Typography>
        <Typography variant="h6" gutterBottom>
          However a basic binary tree is only useful for storing data. If you want to do some
          operations like searching you need to create a Binary Search Tree instead for greater
          efficiency. A binary search tree has a condition where for every node all the children on
          its left must be smaller and all the children on its right must be greater.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Ideally the node at the root should be the middle value of all nodes so that the left and
          right side are even in size.
        </Typography>
      </Grid>
      <Grid item xs={12} lg={4} sx={{ p: 4, borderBottom: "1px solid black" }}>
        <Box>Diagram</Box>
      </Grid>
      <Grid item xs={12} lg={4} sx={{ p: 4, textAlign: "center" }}>
        <ComplexityTable complexityArray={["O(logn)", "O(logn)"]} />
      </Grid>
      <Grid item xs={12} lg={8} sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          The <TextPopover text="TIME" /> complexities for common operations are shown here. As you
          can that all operations have the same time complexity since all of them require traversing
          through the tree. There is no immediate access. Even to delete the root node, we have to
          go through the remaining nodes to create a root node.
        </Typography>
        <Typography variant="h6" gutterBottom>
          The time complexity for some cases is faster than the previous data structures because we
          only have to search through half of the tree. Since if the value we want is less than the
          current node we simply go down the left path, otherwise we go down the right.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default BinaryTreeGeneral;
