import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Cart } from 'src/cart/schema/cart.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  //relacion con entidad cart. cada user tiene un unico cart asociado
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Cart' })
  cart: Cart
}

export const UserSchema = SchemaFactory.createForClass(User);
