declare global {
  interface GameStats {
    points: number;
    gamesPlayed: number;
    numCorrect: number;
    numWrong: number;
    responseTime: number;
    streak: number;
  }
  interface SessionGameStats {
    points: number;
    numCorrect: number;
    numWrong: number;
    responseTime: number;
    streak: number;
  }
  interface SortHistoryElement {
    value: number;
    color: string;
  }

  interface SortLabelHistoryElement {
    index: number;
    label: string;
  }

  interface ArrayBarsProps {
    sortHistoryArray: SortHistoryElement[][];
    step: number;
    varLabelArray: SortLabelHistoryElement[][];
    arrayMax: number;
  }

  interface StepLabelsProps {
    varLabelArray: SortLabelHistoryElement[];
    idx: number;
  }
  interface SubArrayBarsProps {
    sortHistorySubArray: SortHistoryElement[][];
    step: number;
    varLabelSubArray: SortLabelHistoryElement[][];
    arrayMax: number;
  }

  interface StepLabelsSubProps {
    varLabelSubArray: SortLabelHistoryElement[];
    idx: number;
  }

  interface ReadingSubSection {
    completed: boolean;
    name: string;
    subsectionId: number;
  }

  interface ReadingSection {
    completed: boolean;
    sectionID: number;
    sectionName: string;
    subsections: ReadingSubSection[];
  }

  interface GameQuestionInfo {
    qTimer: number;
    qTopic: string;
    qType: string;
    contentType: string;
    answerType: string;
    hasAnswerOptions: boolean;
  }

  interface GameDisplayInfo {
    question: string;
    answerChoices: GameAnswerChoices[] | boolean;
    content: GameContentType;
    contentType: string;
    answerType: string;
  }

  type GameContentType = number[] | DragArrayType[] | string[] | string;

  interface GameAnswerChoices {
    isCorrect: boolean;
    answerContent: string | number[];
  }

  type DragArrayType = {
    lineContent: string | number;
    correctIdx: number;
  };
}

export {};
