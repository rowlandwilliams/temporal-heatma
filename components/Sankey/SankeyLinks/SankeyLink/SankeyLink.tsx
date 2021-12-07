import { sankeyLinkHorizontal, SankeyLinkMinimal } from "d3-sankey";

interface Props {
  link: SankeyLinkMinimal<{}, {}>;
  color: string;
}

export const SankeyLink = ({ link, color }: Props) => (
  <path
    className="opacity-30 hover:opacity-100 stroke-current text-purple-300"
    d={sankeyLinkHorizontal()(link) as string}
    style={{
      fill: "none",
      strokeWidth: Math.max(1, link.width as number),
    }}
  />
);
