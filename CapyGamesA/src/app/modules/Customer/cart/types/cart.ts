import { Entity } from '../../../../types/entity';

export type Cart = Entity<number> & {
<<<<<<< HEAD
  cart_id?: number;
  customer_id?: number;
  game_id?: number;
  cart_quantity: number;
};
=======
 cart_id?: number;
customers_id: number;
game_id: number;
cart_quantity: number;
}
>>>>>>> addCart
