import { Entity } from "../../../../types/entity";

export type Review = Entity<number> & {
  review_id?: number;
  game_id: number;
  review_date: string;
  review_title: string;
  review_description: string;
  review_rating: number;
};
