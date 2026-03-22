export type Comment = {
  id: string;
  mystery_id: string;
  user_id: string;
  annotation_id?: string;
  lat?: number;
  lng?: number;
  parent_id?: string;
  body: string;
  vote_score: number;
  created_at: string;
  updated_at: string;
};
