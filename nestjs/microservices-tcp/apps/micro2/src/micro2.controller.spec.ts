import { Test, TestingModule } from '@nestjs/testing';
import { Micro2Controller } from './micro2.controller';
import { Micro2Service } from './micro2.service';

describe('Micro2Controller', () => {
  let micro2Controller: Micro2Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Micro2Controller],
      providers: [Micro2Service],
    }).compile();

    micro2Controller = app.get<Micro2Controller>(Micro2Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(micro2Controller.getHello()).toBe('Hello World!');
    });
  });
});
