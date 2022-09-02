const createLabelObject = (k: number, left: number, right: number) => {
  return [
    { index: left, label: "left" },
    { index: right, label: "right" },
    { index: k, label: "k" },
  ];
};

const createSubLabelObject = (i: number, j: number) => {
  return [
    { index: i, label: "i" },
    { index: j, label: "j" },
  ];
};

const sortArrayMerge = (arrayElements: SortHistoryElement[]) => {
  const historyArray: SortHistoryElement[][] = [];
  const subArrayHistory: SortHistoryElement[][] = [];
  const codeLinesHistory: number[][] = [];
  const varLabelArray: SortLabelHistoryElement[][] = [];
  const varSubLabelArray: SortLabelHistoryElement[][] = [];

  const arr = JSON.parse(JSON.stringify(arrayElements));

  function pushToArrays(
    k: number,
    left: number,
    right: number,
    i: number,
    j: number,
    subArray: SortHistoryElement[],
    highlight: number[],
  ) {
    varLabelArray.push(createLabelObject(k, left, right));
    varSubLabelArray.push(createSubLabelObject(i, j));
    codeLinesHistory.push(highlight);
    historyArray.push(JSON.parse(JSON.stringify(arr)));
    subArrayHistory.push(subArray.slice(left, right + 1));
  }

  function merge(array: SortHistoryElement[], left: number, middle: number, right: number) {
    let i = left;
    let j = middle + 1;
    const subArray = JSON.parse(JSON.stringify(arr));
    for (let a = left; a <= right; a += 1) {
      arr[a].color = "purple";
    }
    for (let k = left; k <= right; k += 1) {
      pushToArrays(k, left, right, i, j, subArray, [6]);
      if (i > middle) {
        pushToArrays(k, left, right, i, j, subArray, [7]);
        arr[k].value = subArray[j].value;
        pushToArrays(k, left, right, i, j, subArray, [8]);
        j += 1;
      } else if (j > right) {
        pushToArrays(k, left, right, i, j, subArray, [10]);
        arr[k].value = subArray[i].value;
        pushToArrays(k, left, right, i, j, subArray, [11]);
        i += 1;
      } else if (subArray[j].value < subArray[i].value) {
        pushToArrays(k, left, right, i, j, subArray, [13]);
        arr[k].value = subArray[j].value;
        pushToArrays(k, left, right, i, j, subArray, [14]);
        j += 1;
      } else {
        pushToArrays(k, left, right, i, j, subArray, [16]);
        arr[k].value = subArray[i].value;
        pushToArrays(k, left, right, i, j, subArray, [17]);
        i += 1;
      }
    }
    for (let a = left; a <= right; a += 1) {
      arr[a].color = "blue";
    }
    for (let a = left; a <= right; a += 1) {
      subArray[a].color = "blue";
    }
    pushToArrays(left, left, right, i, j, subArray, [1]);
  }

  function mergeSort(array: SortHistoryElement[], left: number, right: number) {
    if (left < right) {
      const middle = left + Math.floor((right - left) / 2);
      mergeSort(array, left, middle);
      mergeSort(array, middle + 1, right);
      merge(array, left, middle, right);
    }
    return array;
  }

  for (let i = 0; i < arr.length; i += 1) {
    arr[i].color = `rgba(255, ${i * 25}, 0)`;
  }
  pushToArrays(arr.length - 1, 0, arr.length - 1, 0, 0, [], [1]);

  mergeSort(arr, 0, arr.length - 1);
  for (let a = 0; a < arr.length; a += 1) {
    arr[a].color = "green";
  }
  pushToArrays(arr.length - 1, 0, arr.length - 1, 0, 0, [], [1]);

  return { historyArray, codeLinesHistory, varLabelArray, varSubLabelArray, subArrayHistory };
};

export default sortArrayMerge;
