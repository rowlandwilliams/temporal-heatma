import classNames from 'classnames';
import { useStore } from '../../../store/store';
import { formatTooltipValue } from '../utils/general';
import { sankeyMargin } from '../utils/plot';

export const SankeyLinkTooltip = () => {
    const { linkIsHovered, linkTooltipData } = useStore();
    const { x, y, sourceProvince, targetProvince, linkValue } = linkTooltipData;

    return (
        <div
            className={classNames(
                'absolute bg-gray-900 text-xs shadow-lg p-2 pointer-events-none transform ',
                {
                    hidden: !linkIsHovered,
                },
            )}
            style={{
                left: x,
                top: y + sankeyMargin.top - 50,
            }}
        >
            <div className="flex">
                <div>{sourceProvince}</div>
                <div className="px-1">{'>'}</div>
                <div>{targetProvince}</div>
            </div>
            <div className="flex items-end pt-2">
                <div>{formatTooltipValue(linkValue)}</div>
                <div className="text-2xs text-gray-400 ml-1">PEOPLE</div>
            </div>
        </div>
    );
};
