import React from 'react';
import { ScaleLinear } from 'd3-scale';
import { margin, nHoursPerDay, nMinPerHour } from '../utils/numbers';
import { barData } from '../utils/data';
import { getBarChartYScale } from '../utils/plot-utils';
import { HourlyLineGraph } from '../LineGraphGroup/HourlyLineGraph/HourlyLineGraph';

interface Props {
    lineGraphHeight: number;
    lineGraphWidth: number;
    hourGroupWidth: number;
    hourGroupHeight: number;
    plotData: number[];
    lineGraphYScale: ScaleLinear<number, number, never>;
    colorScale: ScaleLinear<number, number, never>;
    barWidth: number;
}

export const BubbleGroup = ({
    lineGraphHeight,
    lineGraphWidth,
    hourGroupWidth,
    hourGroupHeight,
    plotData,
    lineGraphYScale,
    colorScale,
    barWidth,
}: Props) => {
    const barYScale = getBarChartYScale(lineGraphHeight);
    return (
        <g
            transform={`translate(0, ${(hourGroupHeight + margin.top) * 2})`}
            className="stroke-current text-header-gray stroke-2"
        >
            {[...Array(nHoursPerDay)].map((hour, i) => (
                <HourlyLineGraph
                    lineGraphWidth={lineGraphWidth}
                    lineGraphHeight={lineGraphHeight}
                    translateX={(hourGroupWidth * i) / 2}
                    key={lineGraphWidth * Math.random()}
                    groupData={plotData.slice(i * nMinPerHour, i * nMinPerHour + nMinPerHour)}
                    index={i}
                    lineGraphYScale={lineGraphYScale}
                    colorScale={colorScale}
                    barData={barData[i]}
                    barYScale={barYScale}
                    barWidth={barWidth}
                />
            ))}
        </g>
    );
};
