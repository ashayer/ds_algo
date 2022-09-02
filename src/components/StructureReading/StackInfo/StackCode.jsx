import { useState } from "react";
import { Grid, Typography, Box } from "@mui/material/";
import TextPopover from "../TextPopUpsStructure/StructureTextPopover";
import CodeBlock from "../../CodeBlock/CodeBlock";
import HighlightLine from "../../HighlightLineText/HighlightLineText";

const Stack = ({ hoveredLine }) => {
  const codeString = `class Stack {
  public:
    int items[SIZE], top;

    Stack() { 
      top = -1; 
    }

    bool isEmpty() {
      return (top < 0);
    }

    void push(int x) {
      if(top < SIZE - 1) items[++top] = x;
    }

    int pop() {
        if(isEmpty()) return -1
        else {
          int x = items[top--];
          return x;
        }
    }
};`;

  return <CodeBlock hoveredLine={hoveredLine} code={codeString} />;
};

const StackCode = () => {
  const [hoveredLine, setHoveredLine] = useState([]);

  return (
    <Grid container>
      <Grid container sx={{ align: "center", alignItems: "center" }}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Stack hoveredLine={hoveredLine} />
          </Box>
        </Grid>
        <Grid item lg={9} md={8} sm={12} xs={6} sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom>
            This is the code to implement the Stack data structure with a class. The{" "}
            <TextPopover text="METHODS" /> as previously mentioned are to push an element{" "}
            <HighlightLine lineNum={[13]} setHoveredLine={setHoveredLine} />, pop the topmost
            element <HighlightLine lineNum={[17]} setHoveredLine={setHoveredLine} /> and to check if
            the stack is empty <HighlightLine lineNum={[9]} setHoveredLine={setHoveredLine} />.
          </Typography>
          <Typography variant="h6" gutterBottom>
            On
            <HighlightLine lineNum={[3]} setHoveredLine={setHoveredLine} /> we are creating the
            array, and only the top pointer to give the array the behavior of the Stack, since we
            can only alter the topmost element.
          </Typography>
          <Typography variant="h6">
            Just like the queue implementation an index of -1 means the stack is empty. And since we
            are using a static size again, we have a limit to the amount of items that can be
            pushed. If you try to add too many items, it is called a stack overflow.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StackCode;
