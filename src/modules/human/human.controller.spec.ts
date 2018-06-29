import { Test, TestingModule } from '@nestjs/testing';
import { HumanController } from './human.controller';

describe('Human Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [HumanController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: HumanController = module.get<HumanController>(HumanController);
    expect(controller).toBeDefined();
  });
});
