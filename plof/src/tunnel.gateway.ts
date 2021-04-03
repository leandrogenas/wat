import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway(80)
export class TunnelGateway {

  @SubscribeMessage('message')
  handleMessage(
    @MessageBody() payload: string,
    @ConnectedSocket() client: Socket
  ): string 
  {
    return 'Hello world!';
  }

}
