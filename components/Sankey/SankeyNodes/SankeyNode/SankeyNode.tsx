interface Props {
  name?: string;
  x0?: number | undefined;
  x1?: number | undefined;
  y0?: number | undefined;
  y1?: number | undefined;
  color: string;
}

export const SankeyNode = ({ name, x0, x1, y0, y1, color }: Props) => (
  <rect
    x={x0}
    y={y0}
    width={(x1 as number) - (x0 as number)}
    height={(y1 as number) - (y0 as number)}
    fill={color}
  >
    <title>{name}</title>
  </rect>
);
