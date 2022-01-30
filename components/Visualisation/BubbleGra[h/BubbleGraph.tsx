import { ScaleLinear } from 'd3-scale';
import React from 'react';
import { margin, nHoursPerDay, nMinPerHour } from '../utils/numbers';
import { HourlyBubbles } from './HourlyBubbles/HourlyBubbles';

interface Props {
    lineGraphWidth: number;
    lineGraphHeight: number;
    hourGroupWidth: number;
    hourGroupHeight: number;
    plotData: number[];
    bubbleGraphYScale: ScaleLinear<number, number, never>;
    colorScale: ScaleLinear<number, number, never>;
    radiusScale: ScaleLinear<number, number, never>;
}

export const BubbleGraph = ({
    lineGraphWidth,
    lineGraphHeight,
    hourGroupWidth,
    hourGroupHeight,
    plotData,
    bubbleGraphYScale,
    colorScale,
    radiusScale,
}: Props) => {
    return (
        <g
            transform={`translate(0, ${(hourGroupHeight + margin.top) * 2})`}
            className="stroke-current text-header-gray stroke-2"
        >
            {[...Array(nHoursPerDay)].map((hour, i) => (
                <HourlyBubbles
                    translateX={(hourGroupWidth * i) / 2}
                    key={lineGraphWidth * Math.random()}
                    index={i}
                    lineGraphWidth={lineGraphWidth}
                    lineGraphHeight={lineGraphHeight}
                    graphName="bubbles"
                    groupData={plotData.slice(i * nMinPerHour, i * nMinPerHour + nMinPerHour)}
                    bubbleGraphYScale={bubbleGraphYScale}
                    colorScale={colorScale}
                    radiusScale={radiusScale}
                />
            ))}
        </g>
    );
};
