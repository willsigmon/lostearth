export type LayerCategory =
  | "satellite"
  | "historical"
  | "ocean"
  | "annotation"
  | "context";

export type LayerConfig = {
  id: string;
  name: string;
  category: LayerCategory;
  description?: string;
  dateAware?: boolean;
  defaultOpacity?: number;
  defaultEnabled?: boolean;
  tileUrl?: string;
  attribution?: string;
};
