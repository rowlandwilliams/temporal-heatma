import { axisBottom } from 'd3-axis';
import { ScaleLinear, scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { useEffect } from 'react';
import { HourlyXAxis } from '../../LineAndBarGraph/HourlyLinesAndBars/HourlyXAxis/HourlyXAxis';
import { HourGroup } from '../../shared/HourGroup/HourGroup';

interface Props {
    translateX: number;
    index: number;
    lineGraphWidth: number;
    lineGraphHeight: number;
    graphName: string;
    groupData: number[];
    bubbleGraphYScale: ScaleLinear<number, number, never>;
    colorScale: ScaleLinear<number, number, never>;
    radiusScale: ScaleLinear<number, number, never>;
}

export const HourlyBubbles = ({
    translateX,
    index,
    lineGraphWidth,
    lineGraphHeight,
    graphName,
    groupData,
    bubbleGraphYScale,
    colorScale,
    radiusScale,
}: Props) => {
    const xScale = scaleLinear()
        .domain([0, 60])
        .range([translateX, translateX + lineGraphWidth]);

    useEffect(() => {
        const plotBubbles = () => {
            const axisGroup = select<SVGGElement, unknown>(`#${graphName}-x-axis-${index}`);

            const xAxis = axisBottom(xScale).ticks(0).tickSize(0);

            axisGroup.call(xAxis);
        };

        plotBubbles();
    }, [index, xScale, graphName]);

    return (
        <HourGroup translateX={translateX}>
            <HourlyXAxis index={index} lineGraphHeight={lineGraphHeight} graphName="bubbles" />
            {groupData.map((minuteValue, i) => {
                const circleColor = String(colorScale(minuteValue));
                return (
                    <circle
                        cx={xScale(i)}
                        cy={bubbleGraphYScale(minuteValue)}
                        y="10"
                        r={radiusScale(minuteValue)}
                        key={Math.random() + xScale(i)}
                        fill={circleColor}
                        stroke={circleColor}
                        strokeWidth={1}
                        fillOpacity={0.01}
                    />
                );
            })}
        </HourGroup>
    );
};
