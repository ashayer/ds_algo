import { Grid, Typography, Box } from "@mui/material/";
import ComplexityTable from "../ComplexityTableStructure";
import TextPopover from "../TextPopUpsStructure/StructureTextPopover";

const StackGeneral = () => {
  return (
    <Grid container>
      <Grid item xs={12} lg={8} sx={{ p: 4, borderBottom: "1px solid black" }}>
        <Typography variant="h6" gutterBottom>
          A stack is also an <TextPopover text="ABSTRACT" /> data structure but stores data in a{" "}
          <TextPopover text="LAST-IN-FIRST-OUT" /> order. This means that that the topmost item of
          the stack is the most recently item added to the stack and the last item in the stack is
          the first one that was added. Like a can of Pringles, that bottom chip cannot be reached
          until you eat the ones on top. The <TextPopover text="METHODS" /> of the stack structure
          only have access to that topmost element.
        </Typography>
        <Typography variant="h6" gutterBottom>
          The common operations available to a stack data structure are the following.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Push - add an item onto the stack
        </Typography>
        <Typography variant="h6" gutterBottom>
          Pop - remove the topmost item of the stack and return it
        </Typography>
        <Typography variant="h6" gutterBottom>
          IsEmpty - check if the stack is empty
        </Typography>
      </Grid>
      <Grid item xs={12} lg={4} sx={{ p: 4, borderBottom: "1px solid black" }}>
        <Box>Diagram</Box>
      </Grid>
      <Grid item xs={12} lg={4} sx={{ p: 4, textAlign: "center" }}>
        <ComplexityTable complexityArray={["O(n)", "O(1)"]} />
      </Grid>
      <Grid item xs={12} lg={8} sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          The <TextPopover text="TIME" /> complexities for common operations are shown here. A stack
          is simply the reverse behavior of a queue. Therefore the time complexities are the same
          for all operations.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Just like with a queue to access items that are not immediately available the time
          complexity changes. To access the bottommost element we have to pop off all the ones on
          top and store them temporarily in another stack, giving access/search a O(n) time
          complexity.
        </Typography>
        <Typography variant="h6">
          Otherwise we can only immediately access the top most element. So to remove or delete an
          element. We can do that in O(1) time as we can only change the top.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default StackGeneral;
