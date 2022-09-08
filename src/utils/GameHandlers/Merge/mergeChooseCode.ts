import { shuffle } from "d3-array";
// to generate a random question that asks about pseudo-code pick a line with meaningful logic
// get the character number in string or make its own variable
// generate similar answers with minor incorrect changes
// put correct string into answer.right and three wrong string into answer.wrong
function generateEmptyLine(string: string, lineNum: number) {
  let emptyString = lineNum.toString();
  for (let i = 0; i < string.length; i += 1) {
    emptyString = `${emptyString} `;
  }
  return `${emptyString}\n`;
}

function mergeChooseCode() {
  const MergeLine1 = "int i = low, j = middle+1\n";
  const MergeLine2 = "for(int k = low; k <= high; k++)\n";
  const MergeLine3 = "  if(i > mid) {aux[k] = array[j++]}\n";
  const MergeLine4 = "  else if (j > high) {aux[k] = array[i++]}\n";
  const MergeLine5 = "  else if(array[j] < array[i]){aux[k] = array[j++]}\n";
  const MergeLine6 = "  else {aux[k] = a[i++]}\n";

  const mSortLine1 = "if(left < right)\n";
  const mSortLine2 = "  int middle = left + (right - left)/2;\n";
  const mSortLine3 = "  mergeSort(array, left, middle)\n";
  const mSortLine4 = "  mergeSort(array, middle + 1, right)\n";
  const mSortLine5 = "  merge(array, left, middle, right)\n";

  const mergeSortStringArray = [mSortLine1, mSortLine2, mSortLine3, mSortLine4, mSortLine5];

  const mergeStringArray = [MergeLine1, MergeLine2, MergeLine3, MergeLine4, MergeLine5, MergeLine6];

  const answersObjectArrayForMerge = [
    {
      right: MergeLine1,
      wrong: ["int i = 0, j = middle+1", "int i = 1, j = middle", "int i = high, j = low"],
    },
    {
      right: MergeLine2,
      wrong: [
        "for(int k = middle; k < high; k++)",
        "for(int k = low; k < middle; k++)",
        "for(int k = high; k > low; k-)",
      ],
    },
    {
      right: MergeLine3,
      wrong: [
        "if(i > low) {aux[k] = array[k++]}",
        "if(i > mid) {aux[k] = array[k++]}",
        "if(i > low) {aux[k] = array[j++]}",
      ],
    },
    {
      right: MergeLine4,
      wrong: [
        "else if (j > middle) {aux[k] = array[k++]}",
        "else if (j < low) {aux[k] = array[j++]}",
        "else if (j < high) {aux[k] = array[i++]}",
      ],
    },
    {
      right: MergeLine5,
      wrong: [
        "else if(array[j] > array[i]){aux[k] = array[k++]}",
        "else if(array[j] > array[i]){aux[k] = array[j++]}",
        "else if(array[i] < array[j]){aux[k] = array[j++]}",
      ],
    },
    {
      right: MergeLine6,
      wrong: ["else {aux[k] = a[j++]}", "else {aux[k] = a[k++]}", "else {aux[k] = a[low++]}"],
    },
  ];

  const answersObjectArrayForMergeSort = [
    {
      right: mSortLine1,
      wrong: ["if(left < right)", "if(left > right)", "if(middle < right)"],
    },
    {
      right: mSortLine3,
      wrong: [
        "mergeSort(array, left, right)",
        "mergeSort(array, 0, middle)",
        "mergeSort(array, middle, right)",
      ],
    },
    {
      right: mSortLine4,
      wrong: [
        "mergeSort(array, middle, right)",
        "mergeSort(array, low + 1, right)",
        "mergeSort(array, low, right)",
      ],
    },
    {
      right: mSortLine5,
      wrong: [
        "merge(array, 0, middle, left)",
        "merge(array, left, right, middle)",
        "merge(array, middle, right, left)",
      ],
    },
  ];
  // random number 0-1 - 0 means merge 1 means mergeSort
  const isMerge = Math.floor(Math.random() * 2);
  let mergePseudo = "";
  let mergeSortPseudo = "";

  if (isMerge === 0) {
    // random number 0-3
    const randomLineNumber = Math.floor(Math.random() * answersObjectArrayForMerge.length);
    for (let i = 0; i < mergeStringArray.length; i += 1) {
      if (i === randomLineNumber) {
        mergePseudo += generateEmptyLine(mergeStringArray[i], randomLineNumber + 1);
      } else {
        mergePseudo += mergeStringArray[i];
      }
    }

    const rightAnswer = answersObjectArrayForMerge[randomLineNumber].right.slice(2);
    const wrongAnswers = shuffle(answersObjectArrayForMerge[randomLineNumber].wrong);

    const answerChoices = [{ isCorrect: true, answerContent: rightAnswer }];
    for (const wrongChoice of wrongAnswers) {
      answerChoices.push({ isCorrect: false, answerContent: wrongChoice });
    }

    const gameDisplayObject: GameDisplayInfo = {
      answerChoices: shuffle(answerChoices),
      content: mergePseudo,
      question: "Fill in the missing pseudo-code of Merge",
      contentType: "CODE",
      answerType: "TEXT",
    };

    return gameDisplayObject;
  }
  // random number 0-3
  const randomLineNumber = Math.floor(Math.random() * answersObjectArrayForMergeSort.length);
  for (let i = 0; i < mergeSortStringArray.length; i += 1) {
    if (i === randomLineNumber) {
      mergeSortPseudo += generateEmptyLine(mergeSortStringArray[i], randomLineNumber + 1);
    } else {
      mergeSortPseudo += mergeSortStringArray[i];
    }
  }

  const rightAnswer = answersObjectArrayForMergeSort[randomLineNumber].right.slice(2);
  const wrongAnswers = shuffle(answersObjectArrayForMergeSort[randomLineNumber].wrong);

  const answerChoices = [{ isCorrect: true, answerContent: rightAnswer }];
  for (const wrongChoice of wrongAnswers) {
    answerChoices.push({ isCorrect: false, answerContent: wrongChoice });
  }

  const gameDisplayObject: GameDisplayInfo = {
    answerChoices: shuffle(answerChoices),
    content: mergeSortPseudo,
    question: "Fill in the missing pseudo-code of Merge Sort",
    contentType: "CODE",
    answerType: "TEXT",
  };

  return gameDisplayObject;
}

export default mergeChooseCode;
