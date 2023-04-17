import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Meeting {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  city: string;
}
