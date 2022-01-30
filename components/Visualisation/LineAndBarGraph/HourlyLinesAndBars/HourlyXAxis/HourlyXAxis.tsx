interface Props {
    index: number;
    lineGraphHeight: number;
    graphName?: string;
}

export const HourlyXAxis = ({ index, lineGraphHeight, graphName = 'line' }: Props) => {
    return <g id={`${graphName}-x-axis-${index}`} transform={`translate(0, ${lineGraphHeight})`} />;
};
