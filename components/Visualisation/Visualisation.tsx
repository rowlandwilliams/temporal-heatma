import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { debounce } from 'lodash';
import {
    heatmapColorScale,
    getHourGroupWidth,
    getLineGraphYScale,
    getWidthScale,
} from './utils/plot-utils';
import { GraphHeader } from '../GraphHeader/GraphHeader';
import { plotData } from './utils/data';
import { HeatmapGroup } from './BubbleGroup/HeatmapGroup/HeatmapGroup';
import { LineGraphGroup } from './LineGraphGroup/LineGraphGroup';

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

    const { hourGroupWidth, hourGroupHeight, lineGraphWidth, lineGraphHeight, rectWidth } =
        getHourGroupWidth(width);

    const widthScale = getWidthScale(rectWidth);

    const lineGraphYScale = getLineGraphYScale(lineGraphHeight);

    return (
        <>
            <div
                className={classNames(
                    'h-full transition-all duration-1000 p-4 text-gray-50 font-inconsolata-regular',
                    { 'opacity-0': !isLoaded },
                )}
            >
                <div className="flex flex-col bg-chart-gray h-full rounded-md">
                    <GraphHeader headerName="Heatmap" />
                    <div className="flex-grow p-4" ref={parentRef}>
                        <svg width="100%" height="100%" id="map-svg">
                            <HeatmapGroup
                                hourGroupWidth={hourGroupWidth}
                                plotData={plotData}
                                colorScale={heatmapColorScale}
                                widthScale={widthScale}
                                rectWidth={rectWidth}
                            />
                            <LineGraphGroup
                                hourGroupWidth={hourGroupWidth}
                                hourGroupHeight={hourGroupHeight}
                                lineGraphWidth={lineGraphWidth}
                                lineGraphHeight={lineGraphHeight}
                                plotData={plotData}
                                lineGraphYScale={lineGraphYScale}
                                colorScale={heatmapColorScale}
                                barWidth={rectWidth}
                            />
                            {/* <BubbleGroup
                                hourGroupWidth={hourGroupWidth}
                                hourGroupHeight={hourGroupHeight}
                                lineGraphWidth={lineGraphWidth}
                                lineGraphHeight={lineGraphHeight}
                                plotData={plotData}
                                lineGraphYScale={lineGraphYScale}
                                colorScale={heatmapColorScale}
                                barWidth={rectWidth}
                            /> */}
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};
