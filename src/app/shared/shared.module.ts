import { NgModule,Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
// import { NbChatModule,NbChat} from '@nebular/theme';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ChatService } from '../shared/services/Chat.service'
import { ChatComponent } from './Chat/Chat.component';
import { CardComponent } from './Card/Card.component';
import { FormsModule } from '@angular/forms';
import { NbChatModule, NbCardModule } from '@nebular/theme';
import {DescriptionPipe} from './pipes/description/description.pipe'

const config: SocketIoConfig = { url: 'http://localhost:4445/user/chat/start', options: {} };
@NgModule({
  imports: [
    CommonModule,
    SocketIoModule.forRoot(config),
    NbChatModule,
    NbCardModule,
    FormsModule
  ],
  declarations: [
    SharedComponent,
    ChatComponent,
    CardComponent,
    DescriptionPipe
  ],
  providers: [
    ChatService
  ],
  exports: [ChatComponent, CardComponent, CommonModule,FormsModule,NbCardModule]
})
export class SharedModule { }
