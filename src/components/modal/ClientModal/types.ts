import type { IClient } from "@/entities/client/types";

export interface Props {
  isVisible: boolean;
  clientData: IClient | undefined;
}

export interface Emits {
  (e: "close"): void;
}
