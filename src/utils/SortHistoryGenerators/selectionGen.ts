const createLabelObjectSelectionSort = (i: number, j: number, min: number) => {
  return [
    { index: i, label: "i" },
    { index: j, label: "j" },
    { index: min, label: "min" },
  ];
};

const sortArraySelection = (arrayElements: SortHistoryElement[]) => {
  const historyArray: SortHistoryElement[][] = [];
  const codeLinesHistory: number[][] = [];
  const varLabelArray: SortLabelHistoryElement[][] = [];

  const arr = JSON.parse(JSON.stringify(arrayElements));
  for (let i = 0; i < arr.length; i += 1) {
    let min = i;
    arr[i].color = "red";
    varLabelArray.push(createLabelObjectSelectionSort(i, i + 1, min));
    codeLinesHistory.push([2,3]);
    historyArray.push(JSON.parse(JSON.stringify(arr)));
    for (let j = i + 1; j < arr.length; j += 1) {
      arr[j].color = "purple";
      varLabelArray.push(createLabelObjectSelectionSort(i, j, min));
      codeLinesHistory.push([5]);
      historyArray.push(JSON.parse(JSON.stringify(arr)));
      if (arr[j].value < arr[min].value) {
        if (min !== i) {
          arr[min].color = "blue";
        }
        min = j;
        arr[min].color = "purple";
        varLabelArray.push(createLabelObjectSelectionSort(i, j, min));

        codeLinesHistory.push([6]);
        historyArray.push(JSON.parse(JSON.stringify(arr)));
      }
      if (j !== min) {
        arr[j].color = "blue";
      }
      varLabelArray.push(createLabelObjectSelectionSort(i, j, min));

      codeLinesHistory.push([4]);
      historyArray.push(JSON.parse(JSON.stringify(arr)));
    }
    const temp = arr[min].value;
    arr[min].value = arr[i].value;
    arr[i].value = temp;
    if (min !== i) {
      arr[min].color = "blue";
    }
    codeLinesHistory.push([8]);
    varLabelArray.push(createLabelObjectSelectionSort(i, arr.length - 1, min));
    historyArray.push(JSON.parse(JSON.stringify(arr)));
  }

  for (let k = 0; k < arr.length; k += 1) {
    arr[k].color = "green";
  }
  varLabelArray.push(createLabelObjectSelectionSort(arr.length - 1, arr.length - 1, 0));
  codeLinesHistory.push([6]);
  historyArray.push(JSON.parse(JSON.stringify(arr)));

  return { historyArray, codeLinesHistory, varLabelArray };
};

export default sortArraySelection;
