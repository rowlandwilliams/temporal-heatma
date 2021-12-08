import { sankey } from 'd3-sankey';
import { RawData } from '../../../types/types';

export const sankeyMargin = { top: 100, right: 100, bottom: 100, left: 100 };
export const nodeWidth = 100;
export const nodeTooltipPadding = 5;

export const getSankeyGenerator = (
    parentWidth: number,
    parentHeight: number,
    sankeyData: RawData,
) => {
    const { nodes, links } = sankey()
        .nodeWidth(nodeWidth)
        .nodePadding(2)
        .extent([
            [0, 0],
            [
                parentWidth - sankeyMargin.right - sankeyMargin.left,
                parentHeight - sankeyMargin.top - sankeyMargin.bottom,
            ],
        ])(sankeyData as any);

    return { nodes, links };
};
