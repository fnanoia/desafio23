import { ProductsDocument } from '../../products/schema/products.schema';

//relacion con Products
export interface ICart {
  products: ProductsDocument['_id'];
}
