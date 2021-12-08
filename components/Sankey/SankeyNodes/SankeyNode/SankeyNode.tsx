import { useStore } from '../../../../store/store';

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
}

export const SankeyNode = ({ x0, x1, y0, y1, color, province, nodeSum, nodePercentage }: Props) => {
    const { setNodeIsHovered, setNodeTooltipData } = useStore();

    const handleMouseEnter = () => {
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
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => setNodeIsHovered(false)}
        >
            <rect
                className="cursor-pointer"
                x={x0}
                y={y0}
                width={(x1 as number) - (x0 as number)}
                height={(y1 as number) - (y0 as number)}
                fill={color}
            ></rect>
            <text
                x={textCoordX}
                y={textYCoordY}
                dominantBaseline="middle"
                textAnchor="middle"
                className="text-2xs fill-current text-gray-50 cursor-pointer"
            >
                {province}
            </text>
        </g>
    );
};
