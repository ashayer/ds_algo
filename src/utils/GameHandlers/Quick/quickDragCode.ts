import { shuffle } from "d3-array";

function generateDragCode() {
  const partitionLine1 = "int pivotValue = arr[low]\n";
  const partitionLine2 = "int pivotIndex = low\n";
  const partitionLine3 = "for(int i = low + 1; i<=high; i++)\n";
  const partitionLine4 = "if(arr[i] < pivotValue)\n";
  const partitionLine5 = "swap(arr[i], arr[++pivotIndex])\n";
  const partitionLine6 = "swap(arr[low], arr[pivotIndex])\n";
  const partitionLine7 = "return pivotIndex\n";

  const qSortLine1 = "if (low < high)\n";
  const qSortLine2 = "int index = partition(arr, low, high)\n";
  const qSortLine3 = "quickSort(arr, low, index -1)\n";
  const qSortLine4 = "quickSort(arr, index + 1, high)\n";

  const partitionStringArray = shuffle([
    {
      lineContent: partitionLine1,
      correctIdx: 0,
    },
    {
      lineContent: partitionLine2,
      correctIdx: 1,
    },
    {
      lineContent: partitionLine3,
      correctIdx: 2,
    },
    {
      lineContent: partitionLine4,
      correctIdx: 3,
    },
    {
      lineContent: partitionLine5,
      correctIdx: 4,
    },
    {
      lineContent: partitionLine6,
      correctIdx: 5,
    },
    {
      lineContent: partitionLine7,
      correctIdx: 6,
    },
  ]);

  const quickSortStringArray = shuffle([
    {
      lineContent: qSortLine1,
      correctIdx: 0,
    },
    {
      lineContent: qSortLine2,
      correctIdx: 1,
    },
    {
      lineContent: qSortLine3,
      correctIdx: 2,
    },
    {
      lineContent: qSortLine4,
      correctIdx: 3,
    },
  ]);

  const gameDisplayObject: GameDisplayInfo = {
    answerChoices: false,
    content: Math.random() > 0.5 ? quickSortStringArray : partitionStringArray,
    contentType: "DRAGGABLE-CODE",
    answerType: "CHECK-ANSWER",
    question: "Move pseudo-code into correct order for Quick Sort",
  };

  return gameDisplayObject;
}

export default generateDragCode;
