import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<any>) {}

  async create(createUserDto: CreateUserDto): Promise<any> {
    try {
      const user = await this.userModel.create(createUserDto);

      return user;
    } catch (err: any) {
      throw new BadRequestException(err);
    }
  }

  async findAll(): Promise<UserDocument[]> {
    try {
      const users = await this.userModel.find();

      return users;
    } catch (err: any) {
      throw new BadRequestException({ message: 'no users available' }, err);
    }
  }

  async findOne(id: string): Promise<UserDocument> {
    try {
      const user = await this.userModel.findOne({_id: id});

      return user;
    } catch (err: any) {
      throw new NotFoundException({ message: 'user not found' }, err);
    }
  }

  updateOne(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  deleteOne(id: string) {
    return `This action removes a #${id} user`;
  }
}
