import { Module } from '@nestjs/common';
import { EmployeesMeetingsService } from './employees_meetings.service';
import { EmployeesMeetingsController } from './employees_meetings.controller';

@Module({
  controllers: [EmployeesMeetingsController],
  providers: [EmployeesMeetingsService]
})
export class EmployeesMeetingsModule {}
