import create from 'zustand';

interface NodeTooltip {
    x: number;
    y: number;
    province: string;
    nodeColor: string;
    nodeSum: number;
}

interface SankeyState {
    nodeIsHovered: boolean;
    setNodeIsHovered: (nodeIsHovered: boolean) => void;
    nodeTooltipData: NodeTooltip;
    setNodeTooltipData: (nodeTooltipData: NodeTooltip) => void;
}

export const useStore = create<SankeyState>((set) => ({
    nodeIsHovered: false,
    setNodeIsHovered: (nodeIsHovered: boolean) => set({ nodeIsHovered }),
    nodeTooltipData: {} as NodeTooltip,
    setNodeTooltipData: (nodeTooltipData: NodeTooltip) => set({ nodeTooltipData }),
}));
