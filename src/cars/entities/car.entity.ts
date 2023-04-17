import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  vin: number;
  @Column()
  employee_id: number;
}
