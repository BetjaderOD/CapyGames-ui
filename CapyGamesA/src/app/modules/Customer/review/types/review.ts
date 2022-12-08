import { Entity } from "../../../../types/entity";

export type Review = Entity<number> & {
  date: string;
  title: string;
  description: string;
  rating: number;
};
