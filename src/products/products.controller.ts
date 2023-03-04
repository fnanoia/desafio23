import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsDocument } from './schema/products.schema';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<any> {
    try {
      const product = await this.productsService.create(createProductDto);
      return product;
    } catch (error: any) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Error creating new product',
        },
        HttpStatus.BAD_REQUEST,
        { cause: error },
      );
    }
  }

  @Get()
  async findAll(): Promise<ProductsDocument[]> {
    try {
      const products = await this.productsService.findAll();
      return products;
    } catch (error: any) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Products not available',
        },
        HttpStatus.NOT_FOUND,
        { cause: error },
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductsDocument> {
    try {
      const product = await this.productsService.findOne(id);
      return product;
    } catch (error: any) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Product not available',
        },
        HttpStatus.NOT_FOUND,
        { cause: error },
      );
    }
  }

  @Put(':id')
  async updateOne(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<any> {
    try {
      const product = await this.productsService.updateOne(
        id,
        updateProductDto,
      );
      return product;
    } catch (error: any) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Error updating product',
        },
        HttpStatus.BAD_REQUEST,
        { cause: error },
      );
    }
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string): Promise<any> {
    try {
      const product = await this.productsService.deleteOne(id);
      return product;
    } catch (error: any) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Error deleting product',
        },
        HttpStatus.BAD_REQUEST,
        { cause: error },
      );
    }
  }
}
