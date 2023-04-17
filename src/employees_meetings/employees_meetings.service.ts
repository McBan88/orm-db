import { Injectable } from '@nestjs/common';
import { CreateEmployeesMeetingDto } from './dto/create-employees_meeting.dto';
import { UpdateEmployeesMeetingDto } from './dto/update-employees_meeting.dto';

@Injectable()
export class EmployeesMeetingsService {
  create(createEmployeesMeetingDto: CreateEmployeesMeetingDto) {
    return 'This action adds a new employeesMeeting';
  }

  findAll() {
    return `This action returns all employeesMeetings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employeesMeeting`;
  }

  update(id: number, updateEmployeesMeetingDto: UpdateEmployeesMeetingDto) {
    return `This action updates a #${id} employeesMeeting`;
  }

  remove(id: number) {
    return `This action removes a #${id} employeesMeeting`;
  }
}
