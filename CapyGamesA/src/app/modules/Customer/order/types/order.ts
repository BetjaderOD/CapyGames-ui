
import { Entity } from "../../../../types/entity";

export type Order = Entity<number> & {
    name: string;
    price: number;
    quantity: number;
    totalPrice: number;
}
