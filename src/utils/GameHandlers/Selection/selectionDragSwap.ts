import { shuffle } from "d3-array";

function generateCorrectSwapArray(swaps: number, originalArray: number[]) {
  const array = originalArray.slice();
  let currentSwaps = 0;
  let swapSorted: number[] = [];
  for (let i = 0; i < array.length; i += 1) {
    let min = i;
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    [array[i], array[min]] = [array[min], array[i]];
    if (min !== i) {
      currentSwaps += 1;
      if (currentSwaps === swaps) {
        swapSorted = array.slice();
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

function selectionSort(array: number[]) {
  const unSortedArray = array.slice();
  let swapCounter = 0;
  for (let i = 0; i < array.length; i += 1) {
    let min = i;
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    [array[i], array[min]] = [array[min], array[i]];
    if (min !== i) {
      swapCounter += 1;
    }
  }

  const sortedArrayObject = {
    arraySorted: array,
    arrayUnsorted: unSortedArray,
    swaps: swapCounter,
  };

  return sortedArrayObject;
}

function selectionDragSwap() {
  let arrayToBeSorted = shuffle([2, 3, 5, 8, 6, 7]);
  let sortedArrayObject = selectionSort(arrayToBeSorted);

  while (sortedArrayObject.swaps < 5) {
    arrayToBeSorted = shuffle([2, 3, 5, 8, 6, 7]);
    sortedArrayObject = selectionSort(arrayToBeSorted);
  }

  const correctSwapNumber = Math.floor(Math.random() * (sortedArrayObject.swaps + 1 - 1) + 1);

  const originalObject = generateCorrectSwapArray(
    correctSwapNumber,
    sortedArrayObject.arrayUnsorted,
  );

  const gameDisplayObject: GameDisplayInfo = {
    answerChoices: false,
    content: originalObject,
    contentType: "DRAGGABLE-ARRAY-BARS",
    answerType: "CHECK-ANSWER",
    question: `Using Selection sort move the array into the state after ${correctSwapNumber} swaps`,
  };

  return gameDisplayObject;
}

export default selectionDragSwap;
