import create from 'zustand';
import { NodeTooltip } from '../types/types';

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
