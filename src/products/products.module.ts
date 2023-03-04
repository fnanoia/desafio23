import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Products, ProductsSchema } from './schema/products.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      //importo los schemas, puedo pasar mas de un objeto
      {
        name: Products.name,
        schema: ProductsSchema,
      },
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
