import { sankeyLinkHorizontal } from 'd3-sankey';
import classNames from 'classnames';
import { useStore } from '../../../../../store/store';
import { TransformedLink } from '../../../../../types/types';
import { useState } from 'react';

interface Props {
    link: TransformedLink;
    color: string;
}

export const SankeyLink = ({ link }: Props) => {
    const { activeNodes, setLinkIsHovered, setLinkTooltipData } = useStore();

    const [thisLinkIsHovered, setThisLinkIsHovered] = useState(false);
    const { source, target } = link;
    const sourceNodeId = source.name + '-' + source.directionKey;
    const targetNodeId = target.name + '-' + target.directionKey;
    const gradientId = sourceNodeId + '-' + targetNodeId;

    const linkIsActive = activeNodes.includes(sourceNodeId) || activeNodes.includes(targetNodeId);

    const handleLinkEnter = () => {
        setLinkIsHovered(true);
        setThisLinkIsHovered(true);
        setLinkTooltipData({
            x: source.x1 + (target.x0 - source.x1) / 2,
            y: (link.y0 + (link.y1 - link.y0) / 2) as number,
            sourceProvince: source.province,
            targetProvince: target.province,
        });
    };

    const handlLinkLeave = () => {
        setLinkIsHovered(false);
        setThisLinkIsHovered(false);
    };

    const nodesAreSelected = activeNodes.length > 0;
    return (
        <path
            onMouseEnter={() => handleLinkEnter()}
            onMouseLeave={() => handlLinkLeave()}
            className={classNames('stroke-current cursor-pointer', {
                'opacity-100': linkIsActive || thisLinkIsHovered,
                'opacity-40': !nodesAreSelected && !linkIsActive,
                'opacity-10': nodesAreSelected && !linkIsActive,
            })}
            d={sankeyLinkHorizontal()(link) as string}
            style={{
                stroke: `url(#${gradientId})`,
                fill: 'none',
                strokeWidth: Math.max(1, link.width as number),
            }}
        />
    );
};
