import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Category {
  GENERAL = 'GENERAL',
  ST = 'ST',
  SC = 'SC',
  OBC = 'OBC',
}

@Entity('demo')
export class Demo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: Category, default: Category.GENERAL })
  catagory: Category;

  @Column()
  type: string;
}
