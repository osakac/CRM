import type { IClientContact } from "@/entities/client/types";
import type { FieldEntry } from "vee-validate";

export interface Props {
  fields: FieldEntry<IClientContact>[];
  remove: (idx: number) => void;
  push: (value: IClientContact) => void;
  replace: (newArray: IClientContact[]) => void;
  errors: any;
}
