import { Grid, Box, Typography, ButtonBase, Button } from "@mui/material";

const ArrayBarsAnswer = ({
  answerChoices,
  answeredWrong,
  answeredCorrect,
}: {
  answerChoices: GameAnswerChoices[];
  answeredWrong: () => void;
  answeredCorrect: () => void;
}) => {
  const arrayMax = Math.max(...(answerChoices[0]?.answerContent as number[]));
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      {answerChoices?.map((answer: any, index: number) => (
        <Grid
          item
          key={index}
          sx={{ m: 1, position: "relative", justifyContent: "center" }}
          xs={12}
          xl={5}
          sm={5}
        >
          <Grid
            item
            container
            sx={{
              border: "1px solid black",
              borderRadius: "5px",
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "lightgray",
              },
              transition: "all 0.1s ease",
              cursor: "pointer",
            }}
            onClick={answer.isCorrect ? answeredCorrect : answeredWrong}
          >
            {answer.answerContent?.map((value: number, index: number) => (
              <Grid
                item
                container
                key={index}
                xs={1.25}
                sm={2}
                xl={1.5}
                sx={{ height: "20vh", pl: 1, pr: 1, justifyContent: "center" }}
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
                  minWidth="4vw"
                >
                  <Typography variant="h4">{`${value}`}</Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

const TextAnswer = ({
  answerChoices,
  answeredWrong,
  answeredCorrect,
}: {
  answerChoices: GameAnswerChoices[];
  answeredWrong: () => void;
  answeredCorrect: () => void;
}) => {
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      {answerChoices?.map((answer: any, index: number) => (
        <Grid
          item
          container
          key={index}
          xs={12}
          md={5}
          sx={{
            border: "1px solid black",
            borderRadius: "5px",
            height: "15vh",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            m: 2,
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "lightgray",
            },
            transition: "all 0.1s ease",
          }}
          onClick={answer.isCorrect ? answeredCorrect : answeredWrong}
        >
          <Grid item>
            <Typography variant="h3" fontWeight="bold">
              {answer.answerContent}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

const DragCodeAnswer = ({
  questionContent,
  answeredWrong,
  answeredCorrect,
}: {
  questionContent: DragArrayType[];
  answeredWrong: () => void;
  answeredCorrect: () => void;
}) => {
  const checkLineOrder = () => {
    const arr: number[] = [];
    for (let i = 0; i < questionContent.length; i += 1) {
      arr.push(questionContent[i]?.correctIdx as number);
    }

    for (let i = 0; i < arr.length - 1; i += 1) {
      if (arr[i]! > arr[i + 1]!) {
        return false;
      }
    }

    return true;
  };

  const isInOrder = () => {
    const isOrdered = checkLineOrder();
    if (isOrdered) {
      answeredCorrect();
    }
  };

  return (
    <Grid item sx={{ justifyContent: "center", mt: 2, textAlign: "center" }} xs={12}>
      <Button
        variant="contained"
        color="warning"
        sx={{ paddingInline: 5, marginInline: "auto" }}
        onClick={isInOrder}
      >
        <Typography variant="h3" fontWeight="bold">
          Check Order
        </Typography>
      </Button>
    </Grid>
  );
};

const GameQuestionAnswerChoice = ({
  questionDisplay,
  answeredWrong,
  answeredCorrect,
}: {
  questionDisplay: GameDisplayInfo;
  answeredWrong: () => void;
  answeredCorrect: () => void;
}) => {
  switch (questionDisplay.answerType) {
    case "TEXT":
      return (
        <TextAnswer
          answeredWrong={answeredWrong}
          answeredCorrect={answeredCorrect}
          answerChoices={questionDisplay.answerChoices as GameAnswerChoices[]}
        />
      );
    case "ARRAY-BARS":
      return (
        <ArrayBarsAnswer
          answeredWrong={answeredWrong}
          answeredCorrect={answeredCorrect}
          answerChoices={questionDisplay.answerChoices as GameAnswerChoices[]}
        />
      );
    case "CHECK-ANSWER":
      return (
        <DragCodeAnswer
          answeredWrong={answeredWrong}
          answeredCorrect={answeredCorrect}
          questionContent={questionDisplay.content as DragArrayType[]}
        />
      );
    default:
      return <div>Error</div>;
  }
};

export default GameQuestionAnswerChoice;
