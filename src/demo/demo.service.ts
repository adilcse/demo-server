import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDemoDto } from './dto/create-demo.dto';
import { UpdateDemoDto } from './dto/update-demo.dto';
import { Demo } from './entities/demo.entity';

@Injectable()
export class DemoService {
  constructor(
    @InjectRepository(Demo)
    private readonly demoRepo: Repository<Demo>,
  ) {}
  create(createDemoDto: CreateDemoDto) {
    const demo = new Demo();
    demo.name = createDemoDto.name;
    demo.catagory = createDemoDto.catagory;
    demo.type = createDemoDto.type;
    return this.demoRepo.save(demo);
  }

  findAll() {
    return this.demoRepo.find();
  }

  async findOne(id: number) {
    const demo = await this.demoRepo.findOne({
      where: { id },
    });
    if (!demo) {
      throw new NotFoundException('Demo not found');
    }
    return demo;
  }

  async update(id: number, updateDemoDto: UpdateDemoDto) {
    const demo = await this.demoRepo.findOne({
      where: { id },
    });
    if (!demo) {
      throw new NotFoundException('Demo not found');
    }
    if (updateDemoDto.name) {
      demo.name = updateDemoDto.name;
    }
    if (updateDemoDto.catagory) {
      demo.catagory = updateDemoDto.catagory;
    }
    if (updateDemoDto.type) {
      demo.type = updateDemoDto.type;
    }
    return await this.demoRepo.save(demo);
  }

  async remove(id: number) {
    const demo = await this.demoRepo.findOne({
      where: { id },
    });
    if (!demo) {
      throw new NotFoundException('Demo not found');
    }
    return await this.demoRepo.remove(demo);
  }
}
