export type MysteryStatus = "active" | "archived" | "solved";

export type KnownFact = {
  date: string;
  fact: string;
  source_url?: string;
};

export type TimelineEvent = {
  date: string;
  event: string;
  lat?: number;
  lng?: number;
  source?: string;
};

export type Mystery = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  known_facts: KnownFact[];
  search_zone?: GeoJSON.Polygon;
  center_lat: number;
  center_lng: number;
  default_zoom: number;
  default_layers: string[];
  timeline: TimelineEvent[];
  reddit_subreddits: string[];
  reddit_keywords: string[];
  status: MysteryStatus;
  image_url?: string;
  created_at: string;
  updated_at: string;
};
