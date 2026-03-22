export type ClueSource = "reddit" | "wikipedia" | "hn";

export type Clue = {
  id: string;
  mystery_id: string;
  source: ClueSource;
  external_id: string;
  title?: string;
  url?: string;
  body_preview?: string;
  lat?: number;
  lng?: number;
  metadata: Record<string, unknown>;
  fetched_at: string;
};

export type RedditClueMetadata = {
  subreddit: string;
  score: number;
  author: string;
  num_comments: number;
  created_utc: number;
};

export type WikiClueMetadata = {
  pageid: number;
  distance: number;
  thumbnail?: string;
};

export type HNClueMetadata = {
  points: number;
  author: string;
  num_comments: number;
};
