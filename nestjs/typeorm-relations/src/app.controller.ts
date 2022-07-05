import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Employee } from './employee.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<Employee> {
    // await this.appService.init();
    return this.appService.getEmployeeById(2);
  }
}
