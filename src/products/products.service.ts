import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Products, ProductsDocument } from './schema/products.schema';

@Injectable()
export class ProductsService {
  //inyeccion del modelo, tipado con el documento y las propiedades. definido en el schema
  constructor(@InjectModel(Products.name) private productsModel: Model<any>) {}

  async create(createProductDto: CreateProductDto): Promise<any> {
    const product = await this.productsModel.create(createProductDto);
    return { message: 'product created successfully', product };
  }

  async findAll(): Promise<ProductsDocument[]> {
    const products = await this.productsModel.find();
    return products;
  }

  async findOne(id: string): Promise<ProductsDocument> {
    const product = await this.productsModel.findOne({ _id: id });
    return product;
  }

  async updateOne(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<any> {
    const productFound = await this.findOne(id);
    if (!productFound) {
      throw new NotFoundException({ message: 'product not found' });
    }

    const product = await this.productsModel.findOneAndUpdate(
      { _id: id },
      updateProductDto,
      { new: true },
    );
    return { message: 'product updated successfully', product };
  }

  async deleteOne(id: string): Promise<any> {
    const product = await this.productsModel.findOneAndDelete({ _id: id });
    if (!product) {
      throw new NotFoundException({ message: 'product not found' });
    }
    return { message: 'product deleted successfully', product };
  }
}
