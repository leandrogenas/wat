import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @Inject('REDIS')
    private readonly client: ClientProxy,
    private readonly appService: AppService
  )
  { }

  @Get('/ping')
  broadcastPing(): any
  {
    return this.client.send({ cmd: 'ping' }, { modulo: 'plof' })
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
