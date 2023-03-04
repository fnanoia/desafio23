import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Products } from 'src/products/schema/products.schema';
import { User } from 'src/user/schema/user.schema';

export type CartDocument = HydratedDocument<Cart>;

@Schema()
export class Cart {
  //relacion con entidad products. un cart puede tener mas de un product
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Products' }] })
  products: Products[];


  // #### IMPLEMENTAR #### 
  //relacion con entidad user, cada cart tiene un unico user asociado
  /*
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
  */ 
}

export const CartSchema = SchemaFactory.createForClass(Cart);
