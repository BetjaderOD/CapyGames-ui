import {Entity} from "../../../../types/entity";


export type Cart = Entity<number> & {
customer_id: number;
game_id: number;
cart_quantity: number;
}
