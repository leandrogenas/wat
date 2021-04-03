import { Test, TestingModule } from '@nestjs/testing';
import { TunnelGateway } from './tunnel.gateway';

describe('TunnelGateway', () => {
  let gateway: TunnelGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TunnelGateway],
    }).compile();

    gateway = module.get<TunnelGateway>(TunnelGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
