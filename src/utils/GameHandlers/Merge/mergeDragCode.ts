import { shuffle } from "d3-array";

function mergeDragCode() {
  const MergeLine1 = "int i = low, j = middle+1\n";
  const MergeLine2 = "for(int k = low; k <= high; k++)\n";
  const MergeLine3 = "if(i > mid) {aux[k] = array[j++]}\n";
  const MergeLine4 = "else if (j > high) {aux[k] = array[i++]}\n";
  const MergeLine5 = "else if(array[j] < array[i]){aux[k] = array[j++]}\n";
  const MergeLine6 = "else {aux[k] = a[i++]}\n";

  const mSortLine1 = "if(left < right)\n";
  const mSortLine2 = "int middle = left + (right - left)/2;\n";
  const mSortLine3 = "mergeSort(array, left, middle)\n";
  const mSortLine4 = "mergeSort(array, middle + 1, right)\n";
  const mSortLine5 = "merge(array, left, middle, right)\n";

  const mergeSortStringArray = shuffle([
    {
      lineContent: mSortLine1,
      correctIdx: 0,
    },
    {
      lineContent: mSortLine2,
      correctIdx: 1,
    },
    {
      lineContent: mSortLine3,
      correctIdx: 2,
    },
    {
      lineContent: mSortLine4,
      correctIdx: 3,
    },
    {
      lineContent: mSortLine5,
      correctIdx: 4,
    },
  ]);

  const mergeStringArray = shuffle([
    {
      lineContent: MergeLine1,
      correctIdx: 0,
    },
    {
      lineContent: MergeLine2,
      correctIdx: 1,
    },
    {
      lineContent: MergeLine3,
      correctIdx: 2,
    },
    {
      lineContent: MergeLine4,
      correctIdx: 3,
    },
    {
      lineContent: MergeLine5,
      correctIdx: 4,
    },
    {
      lineContent: MergeLine6,
      correctIdx: 5,
    },
  ]);

  const gameDisplayObject: GameDisplayInfo = {
    answerChoices: false,
    content: Math.random() > 0.5 ? mergeSortStringArray : mergeStringArray,
    contentType: "DRAGGABLE-CODE",
    answerType: "CHECK-ANSWER",
    question: "Move pseudo-code into correct order for Merge Sort",
  };

  return gameDisplayObject;
}

export default mergeDragCode;
