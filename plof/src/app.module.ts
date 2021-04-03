import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisModule } from './redis/redis.module';
import { TunnelGateway } from './tunnel.gateway';

@Module({
  imports: [
    RedisModule,
    ClientsModule.register([
      {
        name: 'REDIS', 
        transport: Transport.REDIS, 
        options: {
          url: 'redis://localhost:6379'
        }
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService, TunnelGateway],
})
export class AppModule {}
