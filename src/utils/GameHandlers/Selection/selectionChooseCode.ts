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

function selectionChooseCode() {
  const Line1 = "for(int i = 0; i < arr.len; i += 1)\n";
  const Line2 = "\tint min = i\n";
  const Line3 = "\tfor(int j = i+1; j < arr.len; j += 1)\n";
  const Line4 = "\t\tif (arr[j] < arr[min])\n";
  const Line5 = "\t\t\tmin = j\n";
  const Line6 = "\tswap(arr[i],arr[min])\n";

  const pseudoCodeStringArray = [Line1, Line2, Line3, Line4, Line5, Line6];

  const answersOptionsObjectArray = [
    {
      right: Line1,
      wrong: [
        "for(int i = 1; i < arr.len; i += 1)",
        "for(int i = arr.len; i > 0; i--)",
        "for(int i = arr.len; i > 0; i--)",
      ],
    },
    {
      right: Line2,
      wrong: ["int min = 1", "int min = 0", "int min = arr.len"],
    },
    {
      right: Line3,
      wrong: [
        "for(int j = 0; j < arr.len; j += 1)",
        "for(int j = i; j < arr.len; j += 1)",
        "for(int j = 1; j < arr.len; j += 1)",
      ],
    },
    {
      right: Line4,
      wrong: ["if(arr[i] < arr[j]))", "if(arr[j] > arr[min]))", "if(arr[i] < arr[min])"],
    },
    {
      right: Line5,
      wrong: ["min = 1", "min = 0", "min = i"],
    },
    {
      right: Line6,
      wrong: ["swap(arr[i], arr[j])", "swap(arr[min], arr[j])", "swap(arr[i], arr[i-1])"],
    },
  ];

  const randomLineNumber = Math.floor(Math.random() * 6); // random number 0-5
  let selectionPseudo = "";

  for (let i = 0; i < pseudoCodeStringArray.length; i += 1) {
    if (i === randomLineNumber) {
      selectionPseudo += generateEmptyLine(pseudoCodeStringArray[i], randomLineNumber + 1);
    } else {
      selectionPseudo += pseudoCodeStringArray[i];
    }
  }

  const rightAnswer = answersOptionsObjectArray[randomLineNumber].right.slice(2);
  const wrongAnswers = shuffle(answersOptionsObjectArray[randomLineNumber].wrong);

  const answerChoices = [{ isCorrect: true, answerContent: rightAnswer }];
  for (const wrongChoice of wrongAnswers) {
    answerChoices.push({ isCorrect: false, answerContent: wrongChoice });
  }

  const gameDisplayObject: GameDisplayInfo = {
    answerChoices: shuffle(answerChoices),
    content: selectionPseudo,
    question: "Fill in the missing pseudo-code of Selection Sort",
    contentType: "CODE",
    answerType: "TEXT",
  };

  return gameDisplayObject;
}

export default selectionChooseCode;
