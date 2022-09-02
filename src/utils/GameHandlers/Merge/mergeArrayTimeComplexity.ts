import { shuffle } from "d3-array";
// generate an array that satisfies the best or worst time complexity of merge sort
// since both are nlogn just display a shuffled array or sorted array 30% of the time

const checkArraySorted = (array: number[]) => {
  for (let i = 0; i < array.length - 1; i += 1) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
};

function mergeArrayTimeComplexity() {
  const isSorted = Math.random() < 0.3;

  const rightAnswer = "nlogn";
  const wrongAnswers = shuffle(["logn", "n", "n\u00B2"]);
  let shuffledArray = shuffle([2, 3, 5, 8, 6, 7]);
  while (checkArraySorted(shuffledArray)) {
    shuffledArray = shuffle([2, 3, 5, 8, 6, 7]);
  }

  if (isSorted) {
    shuffledArray.sort();
  }

  const answerChoices = [{ isCorrect: true, answerContent: rightAnswer }];
  for (const wrongChoice of wrongAnswers) {
    answerChoices.push({ isCorrect: false, answerContent: wrongChoice });
  }

  const gameDisplayObject: GameDisplayInfo = {
    answerChoices: shuffle(answerChoices),
    content: shuffledArray,
    contentType: "ARRAY-BARS",
    answerType: "TEXT",
    question: "What is the time complexity using Merge Sort to sort the array below?",
  };

  return gameDisplayObject;
}

export default mergeArrayTimeComplexity;
