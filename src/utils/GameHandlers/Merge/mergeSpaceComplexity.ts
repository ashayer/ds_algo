import { shuffle } from "d3-array";

function generateSpace() {
  const rightAnswer = "n";
  const wrongAnswers = shuffle(["nlogn", "1", "logn"]);
  const answerChoices = [{ isCorrect: true, answerContent: rightAnswer }];

  for (const wrongChoice of wrongAnswers) {
    answerChoices.push({ isCorrect: false, answerContent: wrongChoice });
  }

  const gameDisplayObject: GameDisplayInfo = {
    answerChoices: shuffle(answerChoices),
    content: "Merge Sort",
    question: "What is the space complexity of the algorithm below?",
    contentType: "TEXT",
    answerType: "TEXT",
  };

  return gameDisplayObject;
}

export default generateSpace;
