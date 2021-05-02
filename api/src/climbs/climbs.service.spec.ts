import { Test, TestingModule } from '@nestjs/testing';
import { ClimbsService } from './climbs.service';

describe('ClimbsService', () => {
  let service: ClimbsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClimbsService],
    }).compile();

    service = module.get<ClimbsService>(ClimbsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
