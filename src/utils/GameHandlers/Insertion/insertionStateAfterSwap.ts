import { shuffle } from "d3-array";

function generateCorrectSwapArray(swaps: number, originalArray: number[]) {
  const array = originalArray.slice();
  let currentSwaps = 0;
  let swapSorted: number[] = [];
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i; j > 0; j -= 1) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
        currentSwaps += 1;
        if (currentSwaps === swaps) {
          swapSorted = array.slice();
        }
      }
    }
  }
  return swapSorted;
}

function generateWrongSwapArrays(swapArray: number[], originalArray: number[]) {
  const wrongSwapSorted = [];
  for (let i = 0; i < 3; i += 1) {
    const wrongSwap = swapArray[i];
    const array = originalArray.slice();
    let currentSwaps = 0;
    let swapSorted: number[] = [];
    if (wrongSwap === 0) {
      swapSorted = array.slice();
      wrongSwapSorted[i] = swapSorted;
    } else {
      for (let k = 0; k < array.length; k += 1) {
        for (let j = k; j > 0; j -= 1) {
          if (array[j] < array[j - 1]) {
            [array[j], array[j - 1]] = [array[j - 1], array[j]];
            currentSwaps += 1;
            if (currentSwaps === wrongSwap) {
              swapSorted = array.slice();
            }
          }
        }
      }
      wrongSwapSorted[i] = swapSorted;
    }
  }
  return wrongSwapSorted;
}

function insertionSort(array: number[]) {
  const currentArray = array;
  const unSortedArray = array.slice();
  let swapCounter = 0;
  for (let i = 1; i < array.length; i += 1) {
    const current = array[i];
    let j = i - 1;
    while (j > -1 && current < array[j]) {
      currentArray[j + 1] = array[j];
      swapCounter += 1;
      j -= 1;
    }
    currentArray[j + 1] = current;
  }
  const sortedArrayObject = {
    arraySorted: currentArray,
    arrayUnsorted: unSortedArray,
    swaps: swapCounter,
  };

  return sortedArrayObject;
}

function insertionStateAfterSwap() {
  let arrayToBeSorted = shuffle([2, 3, 5, 8, 6, 7]); // array with values that are used
  // returned sorted object with swaps, the sorted array, and original unsorted array
  let sortedArrayObject = insertionSort(arrayToBeSorted);
  while (sortedArrayObject.swaps < 4 || sortedArrayObject.swaps > 11) {
    arrayToBeSorted = shuffle([2, 3, 5, 8, 6, 7]);
    sortedArrayObject = insertionSort(arrayToBeSorted);
  }
  // the swap number used for correct answer
  const correctSwapNumber = Math.floor(Math.random() * (sortedArrayObject.swaps + 1 - 3) + 3);
  const wrongSwaps: number[] = []; //  array to hold the 3 wrongly swapped array
  for (let i = 0; i < 3; i += 1) {
    // three wrong swaps in range of max swaps and 0
    let wrongSwapNumber = Math.floor(Math.random() * (sortedArrayObject.swaps + 1 - 0) + 0);
    // if the wrong swap number = correct swap generate another or as already been used
    while (wrongSwapNumber === correctSwapNumber || wrongSwaps.includes(wrongSwapNumber)) {
      wrongSwapNumber = Math.floor(Math.random() * (sortedArrayObject.swaps + 1 - 0) + 0);
    }
    wrongSwaps[i] = wrongSwapNumber;
  }
  const rightAnswer = generateCorrectSwapArray(correctSwapNumber, sortedArrayObject.arrayUnsorted);
  const wrongAnswers = generateWrongSwapArrays(wrongSwaps, sortedArrayObject.arrayUnsorted);

  const answerChoices = [{ isCorrect: true, answerContent: rightAnswer }];

  for (const wrongChoice of wrongAnswers) {
    answerChoices.push({ isCorrect: false, answerContent: wrongChoice });
  }

  const gameDisplayObject: GameDisplayInfo = {
    answerChoices: shuffle(answerChoices),
    content: sortedArrayObject.arrayUnsorted,
    question: `Using insertion sort, what is the state of the array after ${correctSwapNumber} swaps`,
    contentType: "ARRAY-BARS",
    answerType: "ARRAY-BARS",
  };

  return gameDisplayObject;
}

export default insertionStateAfterSwap;
