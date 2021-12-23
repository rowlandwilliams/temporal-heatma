import { nMinPerDay, nHoursPerDay, nMinPerHour, nCellsPerColumn, nCellsPerRow } from './numbers';

const generateDistribution = (nPoints: number) => {
    const final: number[] = [];

    for (let i = 0; i < nPoints; i += 1) {
        if (i === 0) final.push(0);
        else if (i < nPoints * 0.65) {
            const prevValue = final[i - 1];
            const current =
                Math.random() < 0.75 ? prevValue + Math.random() : prevValue - Math.random() * 2;
            final.push(current);
        } else {
            const prevValue = final[i - 1];
            const current =
                Math.random() > 0.75 ? prevValue + Math.random() : prevValue - Math.random();
            final.push(current);
        }
    }

    const addNoise = (x: number) => {
        return Math.random() < 0.35 ? x * Math.random() * 1.5 : x + Math.random();
    };

    return final.map((x) => (Math.random() < 0.85 ? x : addNoise(x))).map((num) => Math.abs(num));
};

export const plotData = generateDistribution(nMinPerDay);

const getBarData = () => {
    const hourData = [...Array(nHoursPerDay)].map((num, i) =>
        plotData.slice(i * nMinPerHour, i * nMinPerHour + nMinPerHour),
    );

    const hourDataSplit = hourData.map((hourArray) =>
        [...Array(nCellsPerRow)].map((suh, j) =>
            hourArray
                .slice(j * nCellsPerColumn, j * nCellsPerColumn + nCellsPerColumn)
                .reduce((a, b) => a + b, 0),
        ),
    );

    return hourDataSplit;
};

export const barData = getBarData();
