import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DemoService } from './demo.service';
import { DemoController } from './demo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Demo } from './entities/demo.entity';
import { typeOrmConfigAsync } from '../config/typeorm.config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
    }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    TypeOrmModule.forFeature([Demo]),
  ],
  controllers: [DemoController],
  providers: [DemoService],
})
export class DemoModule {}
