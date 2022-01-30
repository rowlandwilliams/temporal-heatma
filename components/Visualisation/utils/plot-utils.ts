import { scaleLinear } from 'd3-scale';
import { interpolateRgb } from 'd3-interpolate';
import { nHoursPerDay, padding, nCellsPerRow } from './numbers';
import { plotData, barData } from './data';
import { select } from 'd3-selection';

//// SELECTIONS ////
export const getXAxisSelection = (index: number, graphName = 'line') => {
    return select<SVGGElement, unknown>(`#${graphName}-x-axis-${index}`);
};

//// MIN / MAX ////
const allDataMin = Math.min(...plotData);
const allDataMax = Math.max(...plotData);
const barDataMin = Math.min(...barData.flat());
const barDataMax = Math.max(...barData.flat());
const minBubbleRadius = 0.02;
const maxBubbleRadius = 9;

//// SCALES ////
// Heatmap color
export const allDataColorScale = scaleLinear()
    .domain([allDataMin, allDataMax * 0.5, allDataMax])
    .range(['#FFFA7A', '#FF6868', '#512FFF'] as any)
    .interpolate(interpolateRgb.gamma(2.2) as any);

// Heatmap rectangle width
export const getWidthScale = (rectWidth: number) => {
    return scaleLinear()
        .domain([allDataMin, allDataMax])
        .range([rectWidth / 4, rectWidth]);
};

// Line / Bubble Graph y scale
export const getLineGraphYScale = (lineGraphHeight: number) => {
    return scaleLinear().domain([allDataMin, allDataMax]).range([lineGraphHeight, 0]);
};

// Bar chart y scale (10 min avgs)
export const getBarChartYScale = (lineGraphHeight: number) => {
    return scaleLinear()
        .domain([Math.min(...barData.flat()), Math.max(...barData.flat())])
        .range([0, lineGraphHeight]);
};

export const barChartColorScale = scaleLinear()
    .domain([barDataMin, barDataMax * 0.5, barDataMax])
    .range(['#FFFA7A', '#FF6868', '#512FFF'] as any)
    .interpolate(interpolateRgb.gamma(2.2) as any);

// Bubble chart radius
export const getBubbleRadiusScale = () => {
    return scaleLinear().domain([allDataMin, allDataMax]).range([minBubbleRadius, maxBubbleRadius]);
};

//// DIMENSIONS ////
export const getHourGroupWidth = (width: number) => {
    const hourGroupWidth = width / nHoursPerDay - 1;
    const paddedWidth = hourGroupWidth - padding;
    const hourGroupHeight = hourGroupWidth * 2 + padding;
    const lineGraphHeight = (hourGroupWidth * 2 + padding) * 0.75;

    return {
        hourGroupWidth,
        hourGroupHeight,
        lineGraphWidth: paddedWidth,
        lineGraphHeight,
        bubbleHeight: lineGraphHeight * 4,
        rectWidth: paddedWidth / nCellsPerRow,
    };
};
