import { scaleLinear } from 'd3-scale';
import { interpolateRgb } from 'd3-interpolate';
import { nHoursPerDay, padding, nCellsPerRow } from './numbers';
import { plotData, barData } from './data';

export const heatmapColorScale = scaleLinear()
    .domain([Math.min(...plotData), Math.max(...plotData) * 0.5, Math.max(...plotData)])
    .range(['#FFFA7A', '#FF6868', '#512FFF'] as any)
    .interpolate(interpolateRgb.gamma(2.2) as any);

export const getWidthScale = (rectWidth: number) => {
    return scaleLinear()
        .domain([Math.min(...plotData), Math.max(...plotData)])
        .range([rectWidth / 4, rectWidth]);
};

export const getHourGroupWidth = (width: number) => {
    const hourGroupWidth = width / nHoursPerDay - 1;
    const paddedWidth = hourGroupWidth - padding;
    const hourGroupHeight = hourGroupWidth * 2 + padding;

    return {
        hourGroupWidth,
        hourGroupHeight,
        lineGraphWidth: paddedWidth,
        lineGraphHeight: (hourGroupWidth * 2 + padding) * 0.75,
        rectWidth: paddedWidth / nCellsPerRow,
    };
};

export const getLineGraphYScale = (lineGraphHeight: number) => {
    return scaleLinear()
        .domain([Math.min(...plotData), Math.max(...plotData)])
        .range([lineGraphHeight, 0]);
};

export const getBarChartYScale = (lineGraphHeight: number) => {
    return scaleLinear()
        .domain([Math.min(...barData.flat()), Math.max(...barData.flat())])
        .range([0, lineGraphHeight]);
};

export const barChartColorScale = scaleLinear()
    .domain([Math.min(...plotData), Math.max(...barData.flat()) * 0.5, Math.max(...barData.flat())])
    .range(['#FFFA7A', '#FF6868', '#512FFF'] as any)
    .interpolate(interpolateRgb.gamma(2.2) as any);
