import React, { useState } from 'react';

interface Props {
    barWidth: number;
    barHeight: number;
    x: number;
    y: number;
    barColorOnHover: string;
}

export const HourlyBarChartRect = ({ barWidth, barHeight, x, y, barColorOnHover }: Props) => {
    const [isHovered, setIsHovered] = useState(false);

    console.log(isHovered);
    return (
        <rect
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            width={barWidth}
            height={barHeight}
            x={x}
            y={y}
            stroke="#1D2025"
            rx="3"
            className="cursor-pointer"
            fill={isHovered ? barColorOnHover : '#2A2D36'}
        />
    );
};
