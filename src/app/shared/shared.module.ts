import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
// import { NbChatModule,NbChat} from '@nebular/theme';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import {ChatService} from '../shared/services/Chat.service'
import { ChatComponent } from './Chat/Chat.component';
const config: SocketIoConfig = { url: 'http://localhost:4445/user/chat/start', options: {} };
@NgModule({
  imports: [
    CommonModule,
    SocketIoModule.forRoot(config),
  ],
  declarations: [
    SharedComponent,
    //NbChatComponent
  ],
  providers:[
    ChatService
  ],
  exports:[]
})
export class SharedModule { }
