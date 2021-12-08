import { useEffect, useRef, useState } from 'react';
import { southAfricaRaw } from './data/southAfrica/southAfricaRaw';
import { getSankeyDataFromRaw } from './utils/data-processing';
import { southAfricaProvinces } from './data/southAfrica/provinces';
import { getSankeyGenerator, sankeyMargin } from './utils/plot';
import { debounce } from 'lodash';
import { SankeyLinks } from './SankeyLinks/SankeyLinks';
import { SankeyNodes } from './SankeyNodes/SankeyNodes';
import { SankeyNodeTooltip } from './SankeyNodeTooltip/SankeyNodeTooltip';

const sankeyData = getSankeyDataFromRaw(southAfricaRaw, southAfricaProvinces);

const Sankey = () => {
    const parentRef = useRef<HTMLDivElement>(null);
    const [parentWidth, setParentWidth] = useState(0);
    const [parentHeight, setParentHeight] = useState(0);

    const handleWindowResize = debounce((current: HTMLDivElement) => {
        setParentWidth(current.offsetWidth);
        setParentHeight(current.offsetHeight);
    }, 100);

    useEffect(() => {
        const { current } = parentRef;

        if (current) {
            handleWindowResize(current);
            const setResize = () => handleWindowResize(current);
            window.addEventListener('resize', setResize);
            return () => window.removeEventListener('resize', setResize);
        }
    }, [parentHeight, parentWidth, handleWindowResize]);

    // generate nodes and links from data
    const { nodes, links } = getSankeyGenerator(parentWidth, parentHeight, sankeyData);
    return (
        <div className="bg-gray-50 w-full h-screen" ref={parentRef}>
            <svg width={parentWidth} height={parentHeight}>
                <g transform={`translate(${sankeyMargin.left}, ${sankeyMargin.top})`}>
                    <SankeyLinks links={links} />
                    <SankeyNodes nodes={nodes} />
                </g>
            </svg>
            <SankeyNodeTooltip />
        </div>
    );
};

export default Sankey;
