import classNames from 'classnames';
import { useStore } from '../../../../../store/store';

interface Props {
    name?: string;
    x0?: number | undefined;
    x1?: number | undefined;
    y0?: number | undefined;
    y1?: number | undefined;
    color: string;
    province: string;
    nodeSum: number;
    nodePercentage: number;
    nodeIdKey: string;
}

export const SankeyNode = ({
    name,
    x0,
    x1,
    y0,
    y1,
    color,
    province,
    nodeSum,
    nodePercentage,
    nodeIdKey,
}: Props) => {
    // geneerate unique node id
    const nodeId = name + '-' + nodeIdKey;

    const { setNodeIsHovered, setNodeTooltipData, activeNodes, addActiveNode, removeActiveNode } =
        useStore();

    const nodeIsActive = activeNodes.includes(nodeId);

    const handlNodeClick = () => {
        return nodeIsActive ? removeActiveNode(nodeId) : addActiveNode(nodeId);
    };

    const handleNodeEnter = () => {
        setNodeIsHovered(true);
        setNodeTooltipData({
            x: x0 as number,
            y: y0 as number,
            province: province,
            nodeColor: color,
            nodeSum: nodeSum,
            nodePercentage: nodePercentage,
        });
    };

    const midPointX = ((x1 as number) - (x0 as number)) / 2;
    const midPointY = ((y1 as number) - (y0 as number)) / 2;
    const textCoordX = (x1 as number) - midPointX;
    const textYCoordY = (y1 as number) - midPointY;

    return (
        <g
            className="relative"
            onMouseEnter={() => handleNodeEnter()}
            onMouseLeave={() => setNodeIsHovered(false)}
            onClick={() => handlNodeClick()}
        >
            <rect
                className={classNames('cursor-pointer stroke-current stroke-1 text-gray-300', {
                    'text-gray-600': nodeIsActive,
                })}
                x={x0}
                y={y0}
                width={(x1 as number) - (x0 as number)}
                height={(y1 as number) - (y0 as number)}
                fill={nodeIsActive ? 'white' : '#F9FAFB'}
                fillOpacity="0.5"
            ></rect>
            <text
                x={textCoordX}
                y={textYCoordY}
                dominantBaseline="middle"
                textAnchor="middle"
                className="text-2xs fill-current text-gray-700 cursor-pointer"
            >
                {province}
            </text>
        </g>
    );
};
