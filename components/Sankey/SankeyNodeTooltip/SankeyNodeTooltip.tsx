import { useStore } from '../../../store/store';
import classNames from 'classnames';
import { sankeyMargin } from '../utils/plot';
import { formatTooltipValue, getLeftValueBasedOnNodePosition } from './utils/utils';

export const SankeyNodeTooltip = () => {
    const { nodeIsHovered, nodeTooltipData } = useStore();

    const { x, y, province, nodeColor, nodeSum, nodePercentage } = nodeTooltipData;

    const getToOrFromIfNodeIsLeftOrRight = (xCoord: number) => {
        return xCoord > 0 ? 'TO' : 'FROM';
    };

    const direction = getToOrFromIfNodeIsLeftOrRight(x);
    return (
        <div
            className={classNames('absolute bg-white text-xs shadow-lg', {
                hidden: !nodeIsHovered,
                'transform -translate-x-full': x > 0,
            })}
            style={{
                left: getLeftValueBasedOnNodePosition(x),
                top: y + sankeyMargin.top,
            }}
        >
            <div className="p-2 font-medium text-gray-50" style={{ backgroundColor: nodeColor }}>
                {province}
            </div>
            <div className="p-2 ">
                <div className="flex items-end">
                    <div className="text-gray-700 text-base mr-1">
                        {nodeSum && formatTooltipValue(nodeSum)}
                    </div>
                    <div className="text-2xs text-gray-400">PEOPLE</div>
                </div>
                <div className="text-2xs text-gray-400">
                    <div>
                        MIGRATED {direction}{' '}
                        <span className="text-gray-700">{province && province.toUpperCase()}</span>
                    </div>
                    <div>BETWEEN 2005 AND 2010</div>
                    <div>ACCOUNTING FOR {nodePercentage}% OF TOTAL</div>
                </div>
            </div>
        </div>
    );
};
