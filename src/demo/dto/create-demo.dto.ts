import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Category } from '../entities/demo.entity';

export class CreateDemoDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  catagory: Category;

  @ApiProperty()
  @IsString()
  type: string;
}
