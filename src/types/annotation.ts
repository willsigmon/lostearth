export type AnnotationCategory =
  | "anomaly"
  | "wreckage"
  | "structure"
  | "natural_feature"
  | "artifact"
  | "other";

export type ConfidenceLevel =
  | "certain"
  | "likely"
  | "uncertain"
  | "speculative";

export type Annotation = {
  id: string;
  mystery_id: string;
  user_id: string;
  geometry: GeoJSON.Geometry;
  title: string;
  description?: string;
  category: AnnotationCategory;
  confidence: ConfidenceLevel;
  vote_score: number;
  status: "active" | "flagged" | "removed";
  created_at: string;
  updated_at: string;
};
