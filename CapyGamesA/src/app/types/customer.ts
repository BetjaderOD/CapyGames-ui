import { Entity } from './entity';

export type Customer = Entity<number> & {
  customer_id?: number;
  customer_name: string;
  customer_password: string;
  customer_email: string;
  customer_address: string;
  customer_phone: string;
};
