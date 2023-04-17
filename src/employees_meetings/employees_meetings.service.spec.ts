import { Test, TestingModule } from '@nestjs/testing';
import { EmployeesMeetingsService } from './employees_meetings.service';

describe('EmployeesMeetingsService', () => {
  let service: EmployeesMeetingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeesMeetingsService],
    }).compile();

    service = module.get<EmployeesMeetingsService>(EmployeesMeetingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
