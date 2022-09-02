import InsertionGeneral from "../AlgoReading/InsertionInfo/InsertionGeneral";
import SelectionGeneral from "../AlgoReading/SelectionInfo/SelectionGeneral";
import MergeGeneral from "../AlgoReading/MergeInfo/MergeGeneral";
import QuickGeneral from "../AlgoReading/QuickInfo/QuickGeneral";
import BinaryTreeGeneral from "../StructureReading/BinaryTreeInfo/BinaryTreeGeneral";
import LinkedListGeneral from "../StructureReading/LinkedListInfo/LinkedListGeneral";
import QueueGeneral from "../StructureReading/QueueInfo/QueueGeneral";
import StackGeneral from "../StructureReading/StackInfo/StackGeneral";
const GeneralAccordionSection = ({
  sectionNum,
  isAlgo,
}: {
  sectionNum: number;
  isAlgo: boolean;
}) => {
  return (
    <>
      {isAlgo && sectionNum === 0 ? (
        <InsertionGeneral />
      ) : sectionNum === 1 ? (
        <SelectionGeneral />
      ) : sectionNum === 2 ? (
        <MergeGeneral />
      ) : sectionNum === 3 ? (
        <QuickGeneral />
      ) : null}
      {!isAlgo && sectionNum === 0 ? (
        <BinaryTreeGeneral />
      ) : sectionNum === 1 ? (
        <LinkedListGeneral />
      ) : sectionNum === 2 ? (
        <QueueGeneral />
      ) : sectionNum === 3 ? (
        <StackGeneral />
      ) : null}
    </>
  );
};

export default GeneralAccordionSection;
