
import { Entity } from "../../../../types/entity";

export type order = Entity<number> & {
    name: string;
    price: number;
    quantity: number;
    totalPrice: number;
}
