import { useStore } from '../../../../store/store';

interface Props {
    name?: string;
    x0?: number | undefined;
    x1?: number | undefined;
    y0?: number | undefined;
    y1?: number | undefined;
    color: string;
    province: string;
}

export const SankeyNode = ({ name, x0, x1, y0, y1, color, province }: Props) => {
    const { setNodeIsHovered, setNodeTooltipData } = useStore();

    const handleMouseEnter = () => {
        setNodeIsHovered(true);
        setNodeTooltipData({
            x: x0 as number,
            y: y0 as number,
            province: province,
            nodeColor: color,
        });
    };

    return (
        <rect
            x={x0}
            y={y0}
            width={(x1 as number) - (x0 as number)}
            height={(y1 as number) - (y0 as number)}
            fill={color}
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => setNodeIsHovered(false)}
        >
            <title>{name}</title>
        </rect>
    );
};
