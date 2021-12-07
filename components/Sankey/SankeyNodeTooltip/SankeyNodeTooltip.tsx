import { useStore } from '../../../store/store';
import classNames from 'classnames';
import { sankeyMargin } from '../utils/plot';
import { getLeftValueBasedOnNodePosition } from './utils/utils';

export const SankeyNodeTooltip = () => {
    const { nodeIsHovered, nodeTooltipData } = useStore();

    const { x, y, province, nodeColor } = nodeTooltipData;

    return (
        <div
            className={classNames('absolute bg-white text-xs', {
                hidden: !nodeIsHovered,
                'transform -translate-x-full': x > 0,
            })}
            style={{
                left: getLeftValueBasedOnNodePosition(x),
                top: y + sankeyMargin.top,
            }}
        >
            <div className="p-2 font-medium" style={{ backgroundColor: nodeColor }}>
                {province}
            </div>
            <div>Value</div>
        </div>
    );
};
