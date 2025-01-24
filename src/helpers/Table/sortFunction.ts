import type { IClient } from "@/entities/client/types";

export const sortFunction = (field: "fullName" | "dateCreated" | "dateUpdated") => (a: IClient, b: IClient) => {
  if (field === "fullName") return a[field].localeCompare(b[field]);

  if (a[field] < b[field]) return -1;
  if (a[field] > b[field]) return 1;
  return 0;
};
