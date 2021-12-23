interface Props {
    index: number;
    lineGraphHeight: number;
}

export const HourlyXAxis = ({ index, lineGraphHeight }: Props) => {
    return <g id={`x-axis-${index}`} transform={`translate(0, ${lineGraphHeight})`} />;
};
