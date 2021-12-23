import React from 'react';
import { ScaleLinear } from 'd3-scale';
import { margin, nHoursPerDay, nMinPerHour } from '../utils/numbers';
import { HourlyHeatmap } from './HourlyHeatMap/HourlyHeatmap';

interface Props {
    hourGroupWidth: number;
    plotData: number[];
    colorScale: ScaleLinear<number, number, never>;
    widthScale: ScaleLinear<number, number, never>;
    rectWidth: number;
}

export const Heatmap = ({ hourGroupWidth, plotData, colorScale, widthScale, rectWidth }: Props) => {
    return (
        <g>
            {[...Array(nHoursPerDay)].map((hour, i) => (
                <HourlyHeatmap
                    key={hourGroupWidth + Math.random()}
                    x={hourGroupWidth * i}
                    y={margin.top}
                    index={i}
                    gridData={plotData.slice(i * nMinPerHour, i * nMinPerHour + nMinPerHour)}
                    colorScale={colorScale}
                    rectWidth={rectWidth}
                    widthScale={widthScale}
                />
            ))}
        </g>
    );
};
