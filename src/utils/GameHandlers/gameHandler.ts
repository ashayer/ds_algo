import insertionSortHandler from "./Insertion/insertionSortHandler";
import selectionSortHandler from "./Selection/selectionSortHandler";
import mergeSortHandler from "./Merge/mergeSortHandler";
import quickSortHandler from "./Quick/quickSortHandler";

const gameHandler = (gameInfo: GameQuestionInfo) => {
  switch (gameInfo.qTopic) {
    case "INSERTION":
      return insertionSortHandler(gameInfo);
    case "SELECTION":
      return selectionSortHandler(gameInfo);
    case "MERGE":
      return mergeSortHandler(gameInfo);
    case "QUICK":
      return quickSortHandler(gameInfo);
    default:
      return insertionSortHandler(gameInfo);
  }
};

export default gameHandler;
