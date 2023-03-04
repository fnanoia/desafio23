import { CartDocument } from 'src/cart/schema/cart.schema';

//relacion con Cart
export interface IProduct {
  title: string;
  description: string;
  price: number;
  //por el momento es opcional 
  cart?: CartDocument['_id'];
}
