import { Test, TestingModule } from '@nestjs/testing';
import { ClimbsController } from './climbs.controller';
import { ClimbsService } from './climbs.service';

describe('ClimbsController', () => {
  let controller: ClimbsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClimbsController],
      providers: [ClimbsService],
    }).compile();

    controller = module.get<ClimbsController>(ClimbsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
