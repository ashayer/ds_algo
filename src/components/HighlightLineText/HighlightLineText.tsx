interface HighlightLineTextProps {
  lineNum: number[];
  setHoveredLine: (line: number[]) => void;
}

const HighlightLineText = ({ lineNum, setHoveredLine }: HighlightLineTextProps) => {
  return (
    <span
      style={{ color: "#ff7b00" }}
      onMouseOver={() => setHoveredLine(lineNum)}
      onMouseLeave={() => setHoveredLine([])}
      onFocus={() => setHoveredLine(lineNum)}
    >
      {` (LINE ${lineNum[0]}) `}
    </span>
  );
};

export default HighlightLineText;
