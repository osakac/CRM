export interface Props {
  isVisible: boolean;
  onClose: () => void;
}

export interface Emits {
  (event: "close"): void;
}
