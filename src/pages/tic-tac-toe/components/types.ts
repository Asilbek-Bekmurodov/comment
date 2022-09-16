export interface BoardProps {
  squares: string[];
  onSelect: (idx: number) => void;
}

export interface HistroyProps {
  histories: string[][];
  currentStep: number;
  onStep: (idx: number) => void;
}
