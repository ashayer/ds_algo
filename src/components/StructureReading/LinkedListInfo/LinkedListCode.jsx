import { useState } from "react";
import { Grid, Typography, Box } from "@mui/material/";
import CodeBlock from "../../CodeBlock/CodeBlock";
import HighlightLine from "../../HighlightLineText/HighlightLineText";

const SinglyLinkedListClass = ({ hoveredLine }) => {
  const nodeSl = `//Singly-Linked-List
class NodeSL {
  public:
    int value;
    NodeSL* next;
};

int main() {
  NodeSL* head;
  NodeSL* one = new NodeSL();
  NodeSL* two = new NodeSL();
  NodeSL* three = new NodeSL();
  
  one->value = 1;
  two->value = 2;
  three->value = 3;
  
  one->next = two;
  two->next = three;
  three->next = NULL;
  
  head = one;

  return 0;
}`;
  return <CodeBlock hoveredLine={hoveredLine} code={nodeSl} />;
};

const DoublyLinkedListClass = ({ hoveredLine }) => {
  const nodeDL = `//Doubly-Linked-List
class NodeDL {
  int value;
  NodeDL* next;
  NodeDL* prev;
}

int main() {
  NodeDL* head;
  NodeDL* one = new NodeDL();
  NodeDL* two = new NodeDL();
  NodeDL* three = new NodeDL();
  
  one->value = 1;
  two->value = 2;
  three->value = 3;
  
  one->next = two;
  one->prev = NULL;
  
  two->next = three;
  two->prev = one;
  
  three->next = NULL;
  three->prev = two;

  head = one;

  return 0;
}`;
  return <CodeBlock hoveredLine={hoveredLine} code={nodeDL} startingLineNumber={26} />;
};

const LinkedListCode = () => {
  const [hoveredLine, setHoveredLine] = useState([]);

  return (
    <Grid container>
      <Grid container sx={{ align: "center", alignItems: "center" }}>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <SinglyLinkedListClass hoveredLine={hoveredLine} />
          </Box>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <DoublyLinkedListClass hoveredLine={hoveredLine} />
          </Box>
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12} sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom>
            Here is the implementation and some basic initial operations for both a Singly and
            Doubly Linked List. On
            <HighlightLine lineNum={[2, 3, 4, 5, 6]} setHoveredLine={setHoveredLine} /> you have
            the class for a node in a SinglyLinkedList. The only values there are the value and a
            pointer to the next node.
          </Typography>
          <Typography variant="h6" gutterBottom>
            On <HighlightLine lineNum={[9, 10, 11, 12]} setHoveredLine={setHoveredLine} /> we
            created each node. We then set a value to each of the nodes{" "}
            <HighlightLine lineNum={[14, 15, 16]} setHoveredLine={setHoveredLine} />. Then we
            point the node to the next node respectively. As you can see on{" "}
            <HighlightLine lineNum={[20]} setHoveredLine={setHoveredLine} />, the last node is
            linked to null. Finally we set the head node to the first one.
          </Typography>
          <Typography variant="h6" gutterBottom>
            For the Doubly Linked List is the mostly the same except in the class on{" "}
            <HighlightLine lineNum={[27, 28, 29, 30, 31]} setHoveredLine={setHoveredLine} /> we
            have an extra value for the pointer for the previous node.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Furthermore, when we are linked the nodes we now have to linked the previous as well.{" "}
            <HighlightLine lineNum={[44, 47, 50]} setHoveredLine={setHoveredLine} />, so the first
            nodes previous pointer will linked to NULL in this case.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LinkedListCode;
