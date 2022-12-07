import { Entity } from "../../../../types/entity";

export type Game = Entity<number> & {
    name: string;
    genre: string;
    price: number;
    image: string;
    description: string;
    stock: number;
};
