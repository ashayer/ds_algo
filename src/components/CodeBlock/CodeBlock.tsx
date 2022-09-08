import SyntaxHighlighter from "react-syntax-highlighter";
import { lightfair } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface CodeBlockProps {
  hoveredLine: number[];
  code: string;
  startingLineNumber: number;
}

const CodeBlock = ({ hoveredLine, code, startingLineNumber }: CodeBlockProps) => {
  return (
    <SyntaxHighlighter
      language="cpp"
      style={lightfair}
      showLineNumbers
      customStyle={{
        fontSize: "large",
        width: "100%",
        margin: 0,
      }}
      wrapLines
      startingLineNumber={startingLineNumber}
      lineProps={(lineNumber: number) => {
        const style: any = { display: "block" };
        if (hoveredLine?.includes(lineNumber)) {
          style.backgroundColor = "#ffc58f";
          // style.fontSize = "x-large";
        }
        return { style };
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
