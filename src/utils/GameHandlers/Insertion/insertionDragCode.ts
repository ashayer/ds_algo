import { shuffle } from "d3-array";

function insertionDragCode() {
  const Line1 = "for (int i = 0; i < arr.len; i++)\n";
  const Line2 = "for (int j = i; j > 0; j--)\n";
  const Line3 = "if (arr[j] < arr[j-1])\n";
  const Line4 = "swap (arr[j],arr[j-1])\n";
  const Line5 = "else break\n";

  const pseudoCodeStringArray = shuffle([
    {
      lineContent: Line1,
      correctIdx: 0,
    },
    {
      lineContent: Line2,
      correctIdx: 1,
    },
    {
      lineContent: Line3,
      correctIdx: 2,
    },
    {
      lineContent: Line4,
      correctIdx: 3,
    },
    {
      lineContent: Line5,
      correctIdx: 4,
    },
  ]);

  const gameDisplayObject: GameDisplayInfo = {
    answerChoices: false,
    content: pseudoCodeStringArray,
    contentType: "DRAGGABLE-CODE",
    answerType: "CHECK-ANSWER",
    question: "Move pseudo-code into correct order for Insertion Sort",
  };

  return gameDisplayObject;
}

export default insertionDragCode;
