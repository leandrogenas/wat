import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  

  @MessagePattern({ cmd: 'ping' })
  processPing()
  {
    return "pongue";
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
