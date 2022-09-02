import selectionStateAfterSwap from "./selectionStateAfterSwap";
import selectionDirectTimeComplexity from "./selectionDirectTimeComplexity";
import selectionSpaceComplexity from "./selectionSpaceComplexity";
import selectionChooseCode from "./selectionChooseCode";
import selectionArrayTimeComplexity from "./selectionArrayTimeComplexity";
import selectionDragCode from "./selectionDragCode";
import selectionDragSwap from "./selectionDragSwap";

const selectionSortHandler = (gameInfo: GameQuestionInfo) => {
  switch (gameInfo.qType) {
    case "STATE-AFTER-SWAPS":
      return selectionStateAfterSwap();
    case "TIME-COMPLEXITY-DIRECT":
      return selectionDirectTimeComplexity();
    case "SPACE-COMPLEXITY":
      return selectionSpaceComplexity();
    case "CHOOSE-PSEUDOCODE":
      return selectionChooseCode();
    case "TIME-COMPLEXITY-FROM-ARRAY":
      return selectionArrayTimeComplexity();
    case "DRAG-CODE":
      return selectionDragCode();
    case "DRAG-ARRAY-BARS":
      return selectionDragSwap();
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

export default selectionSortHandler;
