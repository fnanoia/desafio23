import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

//Se re utiliza el DTO de CreateProductDTO y utiliza sus propiedades de forma opcional
export class UpdateProductDto extends PartialType(CreateProductDto) {}
