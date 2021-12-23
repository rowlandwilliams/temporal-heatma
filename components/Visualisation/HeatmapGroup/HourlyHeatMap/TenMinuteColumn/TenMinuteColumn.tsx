import { ScaleLinear } from 'd3-scale';
import React from 'react';

interface Props {
    colData: number[];
    rectWidth: number;
    xTransform: number;
    colorScale: ScaleLinear<number, number, never>;
    widthScale: ScaleLinear<number, number, never>;
}

export const TenMinuteColumn = ({
    colData,
    rectWidth,
    xTransform,
    colorScale,
    widthScale,
}: Props) => {
    return (
        <>
            {colData.map((minute, i) => {
                const dimension = widthScale(minute);
                const diff = (rectWidth - dimension) / 2;
                return (
                    <rect
                        width={dimension}
                        height={dimension}
                        x={dimension < rectWidth ? xTransform + diff : xTransform}
                        y={dimension < rectWidth ? i * rectWidth + diff : i * rectWidth}
                        key={rectWidth * Math.random()}
                        fill={String(colorScale(minute))}
                    />
                );
            })}
        </>
    );
};
