import { shuffle } from "d3-array";

function selectionTimeComplexityDirect() {
  const rightAnswer = "n\u00B2";
  const wrongAnswers = shuffle(["n", "logn", "nlogn"]);

  const answerChoices = [{ isCorrect: true, answerContent: rightAnswer }];

  for (const wrongChoice of wrongAnswers) {
    answerChoices.push({ isCorrect: false, answerContent: wrongChoice });
  }

  const gameDisplayObject: GameDisplayInfo = {
    answerChoices: shuffle(answerChoices),
    content: "Selection Sort",
    question: "What is the time complexity of the algorithm below?",
    contentType: "TEXT",
    answerType: "TEXT",
  };

  return gameDisplayObject;
}

export default selectionTimeComplexityDirect;
