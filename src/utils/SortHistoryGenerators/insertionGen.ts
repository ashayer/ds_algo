const createLabelObjectInsertionSort = (i: number, j: number, jMinus: number) => {
  return [
    { index: i, label: "i" },
    { index: j, label: "j" },
    { index: jMinus, label: "j - 1" },
  ];
};

const sortArrayInsertion = (arrayElements: SortHistoryElement[]) => {
  const historyArray: SortHistoryElement[][] = [];
  const codeLinesHistory: number[][] = [];
  const varLabelArray: SortLabelHistoryElement[][] = [];
  const arr = JSON.parse(JSON.stringify(arrayElements));
  for (let i = 1; i < arr.length; i += 1) {
    const current = arr[i].value;
    let j = i - 1;
    arr[i].color = "red";
    arr[j].color = "red";
    varLabelArray.push(createLabelObjectInsertionSort(i, j + 1, j));
    codeLinesHistory.push([4]);
    historyArray.push(JSON.parse(JSON.stringify(arr)));

    while (j >= 0 && arr[j].value > current) {
      const temp = arr[j + 1].value;
      arr[j + 1].value = arr[j].value;
      arr[j].value = temp;
      arr[j + 1].color = "blue";
      varLabelArray.push(createLabelObjectInsertionSort(i, j, j - 1));
      j -= 1;
      if (j >= 0) {
        arr[j].color = "red";
      }
      codeLinesHistory.push([4, 5]);
      historyArray.push(JSON.parse(JSON.stringify(arr)));
    }
    varLabelArray.push(createLabelObjectInsertionSort(i, j, j - 1));
    codeLinesHistory.push([7]);
    historyArray.push(JSON.parse(JSON.stringify(arr)));

    arr[j + 1].value = current;
    if (j >= 0) arr[j].color = "blue";
    arr[j + 1].color = "blue";
    varLabelArray.push(createLabelObjectInsertionSort(i, j, j - 1));
    codeLinesHistory.push([2, 3]);
    historyArray.push(JSON.parse(JSON.stringify(arr)));
  }

  for (let k = 0; k < arr.length; k += 1) {
    arr[k].color = "green";
  }
  varLabelArray.push(createLabelObjectInsertionSort(arr.length - 1, arr.length - 1, 0));
  codeLinesHistory.push([1]);
  historyArray.push(JSON.parse(JSON.stringify(arr)));

  return { historyArray, codeLinesHistory, varLabelArray };
};

export default sortArrayInsertion;
