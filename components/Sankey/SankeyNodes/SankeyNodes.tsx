import { SankeyNodeMinimal } from "d3-sankey";
import { SankeyNode } from "./SankeyNode/SankeyNode";

interface Props {
  nodes: SankeyNodeMinimal<{}, {}>[];
}

export const SankeyNodes = ({ nodes }: Props) => {
  return (
    <g id="nodes">
      {nodes.map((node: any, i) => (
        <SankeyNode {...node} color={"red"} key={node.name + node.key} />
      ))}
    </g>
  );
};
