import { Test, TestingModule } from '@nestjs/testing';
import { UiController } from './ui.controller';
import { UiService } from './ui.service';

describe('UiController', () => {
  let uiController: UiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UiController],
      providers: [UiService],
    }).compile();

    uiController = app.get<UiController>(UiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(uiController.getHello()).toBe('Hello World!');
    });
  });
});
