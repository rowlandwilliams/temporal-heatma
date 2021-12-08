import { numberWithCommas } from '../../../../utils/general';

export const formatTooltipValue = (value: number) => {
    return numberWithCommas(Math.floor(value)).replace('.00', '');
};
