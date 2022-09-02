import { shuffle } from "d3-array";

function generateCorrectSwapArray(swaps: number, originalArray: number[]) {
  let currentSwaps = 0;
  const unsortedArray = originalArray.slice();
  let swapSorted: number[] = [];

  const mergeCorrectSwap = (left: number[], right: number[]): number[] => {
    const arr = [];

    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
      // Pick the smaller among the smallest element of left and right sub arrays
      if (left[0] <= right[0]) {
        arr.push(left.shift());
      } else {
        currentSwaps += 1;
        arr.push(right.shift());
        if (currentSwaps === swaps) {
          // if the current swap number equals the questions' then stop sorting
          // ! if the entire array is hal total length that means the rest of the array is sorted
          // ! hacky solution where the remaining elements are just added from original

          swapSorted = [...arr, ...left, ...right].slice() as number[];
          if (swapSorted.length === 3) {
            const tempFirstThree = originalArray.slice(0, 3).sort();
            swapSorted.unshift(tempFirstThree[2]);
            swapSorted.unshift(tempFirstThree[1]);
            swapSorted.unshift(tempFirstThree[0]);
          } else if (swapSorted.length === 2) {
            const tempFirstThree = originalArray.slice(0, 3).sort();
            const tempLast = originalArray[originalArray.length - 1];
            swapSorted.unshift(tempFirstThree[2]);
            swapSorted.unshift(tempFirstThree[1]);
            swapSorted.unshift(tempFirstThree[0]);
            swapSorted.push(tempLast);
          }
          return [...arr, ...left, ...right] as number[];
        }
      }
    }

    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [...arr, ...left, ...right] as number[];
  };

  const mergeSortCorrectSwap = (array: number[]): number[] => {
    let half = array.length / 2;
    if (array.length % 2 === 1) {
      // ensure the left half is larger on odd splits
      half += 1;
    }
    // Base case or terminating case
    if (array.length < 2) {
      return array;
    }

    const left = array.splice(0, half); // left is first half of array, array becomes second half
    return mergeCorrectSwap(mergeSortCorrectSwap(left), mergeSortCorrectSwap(array));
  };

  mergeSortCorrectSwap(unsortedArray);
  // console.log(swapSorted);

  return swapSorted;
}

let swapCounter = 0;

function merge(left: number[], right: number[]) {
  const arr = [];

  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays
    if (left[0] <= right[0]) {
      arr.push(left.shift());
    } else {
      swapCounter += 1;
      arr.push(right.shift());
    }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right];
}

function mergeSort(array: number[]): number[] {
  let half = array.length / 2;
  if (array.length % 2 === 1) {
    // ensure the left half is larger on odd splits
    half += 1;
  }
  // Base case or terminating case
  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half); // left is first half of array, array becomes second half
  return merge(mergeSort(left), mergeSort(array)) as number[];
}

function mergeSortCaller(array: number[]) {
  const unsortedArray = array.slice();

  swapCounter = 0;
  const sortedArray = mergeSort(array);

  const sortedArrayObject = {
    arraySorted: sortedArray,
    arrayUnsorted: unsortedArray,
    swaps: swapCounter,
  };

  return sortedArrayObject;
}

function generateSwap() {
  let arrayToBeSorted = shuffle([2, 3, 5, 8, 6, 7]); // array with values that are used
  // returned sorted object with swaps, the sorted array, and original unsorted array
  let sortedArrayObject = mergeSortCaller(arrayToBeSorted);

  while (sortedArrayObject.swaps < 3) {
    // needs to be at least 3 as you need at least
    // while the swaps are not at least 3 sort another array
    arrayToBeSorted = shuffle([2, 3, 5, 8, 6, 7]);
    sortedArrayObject = mergeSortCaller(arrayToBeSorted);
  }

  const correctSwapNumber = Math.floor(
    // the swap number used for correct answer with a max value of 7 and smallest of 3
    Math.random() * (sortedArrayObject.swaps + 1 - 3) + 3,
  );

  const rightAnswer = generateCorrectSwapArray(correctSwapNumber, sortedArrayObject.arrayUnsorted);
  const wrongAnswers = []; // array to hold the 3 wrongly swapped array

  for (let i = 0; i < 3; i += 1) {
    wrongAnswers[i] = shuffle([2, 3, 5, 8, 6, 7]);
    while (wrongAnswers[i] === rightAnswer) {
      wrongAnswers[i] = shuffle([2, 3, 5, 8, 6, 7]);
    }
  }
  // console.log(wrongAnswers);
  // console.log(rightAnswer);
  const answerChoices = [{ isCorrect: true, answerContent: rightAnswer }];

  for (const wrongChoice of wrongAnswers) {
    answerChoices.push({ isCorrect: false, answerContent: wrongChoice });
  }

  const gameDisplayObject: GameDisplayInfo = {
    answerChoices: shuffle(answerChoices),
    content: sortedArrayObject.arrayUnsorted,
    question: `Using merge sort, what is the state of the array after ${correctSwapNumber} swaps`,
    contentType: "ARRAY-BARS",
    answerType: "ARRAY-BARS",
  };

  return gameDisplayObject;
}

// generates an array where the value at index n is the number of times it takes n swaps to sort
// function mergeTest() {
//   let swapCounterArray = [];
//   let once = false;
//   for (let i = 0; i < 1000000; i++) {
//     let arrayToBeSortedTest = shuffle([2, 3, 5, 8, 6, 7]);
//     let test = mergeSortCaller(arrayToBeSortedTest);
//     if (!swapCounterArray[test.swaps]) {
//       swapCounterArray[test.swaps] = 1;
//     }
//     if (test.swaps === 7 && !once) {
//       once = true;
//       console.log(test);
//     }
//     swapCounterArray[test.swaps] += 1;
//   }

//   console.log(swapCounterArray);
// }

export default generateSwap;
