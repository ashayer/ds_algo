import mergeStateAfterSwap from "./mergeStateAfterSwap";
import mergeDirectTimeComplexity from "./mergeDirectTimeComplexity";
import mergeSpaceComplexity from "./mergeSpaceComplexity";
import mergeChooseCode from "./mergeChooseCode";
import mergeArrayTimeComplexity from "./mergeArrayTimeComplexity";
import mergeDragCode from "./mergeDragCode";
import mergeDragSwap from "./mergeDragSwap";

const mergeSortHandler = (gameInfo: GameQuestionInfo) => {
  switch (gameInfo.qType) {
    case "STATE-AFTER-SWAPS":
      return mergeStateAfterSwap();
    case "TIME-COMPLEXITY-DIRECT":
      return mergeDirectTimeComplexity();
    case "SPACE-COMPLEXITY":
      return mergeSpaceComplexity();
    case "CHOOSE-PSEUDOCODE":
      return mergeChooseCode();
    case "TIME-COMPLEXITY-FROM-ARRAY":
      return mergeArrayTimeComplexity();
    case "DRAG-CODE":
      return mergeDragCode();
    case "DRAG-ARRAY-BARS":
      return mergeDragSwap();
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

export default mergeSortHandler;
