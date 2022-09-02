import insertionStateAfterSwap from "./insertionStateAfterSwap";
import insertionDirectTimeComplexity from "./insertionDirectTimeComplexity";
import insertionSpaceComplexity from "./insertionSpaceComplexity";
import insertionChooseCode from "./insertionChooseCode";
import insertionArrayTimeComplexity from "./insertionArrayTimeComplexity";
import insertionDragCode from "./insertionDragCode";
import insertionDragSwap from "./insertionDragSwap";

const insertionSortHandler = (gameInfo: GameQuestionInfo) => {
  switch (gameInfo.qType) {
    case "STATE-AFTER-SWAPS":
      return insertionStateAfterSwap();
    case "TIME-COMPLEXITY-DIRECT":
      return insertionDirectTimeComplexity();
    case "SPACE-COMPLEXITY":
      return insertionSpaceComplexity();
    case "CHOOSE-PSEUDOCODE":
      return insertionChooseCode();
    case "TIME-COMPLEXITY-FROM-ARRAY":
      return insertionArrayTimeComplexity();
    case "DRAG-CODE":
      return insertionDragCode();
    case "DRAG-ARRAY-BARS":
      return insertionDragSwap();
    default:
      const gameDisplayObject: GameDisplayInfo = {
        answerChoices: false,
        content: "",
        question: "Something went wrong",
        contentType: "",
        answerType: "",
      };
      return gameDisplayObject;
  }
};

export default insertionSortHandler;
