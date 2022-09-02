import { useState } from "react";
import { Grid, Typography, Box } from "@mui/material/";
import TextPopover from "../TextPopUpsStructure/StructureTextPopover";
import CodeBlock from "../../CodeBlock/CodeBlock";
import HighlightLine from "../../HighlightLineText/HighlightLineText";

const Queue = ({ hoveredLine }) => {
  const codeString = `class Queue {
  public:
    int items[SIZE];
    int front, rear;

    Queue() {
      front = -1;
      rear = -1;
    }

    bool isEmpty() {
      return (front < 0);
    }

    bool isFull() {
      return (rear == SIZE - 1);
    }

    int peek() {
      if(isEmpty()) return -1;
      else return items[front];
    }

    void enQueue(int element) {
      if (isEmpty()) front = 0;
      items[rear++] = element;
    }

    void deQueue() {
      if (isEmpty()) return;
      if (front >= rear) {
        front = -1;
        rear = -1;
      }
      else front++;
    }
};`;
  return <CodeBlock hoveredLine={hoveredLine} code={codeString} />;
};

const QueueCode = () => {
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
            <Queue hoveredLine={hoveredLine} />
          </Box>
        </Grid>
        <Grid item lg={9} md={8} sm={12} xs={6} sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom>
            This is the code to a simplified implementation the queue data structure with a class
            with some basic methods. The <TextPopover text="METHODS" /> as previously mentioned are
            to enqueue <HighlightLine lineNum={[24]} setHoveredLine={setHoveredLine} />, dequeue{" "}
            <HighlightLine lineNum={[29]} setHoveredLine={setHoveredLine} />, check if the queue is
            empty <HighlightLine lineNum={[11]} setHoveredLine={setHoveredLine} /> or full{" "}
            <HighlightLine lineNum={[15]} setHoveredLine={setHoveredLine} />
            and peek <HighlightLine lineNum={[19]} setHoveredLine={setHoveredLine} />
            at the front element.
          </Typography>
          <Typography variant="h6" gutterBottom>
            For this implementation we are using an array of a <TextPopover text="STATIC" /> size
            determined by the variable size as seen on{" "}
            <HighlightLine lineNum={[3]} setHoveredLine={setHoveredLine} />. On{" "}
            <HighlightLine lineNum={[4]} setHoveredLine={setHoveredLine} /> we are creating the
            front and rear pointers to give the array the behavior of the queue and initializing
            them in the class constructor on{" "}
            <HighlightLine lineNum={[6]} setHoveredLine={setHoveredLine} />. These two variables are
            the only indexes of the array that we have access to satisfy the behavior of a queue.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Futhermore, the front and rear variables are initialized to -1 since the index of any
            array starts at 0 an index of -1 means that there are not any elements in the queue. On{" "}
            <HighlightLine lineNum={[25]} setHoveredLine={setHoveredLine} /> for example, when we
            try to insert an element we check if the queue is empty, if so we can assign that front
            index to that first element at position 0 in the array.
          </Typography>
          <Typography variant="h6">
            For the dequeue implementation{" "}
            <HighlightLine lineNum={[29]} setHoveredLine={setHoveredLine} /> we can just increment
            the pointer of the front by one. Since it no longer points to that element at the
            previous index, it is essentially deleted.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QueueCode;
