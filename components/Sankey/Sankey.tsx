import { useEffect, useRef, useState } from 'react';
import { southAfricaRaw } from './data/southAfrica/southAfricaRaw';
import { getSankeyDataFromRaw } from './utils/data-processing';
import { southAfricaProvinces } from './data/southAfrica/provinces';
import { getSankeyGenerator } from './utils/plot';
import { debounce } from 'lodash';
import { SankeyNodeTooltip } from './SankeyNodeTooltip/SankeyNodeTooltip';
import { TransformedLink } from '../../types/types';
import { SankeySvg } from './SankeySvg/SankeySvg';
import { SankeyLinkTooltip } from './SankeyLinkTooltip/SankeyLinkTooltip';

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
        <div className="relative flex-grow " ref={parentRef}>
            <div className=" w-full h-full">
                <SankeySvg links={links as TransformedLink[]} nodes={nodes} />
                <SankeyNodeTooltip />
                <SankeyLinkTooltip />
            </div>
        </div>
    );
};

export default Sankey;
