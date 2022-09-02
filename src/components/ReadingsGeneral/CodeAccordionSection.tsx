import InsertionCode from "../AlgoReading/InsertionInfo/InsertionCode";
import SelectionCode from "../AlgoReading/SelectionInfo/SelectionCode";
import MergeCode from "../AlgoReading/MergeInfo/MergeCode";
import QuickCode from "../AlgoReading/QuickInfo/QuickCode";
import BinaryTreeCode from "../StructureReading/BinaryTreeInfo/BinaryTreeCode";
import LinkedListCode from "../StructureReading/LinkedListInfo/LinkedListCode";
import QueueCode from "../StructureReading/QueueInfo/QueueCode";
import StackCode from "../StructureReading/StackInfo/StackCode";
const CodeAccordionSection = ({ sectionNum, isAlgo }: { sectionNum: number; isAlgo: boolean }) => {
  return (
    <>
      {isAlgo && sectionNum === 0 ? (
        <InsertionCode />
      ) : sectionNum === 1 ? (
        <SelectionCode />
      ) : sectionNum === 2 ? (
        <MergeCode />
      ) : sectionNum === 3 ? (
        <QuickCode />
      ) : null}
      {!isAlgo && sectionNum === 0 ? (
        <BinaryTreeCode />
      ) : sectionNum === 1 ? (
        <LinkedListCode />
      ) : sectionNum === 2 ? (
        <QueueCode />
      ) : sectionNum === 3 ? (
        <StackCode />
      ) : null}
    </>
  );
};

export default CodeAccordionSection;
