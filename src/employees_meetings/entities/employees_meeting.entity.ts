import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EmployeesMeeting {
    @PrimaryGeneratedColumn()
    meeting_id: number;
    @Column()
    employee_id: number;
}
