interface Props {
    translateX: number;
    children: React.ReactNode;
}

export const HourGroup = ({ translateX, children }: Props) => {
    return <g transform={`translate(${translateX}, 0)`}>{children}</g>;
};
