import { axisBottom } from 'd3-axis';
import { ScaleLinear, scaleLinear } from 'd3-scale';
import { line } from 'd3-shape';
import React, { useEffect } from 'react';
import { HourGroup } from '../../shared/HourGroup/HourGroup';
import { getXAxisSelection } from '../../utils/plot-utils';
import { HourlyBars } from './HourlyBars/HourlyBars';
import { HourlyLine } from './HourlyLine/HourlyLine';
import { HourlyXAxis } from './HourlyXAxis/HourlyXAxis';

interface Props {
    translateX: number;
    groupData: number[];
    lineGraphWidth: number;
    lineGraphHeight: number;
    index: number;
    lineGraphYScale: ScaleLinear<number, number, never>;
    colorScale: ScaleLinear<number, number, never>;
    barData: number[];
    barYScale: ScaleLinear<number, number, never>;
    barWidth: number;
}

export const HourlyLinesAndBars = ({
    translateX,
    groupData,
    lineGraphWidth,
    lineGraphHeight,
    index,
    lineGraphYScale,
    colorScale,
    barData,
    barYScale,
    barWidth,
}: Props) => {
    const xScale = scaleLinear()
        .domain([0, 60])
        .range([translateX, translateX + lineGraphWidth]);

    const lineGenerator = line<number>()
        .x((d, i) => xScale(i))
        .y((d) => lineGraphYScale(d))
        .defined((d) => d > 0);

    useEffect(() => {
        const plotGraph = (index: number) => {
            const axisGroup = getXAxisSelection(index);

            const xAxis = axisBottom(xScale).ticks(0).tickSize(0);

            axisGroup.call(xAxis);
        };

        plotGraph(index);
    }, [groupData, index, lineGenerator, lineGraphWidth, lineGraphYScale, translateX, xScale]);

    const avgValue = groupData.reduce((a, b) => a + b, 0) / groupData.length;
    const groupColor = String(colorScale(avgValue));

    return (
        <HourGroup translateX={translateX}>
            <HourlyXAxis index={index} lineGraphHeight={lineGraphHeight} />
            <HourlyBars
                translateX={translateX}
                barData={barData}
                barWidth={barWidth}
                barYScale={barYScale}
                lineGraphHeight={lineGraphHeight}
            />
            <HourlyLine
                lineDAttribute={lineGenerator(groupData) as string}
                groupColor={groupColor}
            />
        </HourGroup>
    );
};
