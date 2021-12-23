import React from 'react';
import { ScaleLinear } from 'd3-scale';
import { HourlyLineGraph } from './HourlyLineGraph/HourlyLineGraph';
import { margin, nHoursPerDay, nMinPerHour } from '../utils/numbers';
import { barData } from '../utils/data';
import { getBarChartYScale } from '../utils/plot-utils';

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

export const LineGraphGroup = ({
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
            transform={`translate(0, ${hourGroupHeight + margin.top})`}
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
