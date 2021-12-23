import { ScaleLinear } from 'd3-scale';
import React from 'react';
import { barChartColorScale } from '../../../utils/plot-utils';
import { HourlyBarChartRect } from './HourlyBarChartRect/HourlyBarChartRect';

interface Props {
    translateX: number;
    barData: number[];
    barYScale: ScaleLinear<number, number, never>;
    barWidth: number;
    lineGraphHeight: number;
}
const offset = 2;

export const HourlyBars = ({
    translateX,
    barData,
    barYScale,
    barWidth,
    lineGraphHeight,
}: Props) => {
    return (
        <g
            transform={`translate(${translateX}, 0)`}
            className="fill-current text-header-gray hover:bg-chart-purple"
        >
            {barData.map((bar, i) => {
                const barHeight = barYScale(bar);
                const barColorOnHover = String(barChartColorScale(bar));
                return (
                    <HourlyBarChartRect
                        barWidth={barWidth}
                        barHeight={barHeight}
                        x={barWidth * i}
                        y={lineGraphHeight - barHeight - offset}
                        key={Math.random() * barHeight}
                        barColorOnHover={barColorOnHover}
                    />
                );
            })}
        </g>
    );
};
