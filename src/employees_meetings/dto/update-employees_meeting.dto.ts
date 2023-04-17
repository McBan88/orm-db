import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeesMeetingDto } from './create-employees_meeting.dto';

export class UpdateEmployeesMeetingDto extends PartialType(CreateEmployeesMeetingDto) {}
