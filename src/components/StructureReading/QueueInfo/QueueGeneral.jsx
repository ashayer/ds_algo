import { Grid, Typography, Box } from "@mui/material/";
import ComplexityTable from "../ComplexityTableStructure";
import TextPopover from "../TextPopUpsStructure/StructureTextPopover";

const QueueGeneral = () => {
  return (
    <Grid container>
      <Grid item xs={12} lg={8} sx={{ p: 4, borderBottom: "1px solid black" }}>
        <Typography variant="h6" gutterBottom>
          A queue is an <TextPopover text="ABSTRACT" /> data structure to store data in a{" "}
          <TextPopover text="FIRST-IN-FIRST-OUT" /> order, similar to waiting in line in real life.
          This means that the front of the queue will be the first item to be available to have
          access to using the <TextPopover text="METHODS" /> of the structure.
        </Typography>
        <Typography variant="h6" gutterBottom>
          The common operations available to a queue data structure are the following.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Enqueue - add an element to the end of the queue
        </Typography>
        <Typography variant="h6" gutterBottom>
          Dequeue - remove the element in the front of the queue
        </Typography>
        <Typography variant="h6" gutterBottom>
          IsEmpty/IsFull - check if the queue is empty or full
        </Typography>
        <Typography variant="h6">Peek - get the value at the front of the queue</Typography>
      </Grid>
      <Grid item xs={12} lg={4} sx={{ p: 4, borderBottom: "1px solid black" }}>
        <Box>Diagram</Box>
      </Grid>
      <Grid item xs={12} lg={4} sx={{ p: 4, textAlign: "center" }}>
        <ComplexityTable complexityArray={["O(n)", "O(1)"]} />
      </Grid>
      <Grid item xs={12} lg={8} sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          The <TextPopover text="TIME" /> complexities for common operations are shown here. The
          time complexities for a queue is a bit more conditional.
        </Typography>
        <Typography variant="h6" gutterBottom>
          We can immediately insert elements to the end and delete items from the front as that is
          all we have access to with our pointers. However, to access or change the last element or
          any element in between for example, we have to go through every element before it, since a
          queue does not have <TextPopover text="INDEXING" /> . In that case the time complexity
          becomes O(n).
        </Typography>
        <Typography variant="h6" gutterBottom>
          For any operations that affect elements that are not the front or tail we have to dequeue
          all the elements and store them in another queue until we have access to the one we want
          and enqueue all the items back into the original array.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default QueueGeneral;
