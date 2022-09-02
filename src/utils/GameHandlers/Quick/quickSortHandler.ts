import quickStateAfterSwap from "./quickStateAfterSwap";
import quickDirectTimeComplexity from "./quickDirectTimeComplexity";
import quickSpaceComplexity from "./quickSpaceComplexity";
import quickChooseCode from "./quickChooseCode";
import quickArrayTimeComplexity from "./quickArrayTimeComplexity";
import quickDragCode from "./quickDragCode";
import quickDragSwap from "./quickDragSwap";

const quickSortHandler = (gameInfo: GameQuestionInfo) => {
  switch (gameInfo.qType) {
    case "STATE-AFTER-SWAPS":
      return quickStateAfterSwap();
    case "TIME-COMPLEXITY-DIRECT":
      return quickDirectTimeComplexity();
    case "SPACE-COMPLEXITY":
      return quickSpaceComplexity();
    case "CHOOSE-PSEUDOCODE":
      return quickChooseCode();
    case "TIME-COMPLEXITY-FROM-ARRAY":
      return quickArrayTimeComplexity();
    case "DRAG-CODE":
      return quickDragCode();
    case "DRAG-ARRAY-BARS":
      return quickDragSwap();
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

export default quickSortHandler;
