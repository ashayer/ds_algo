import { Grid, Box, Typography, Button } from "@mui/material";
import CodeBlock from "../CodeBlock/CodeBlock";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import SyntaxHighlighter from "react-syntax-highlighter";
import { useState, useEffect } from "react";
import produce from "immer";

const DragCode = ({
  questionContent,
  questionDisplay,
  setQuestionDisplay,
}: {
  questionContent: DragArrayType[];
  questionDisplay: GameDisplayInfo;
  setQuestionDisplay: (displayInfo: GameDisplayInfo) => void;
}) => {
  const { height, width } = useWindowDimensions();

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }
    if (destination.index === source.index) {
      return;
    }
    const newLinesArray = Array.from(questionContent);
    newLinesArray.splice(source.index, 1);
    newLinesArray.splice(destination.index, 0, questionContent[source.index] as DragArrayType);
    questionContent = newLinesArray;

    const nextState = produce(questionDisplay, (draftState: GameDisplayInfo) => {
      draftState.content = newLinesArray;
    });

    setQuestionDisplay(nextState);
  };

  return (
    <Grid
      item
      container
      sx={{
        justifyContent: "center",
        mt: 2,
      }}
    >
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="1">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ justifyContent: "center" }}
            >
              {questionContent?.map((value: DragArrayType, idx: number) => (
                <Draggable draggableId={idx.toString()} index={idx} key={idx}>
                  {(provided) => (
                    <Box
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <SyntaxHighlighter
                        language="cpp"
                        customStyle={{
                          fontSize: customFontSize(width, height),
                          marginInline: "auto",
                          marginTop: 0,
                          marginBottom: 0,
                        }}
                        wrapLines
                      >
                        {`${value.lineContent}`}
                      </SyntaxHighlighter>
                    </Box>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Grid>
  );
};
const DragBars = ({
  questionContent,
  questionDisplay,
  setQuestionDisplay,
}: {
  questionContent: DragArrayType[];
  questionDisplay: GameDisplayInfo;
  setQuestionDisplay: (displayInfo: GameDisplayInfo) => void;
}) => {
  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }
    if (destination.index === source.index) {
      return;
    }
    const newLinesArray = Array.from(questionContent);
    newLinesArray.splice(source.index, 1);
    newLinesArray.splice(destination.index, 0, questionContent[source.index] as DragArrayType);
    questionContent = newLinesArray;

    const nextState = produce(questionDisplay, (draftState) => {
      draftState.content = newLinesArray;
    });

    setQuestionDisplay(nextState);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="1" direction="horizontal">
        {(provided) => (
          <Grid
            container
            {...provided.droppableProps}
            ref={provided.innerRef}
            sx={{ position: "relative", justifyContent: "center" }}
          >
            {questionContent?.map((value: DragArrayType, idx: number) => (
              <Draggable draggableId={idx.toString()} index={idx} key={idx}>
                {(provided) => (
                  <Grid
                    item
                    key={value.lineContent}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    sx={{ height: "25vh", width: "10vw" }}
                    md={1}
                    sm={0}
                  >
                    <Box
                      sx={{
                        height: `${(value.lineContent as number) * 3}vh`,
                        backgroundColor: "#036bfc",
                        color: "white",
                        position: "absolute",
                        bottom: "0",
                        borderRadius: "5px 5px 0px 0px",
                        textAlign: "center",
                      }}
                    >
                      <Typography variant="h4" sx={{ width: "4vw" }}>
                        {`${value.lineContent}`}
                      </Typography>
                    </Box>
                  </Grid>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Grid>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const ArrayBarsContent = ({ questionContent }: { questionContent: number[] }) => {
  const arrayMax = Math.max(...questionContent);
  return (
    <Grid item container sx={{ position: "relative", justifyContent: "center" }}>
      {questionContent?.map((value: number, index: number) => (
        <Grid
          item
          container
          key={index}
          xs={1.25}
          sm={1.5}
          md={1}
          sx={{ height: "30vh", pl: 1, pr: 1, justifyContent: "center" }}
        >
          <Grid
            item
            sx={{
              height: `${(value * 100) / arrayMax}%`,
              backgroundColor: "gray",
              color: "white",
              position: "absolute",
              bottom: "0",
              borderRadius: "5px 5px 0px 0px",
              textAlign: "center",
            }}
            minWidth="5vw"
          >
            <Typography variant="h3">{`${value}`}</Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

const TextContent = ({ questionContent }: { questionContent: string }) => {
  return (
    <Grid item xs={12} sx={{ textAlign: "center", height: "30vh" }}>
      <Typography variant="h1" fontWeight="bold">
        {questionContent}
      </Typography>
    </Grid>
  );
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const customFontSize = (width: number, height: number) => {
  if (width <= 500) {
    return "1.25rem";
  } else if (width <= 1000 && width > 500) {
    return "1.5rem";
  } else if (width > 1000) {
    return "2.5rem";
  }
};

const PseudoCodeContent = ({ questionContent }: { questionContent: string }) => {
  const { height, width } = useWindowDimensions();
  return (
    <Grid container item sx={{ justifyContent: "center" }} xs={12}>
      <SyntaxHighlighter
        language="cpp"
        showLineNumbers
        customStyle={{
          fontSize: customFontSize(width, height),
          marginInline: "auto",
        }}
        wrapLines
        startingLineNumber={1}
      >
        {questionContent}
      </SyntaxHighlighter>
    </Grid>
  );
};

const GameQuestionContent = ({
  questionDisplay,
  setQuestionDisplay,
}: {
  questionDisplay: GameDisplayInfo;
  setQuestionDisplay: (displayInfo: GameDisplayInfo) => void;
}) => {
  switch (questionDisplay.contentType) {
    case "TEXT":
      return <TextContent questionContent={questionDisplay.content as string} />;
    case "CODE":
      return <PseudoCodeContent questionContent={questionDisplay.content as string} />;
    case "ARRAY-BARS":
      return <ArrayBarsContent questionContent={questionDisplay.content as number[]} />;
    case "DRAGGABLE-CODE":
      return (
        <DragCode
          questionContent={questionDisplay.content as DragArrayType[]}
          questionDisplay={questionDisplay}
          setQuestionDisplay={setQuestionDisplay}
        />
      );
    case "DRAGGABLE-ARRAY-BARS":
      return (
        <DragBars
          questionContent={questionDisplay.content as DragArrayType[]}
          questionDisplay={questionDisplay}
          setQuestionDisplay={setQuestionDisplay}
        />
      );
    default:
      return <div>Error</div>;
  }
};

export default GameQuestionContent;
