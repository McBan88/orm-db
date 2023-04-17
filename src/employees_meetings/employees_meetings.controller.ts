import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeesMeetingsService } from './employees_meetings.service';
import { CreateEmployeesMeetingDto } from './dto/create-employees_meeting.dto';
import { UpdateEmployeesMeetingDto } from './dto/update-employees_meeting.dto';

@Controller('employees-meetings')
export class EmployeesMeetingsController {
  constructor(private readonly employeesMeetingsService: EmployeesMeetingsService) {}

  @Post()
  create(@Body() createEmployeesMeetingDto: CreateEmployeesMeetingDto) {
    return this.employeesMeetingsService.create(createEmployeesMeetingDto);
  }

  @Get()
  findAll() {
    return this.employeesMeetingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesMeetingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeesMeetingDto: UpdateEmployeesMeetingDto) {
    return this.employeesMeetingsService.update(+id, updateEmployeesMeetingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesMeetingsService.remove(+id);
  }
}
