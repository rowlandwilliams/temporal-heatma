import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { debounce } from 'lodash';
import {
    allDataColorScale,
    getBarChartYScale,
    getBubbleRadiusScale,
    getHourGroupWidth,
    getLineGraphYScale,
    getWidthScale,
} from './utils/plot-utils';
import { GraphHeader } from '../GraphHeader/GraphHeader';
import { plotData } from './utils/data';
import { Heatmap } from './HeatmapGroup/Heatmap';
import { LineAndBarGraph } from './LineAndBarGraph/LineAndBarGraph';
import { BubbleGraph } from './BubbleGra[h/BubbleGraph';

export const Visualisation = () => {
    const parentRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleWindowResize = debounce((current: HTMLDivElement) => {
        setWidth(current.offsetWidth);
        setHeight(current.offsetHeight);
    }, 100);

    useEffect(() => {
        const { current } = parentRef;
        if (current) {
            handleWindowResize(current);
            const setResize = () => handleWindowResize(current);
            window.addEventListener('resize', setResize);
            return () => window.removeEventListener('resize', setResize);
        }
    }, [parentRef, handleWindowResize]);

    useEffect(() => {
        setIsLoaded(true);
    }, [width, height]);

    const {
        hourGroupWidth,
        hourGroupHeight,
        lineGraphWidth,
        lineGraphHeight,
        bubbleHeight,
        rectWidth,
    } = getHourGroupWidth(width);

    const widthScale = getWidthScale(rectWidth);

    const lineOrBubbleGraphYScale = getLineGraphYScale(lineGraphHeight);
    const barYScale = getBarChartYScale(lineGraphHeight);
    const bubbleYScale = getLineGraphYScale(bubbleHeight);
    const bubbleRadiusScale = getBubbleRadiusScale();

    return (
        <>
            <div
                className={classNames(
                    'h-full transition-all duration-1000 p-2 text-gray-50 font-inconsolata-regular',
                    { 'opacity-0': !isLoaded },
                )}
            >
                <div className="flex flex-col bg-chart-gray h-full rounded-md">
                    <GraphHeader headerName="Heatmap" />
                    <div className="flex-grow p-4" ref={parentRef}>
                        <svg width="100%" height="100%" id="map-svg">
                            <Heatmap
                                hourGroupWidth={hourGroupWidth}
                                plotData={plotData}
                                colorScale={allDataColorScale}
                                widthScale={widthScale}
                                rectWidth={rectWidth}
                            />
                            <LineAndBarGraph
                                hourGroupWidth={hourGroupWidth}
                                hourGroupHeight={hourGroupHeight}
                                lineGraphWidth={lineGraphWidth}
                                lineGraphHeight={lineGraphHeight}
                                plotData={plotData}
                                lineGraphYScale={lineOrBubbleGraphYScale}
                                colorScale={allDataColorScale}
                                barWidth={rectWidth}
                                barYScale={barYScale}
                            />
                            <BubbleGraph
                                hourGroupWidth={hourGroupWidth}
                                hourGroupHeight={hourGroupHeight}
                                lineGraphWidth={lineGraphWidth}
                                lineGraphHeight={bubbleHeight}
                                plotData={plotData}
                                bubbleGraphYScale={bubbleYScale}
                                colorScale={allDataColorScale}
                                radiusScale={bubbleRadiusScale}
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};
