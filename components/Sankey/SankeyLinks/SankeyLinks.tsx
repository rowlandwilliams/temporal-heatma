import { SankeyLinkMinimal } from 'd3-sankey';
import { SankeyLink } from './SankeyLink/SankeyLink';

interface Props {
    links: SankeyLinkMinimal<Record<string, never>, Record<string, never>>[];
}

export const SankeyLinks = ({ links }: Props) => {
    return (
        <g id="links">
            {links.map((link) => (
                <SankeyLink link={link} color={'grey'} key={link.value} />
            ))}
        </g>
    );
};
