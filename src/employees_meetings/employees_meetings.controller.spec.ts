import { Test, TestingModule } from '@nestjs/testing';
import { EmployeesMeetingsController } from './employees_meetings.controller';
import { EmployeesMeetingsService } from './employees_meetings.service';

describe('EmployeesMeetingsController', () => {
  let controller: EmployeesMeetingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeesMeetingsController],
      providers: [EmployeesMeetingsService],
    }).compile();

    controller = module.get<EmployeesMeetingsController>(EmployeesMeetingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
