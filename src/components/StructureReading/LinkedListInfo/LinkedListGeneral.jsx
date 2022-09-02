import { Grid, Typography, Box } from "@mui/material/";
import ComplexityTable from "../ComplexityTableStructure";
import TextPopover from "../TextPopUpsStructure/StructureTextPopover";

const LinkedListGeneral = () => {
  return (
    <Grid container>
      <Grid item xs={12} lg={8} sx={{ p: 4, borderBottom: "1px solid black" }}>
        <Typography variant="h6" gutterBottom>
          A Linked List is a data structure that stores its data using nodes which contain a value
          and a link, typically a pointer to the address of the next node. Together the connected
          nodes represent the entire list.
        </Typography>
        <Typography variant="h6" gutterBottom>
          The benefit of this linked behavior is that to add or remove an element, you do not need
          to shift the rest of the elements in the list like you would have to when adding/deleting
          in an array. You can simply relink the nodes as needed. However because a linked list also
          does not have <TextPopover text="INDEXING" /> to find the node you want to alter you have
          to iterate through all nodes.
        </Typography>
        <Typography variant="h6" gutterBottom>
          The most basic Linked List is called a Singly-Linked-List (SLL), where each node is
          connected to the next one only. The last node is connected to a NULL terminator to
          indicate the end of the list. This version has no link to the front of the list.
        </Typography>
        <Typography variant="h6" gutterBottom>
          To improve the usability a Doubly-Linked-List (DLL) includes a second link to the previous
          node. So at each node you have two links, one to the next node and one to the previous. In
          this version the first node has a previous linked to a NULL terminator to indicate the
          start of the list.
        </Typography>
        <Typography variant="h6">
          Finally a Circular-Linked-List (CLL) includes a special link from the last node to the
          first. This can also be doubly where the first node will also linked back to the last.
        </Typography>
      </Grid>
      <Grid item xs={12} lg={4} sx={{ p: 4, borderBottom: "1px solid black" }}>
        <Box>Diagrams</Box>
      </Grid>
      <Grid item xs={12} lg={4} sx={{ p: 4, textAlign: "center" }}>
        <ComplexityTable complexityArray={["O(n)", "O(1)"]} />
      </Grid>
      <Grid item xs={12} lg={8} sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          The <TextPopover text="TIME" /> complexities for common operations are shown here. The
          time complexities can vary depending on the known information of a linked list. Each
          element contains two pieces of information, the data and the pointer.
        </Typography>
        <Typography variant="h6">
          For example in a Singly-Linked-List, if we only know the data and we want to delete the
          node with a value of 1, we have to go through the entire list until we have that value.
          That would change the time complexity to O(n). Otherwise if we know the pointer to the
          node we want and the previous node, we have immediate access to alter the node.
        </Typography>
        <Typography variant="h6" gutterBottom>
          In a Doubly-Linked-List the behavior is the same, but instead of having to know the
          previous node, we only need to know the location of the node itself since we have two
          pointer already.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LinkedListGeneral;
