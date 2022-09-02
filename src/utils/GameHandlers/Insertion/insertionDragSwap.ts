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
  const unsortedArrayObject = [];
  for (let i = 0; i < swapSorted.length; i += 1) {
    unsortedArrayObject.push({
      lineContent: originalArray[i],
      correctIdx: swapSorted.findIndex((element) => element === originalArray[i]),
    });
  }
  return unsortedArrayObject;
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

function insertionDragSwap() {
  let arrayToBeSorted = shuffle([2, 3, 5, 8, 6, 7]); // array with values that are used
  // returned sorted object with swaps, the sorted array, and original unsorted array
  let sortedArrayObject = insertionSort(arrayToBeSorted);
  while (sortedArrayObject.swaps < 4 || sortedArrayObject.swaps > 11) {
    arrayToBeSorted = shuffle([2, 3, 5, 8, 6, 7]);
    sortedArrayObject = insertionSort(arrayToBeSorted);
  }
  // the swap number used for correct answer
  const correctSwapNumber = Math.floor(Math.random() * (sortedArrayObject.swaps + 1 - 3) + 3);

  const originalObject = generateCorrectSwapArray(
    correctSwapNumber,
    sortedArrayObject.arrayUnsorted,
  );

  const gameDisplayObject: GameDisplayInfo = {
    answerChoices: false,
    content: originalObject,
    contentType: "DRAGGABLE-ARRAY-BARS",
    answerType: "CHECK-ANSWER",
    question: `Using Insertion sort move the array into the state after ${correctSwapNumber} swaps`,
  };

  return gameDisplayObject;
}

export default insertionDragSwap;
