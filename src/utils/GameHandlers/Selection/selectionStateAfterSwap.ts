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
  return swapSorted;
}

function generateWrongSwapArrays(swapArray: number[], originalArray: number[]) {
  const wrongSwapSorted = [];
  for (let k = 0; k < 3; k += 1) {
    const wrongSwap = swapArray[k];
    const array = originalArray.slice();
    let currentSwaps = 0;
    let swapSorted: number[] = [];
    if (wrongSwap === 0) {
      swapSorted = array.slice();
      wrongSwapSorted[k] = swapSorted;
    } else {
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
          if (currentSwaps === wrongSwap) {
            swapSorted = array.slice();
          }
        }
      }
      wrongSwapSorted[k] = swapSorted;
    }
  }
  return wrongSwapSorted;
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

function generateSwap() {
  let arrayToBeSorted = shuffle([2, 3, 5, 8, 6, 7]);
  let sortedArrayObject = selectionSort(arrayToBeSorted);

  while (sortedArrayObject.swaps < 5) {
    arrayToBeSorted = shuffle([2, 3, 5, 8, 6, 7]);
    sortedArrayObject = selectionSort(arrayToBeSorted);
  }

  const correctSwapNumber = Math.floor(Math.random() * (sortedArrayObject.swaps + 1 - 1) + 1);
  const wrongSwaps: number[] = []; //  array to hold the 3 wrongly swapped array
  for (let i = 0; i < 3; i += 1) {
    let wrongSwapNumber = Math.floor(Math.random() * (sortedArrayObject.swaps + 1 - 0) + 0);
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
    question: `Using selection sort, what is the state of the array after ${correctSwapNumber} swaps`,
    contentType: "ARRAY-BARS",
    answerType: "ARRAY-BARS",
  };

  return gameDisplayObject;
}

// function selectionTest(){
//     let test = [];

//     for(let i =0; i< 100000; i+= 1){
//         let arrayToBeSorted = shuffle([2,3,5,8,6,7]);
//         let sortedArrayObject = selectionSort(arrayToBeSorted);
//         if(!test[sortedArrayObject.swaps]) test[sortedArrayObject.swaps] = 1;
//         test[sortedArrayObject.swaps] += 1;
//     }
//     console.log(test);
// }

export default generateSwap;
