import { select } from "d3";
import { sankey } from "d3-sankey";
import { RawData, RawFlow } from "../../../types/types";

export const sankeyMargin = { top: 50, right: 50, bottom: 50, left: 50 };

export const getSankeyGenerator = (
  parentWidth: number,
  parentHeight: number,
  sankeyData: RawData
) => {
  const { nodes, links } = sankey()
    .nodeWidth(15)
    .nodePadding(10)
    .extent([
      [0, 0],
      [
        parentWidth - sankeyMargin.right - sankeyMargin.left,
        parentHeight - sankeyMargin.top - sankeyMargin.bottom,
      ],
    ])(sankeyData as any);

  return { nodes, links };
};
