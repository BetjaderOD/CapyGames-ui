import { Entity } from "../../../../types/entity";

export type Game = Entity<number> & {
    game_id?: number;
    game_name: string;
    game_genre: string;
    game_price: number;
    game_image: string;
    game_description: string;
    game_stock: number;
};

