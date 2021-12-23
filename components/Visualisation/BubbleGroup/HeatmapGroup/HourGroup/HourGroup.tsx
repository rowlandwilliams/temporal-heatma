import { ScaleLinear } from 'd3-scale';
import React from 'react';
import { TenMinuteColumn } from './TenMinuteColumn/TenMinuteColumn';

interface Props {
    x: number;
    y: number;
    index: number;
    gridData: number[];
    colorScale: ScaleLinear<number, number, never>;
    widthScale: ScaleLinear<number, number, never>;
    rectWidth: number;
}

const nCellsPerRow = 6;
const nCellsPerColumn = 10;

export const HourGroup = ({ x, y, index, gridData, colorScale, rectWidth, widthScale }: Props) => {
    return (
        <g
            transform={`translate(${x}, ${y})`}
            className="stroke-current text-chart-gray stroke-1 md:stroke-2"
        >
            <g transform={`translate(0, ${y / 4})`}>
                {[...Array(nCellsPerRow)].map((minute, i) => (
                    <TenMinuteColumn
                        rectWidth={rectWidth}
                        colData={gridData.slice(
                            i * nCellsPerColumn,
                            i * nCellsPerColumn + nCellsPerColumn,
                        )}
                        xTransform={i * rectWidth}
                        key={Math.random()}
                        colorScale={colorScale}
                        widthScale={widthScale}
                    />
                ))}
            </g>

            <text className="text-xs fill-current text-white stroke-0 opacity-80">
                {index < 10 ? `0${index}` : index}
            </text>
        </g>
    );
};
