import classNames from 'classnames';
import { useStore } from '../../../store/store';
import { sankeyMargin } from '../utils/plot';

export const SankeyLinkTooltip = () => {
    const { linkIsHovered, linkTooltipData } = useStore();
    const { x, y, sourceProvince, targetProvince } = linkTooltipData;

    return (
        <div
            className={classNames(
                'absolute bg-white text-xs shadow-lg p-2 pointer-events-none transform ',
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
        </div>
    );
};
