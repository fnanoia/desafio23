import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Cart } from 'src/cart/schema/cart.schema';
import { IProduct } from '../interface/products.interface';

export type ProductsDocument = HydratedDocument<Products>;

//con la Interface me aseguro que el schema se cree con las propiedades correctas
@Schema()
export class Products implements IProduct{
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  // #### IMPLEMENTAR #### 
  //relacion con entidad cart. un producto puede pertenecer a mas de un cart en simultaneo
  /*

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cart' }] })
  cart?: Cart[];

  */

}

export const ProductsSchema = SchemaFactory.createForClass(Products);
