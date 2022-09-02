import { shuffle } from "d3-array";

function generateCorrectSwapArray(swaps: number, originalArray: number[]) {
  let currentSwaps = 0;
  const unsortedArray = originalArray.slice();
  let swapSorted: number[] = [];
  let alreadySliced = false;

  const partitionCorrectSwap = (array: number[], start: number, end: number) => {
    const arr = array;
    const pivot = arr[start];
    let pivotIndex = start;

    for (let i = start + 1; i <= end; i += 1) {
      if (arr[i] < pivot || (arr[i] === pivot && Math.floor(Math.random() * 2) === 0)) {
        pivotIndex += 1;
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        if (arr[i] !== arr[pivotIndex]) {
          currentSwaps += 1;
          if (currentSwaps === swaps && !alreadySliced) {
            swapSorted = arr.slice();
            alreadySliced = true;
            return pivotIndex;
          }
        }
      }
    }
    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
    if (arr[start] !== arr[pivotIndex]) {
      currentSwaps += 1;
      if (currentSwaps === swaps && !alreadySliced) {
        swapSorted = arr.slice();
        alreadySliced = true;
        return pivotIndex;
      }
    }

    return pivotIndex;
  };

  const quickSortCorrectSwap = (arr: number[], start: number, end: number) => {
    // Base case or terminating case
    if (start < end) {
      // Returns pivotIndex
      const index = partitionCorrectSwap(arr, start, end);

      // Recursively apply the same logic to the left and right subarrays
      quickSortCorrectSwap(arr, start, index - 1);
      quickSortCorrectSwap(arr, index + 1, end);
    }
  };

  quickSortCorrectSwap(unsortedArray, 0, unsortedArray.length - 1);

  return swapSorted;
}

let swapCounter = 0;
function partition(array: number[], start: number, end: number) {
  const arr = array;
  const pivot = arr[start];
  let pivotIndex = start;

  for (let i = start + 1; i <= end; i += 1) {
    if (arr[i] < pivot || (arr[i] === pivot && Math.floor(Math.random() * 2) === 0)) {
      pivotIndex += 1;
      if (arr[i] !== arr[pivotIndex]) {
        swapCounter += 1;
      }
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
    }
  }
  if (arr[start] !== arr[pivotIndex]) {
    swapCounter += 1;
  }
  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];

  return pivotIndex;
}
function quickSort(arr: number[], start: number, end: number) {
  // Base case or terminating case
  if (start < end) {
    // Returns pivotIndex
    const index = partition(arr, start, end);

    // Recursively apply the same logic to the left and right subarrays
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
  }
}

function quickSortCaller(array: number[]) {
  const unsortedArray = array.slice();

  swapCounter = 0;
  quickSort(array, 0, array.length - 1);
  const sortedArray = array;
  const sortedArrayObject = {
    arraySorted: sortedArray,
    arrayUnsorted: unsortedArray,
    swaps: swapCounter,
  };

  return sortedArrayObject;
}

function quickStateAfterSwap() {
  let arrayToBeSorted = shuffle([2, 3, 5, 8, 6, 7]); // array with values that are used
  // returned sorted object with swaps, the sorted array, and original unsorted array
  let sortedArrayObject = quickSortCaller(arrayToBeSorted);
  while (sortedArrayObject.swaps < 4) {
    // while the swaps are not at least 4 sort another array
    arrayToBeSorted = shuffle([2, 3, 5, 8, 6, 7]);
    sortedArrayObject = quickSortCaller(arrayToBeSorted);
  }
  const correctSwapNumber = Math.floor(
    // the swap number used for correct answer with a max value of 9 and smallest of 2
    Math.random() * (sortedArrayObject.swaps + 1 - 2) + 2,
  );

  const rightAnswer = generateCorrectSwapArray(correctSwapNumber, sortedArrayObject.arrayUnsorted);
  const wrongAnswers = []; // array to hold the 3 wrongly swapped array

  for (let i = 0; i < 3; i += 1) {
    wrongAnswers[i] = shuffle([2, 3, 5, 8, 6, 7]);
    while (wrongAnswers[i] === rightAnswer) {
      wrongAnswers[i] = shuffle([2, 3, 5, 8, 6, 7]);
    }
  }
  const answerChoices = [{ isCorrect: true, answerContent: rightAnswer }];

  for (const wrongChoice of wrongAnswers) {
    answerChoices.push({ isCorrect: false, answerContent: wrongChoice });
  }

  const gameDisplayObject: GameDisplayInfo = {
    answerChoices: shuffle(answerChoices),
    content: sortedArrayObject.arrayUnsorted,
    question: `Using quick sort, what is the state of the array after ${correctSwapNumber} swaps`,
    contentType: "ARRAY-BARS",
    answerType: "ARRAY-BARS",
  };

  return gameDisplayObject;
}

// function quickTest() {
//   let swapCounterArray = [];
//   let once = false;
//   for (let i = 0; i < 1000000; i += 1) {
//     let arrayToBeSortedTest = shuffle([2, 3, 5, 8, 6, 7]);
//     let test = quickSortCaller(arrayToBeSortedTest);
//     if (!swapCounterArray[test.swaps]) {
//       swapCounterArray[test.swaps] = 1;
//     }
//     if (test.swaps === 9 && !once) {
//       once = true;
//       console.log(test);
//     }
//     swapCounterArray[test.swaps] += 1;
//   }

//   console.log(swapCounterArray);
// }

export default quickStateAfterSwap;
