import { sankey } from 'd3-sankey';
import { RawData } from '../../../types/types';

export const sankeyMargin = { top: 10, right: 96, bottom: 10, left: 96 };
export const nodeWidth = 96;
export const nodeTooltipPadding = 5;

export const getSankeyGenerator = (
    parentWidth: number,
    parentHeight: number,
    sankeyData: RawData,
) => {
    const { nodes, links } = sankey()
        .nodeWidth(nodeWidth)
        .nodePadding(0)
        .extent([
            [0, 0],
            [
                parentWidth - sankeyMargin.right - sankeyMargin.left,
                parentHeight - sankeyMargin.top - sankeyMargin.bottom,
            ],
        ])(sankeyData as any);

    return { nodes, links };
};
