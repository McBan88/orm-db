import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { EmployeesModule } from './employees/employees.module';
import { CompaniesModule } from './companies/companies.module';
import { MeetingsModule } from './meetings/meetings.module';
import { EmployeesMeetingsModule } from './employees_meetings/employees_meetings.module';

@Module({
  imports: [CarsModule, EmployeesModule, CompaniesModule, MeetingsModule, EmployeesMeetingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
