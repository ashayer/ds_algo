import { shuffle } from "d3-array";

function selectionSpaceComplexity() {
  const rightAnswer = "1";
  const wrongAnswers = shuffle(["nlogn", "n", "logn"]);

  const answerChoices = [{ isCorrect: true, answerContent: rightAnswer }];

  for (const wrongChoice of wrongAnswers) {
    answerChoices.push({ isCorrect: false, answerContent: wrongChoice });
  }

  const gameDisplayObject: GameDisplayInfo = {
    answerChoices: shuffle(answerChoices),
    content: "Selection Sort",
    question: "What is the space complexity of the algorithm below?",
    contentType: "TEXT",
    answerType: "TEXT",
  };

  return gameDisplayObject;
}

export default selectionSpaceComplexity;
