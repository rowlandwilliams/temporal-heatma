import { SankeyLinkMinimal } from "d3-sankey";
import { SankeyLink } from "./SankeyLink/SankeyLink";

interface Props {
  links: SankeyLinkMinimal<{}, {}>[];
}

export const SankeyLinks = ({ links }: Props) => {
  return (
    <g id="links">
      {links.map((link, i) => (
        <SankeyLink link={link} color={"grey"} key={link.value} />
      ))}
    </g>
  );
};
