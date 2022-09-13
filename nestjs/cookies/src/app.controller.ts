import { Controller, Get, Req, Res, Param } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/colors/:color')
  setColor(
    @Param('color') color: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    response.cookie('color', color);
  }

  @Get('/colors')
  getColor(@Req() request: Request) {
    return request.cookies['color'];
  }
}
