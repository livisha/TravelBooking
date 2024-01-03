import { Test, TestingModule } from '@nestjs/testing';
import { AirplaneController } from '../src/airplane/airplane.controller';
import { AirplaneService } from '../src/airplane/airplane.service';

describe('AirplaneController', () => {
  let controller: AirplaneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AirplaneController],
      providers: [AirplaneService],
    }).compile();

    controller = module.get<AirplaneController>(AirplaneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
