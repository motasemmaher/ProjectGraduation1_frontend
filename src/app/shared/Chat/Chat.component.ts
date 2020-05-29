import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChatService } from '../services/Chat.service';
// import { Message } from '../../../model/Message';
import { Socket } from 'ngx-socket-io';
import { element } from 'protractor';

@Component({
  selector: 'app-Chat',
  templateUrl: './Chat.component.html',
  styleUrls: ['./Chat.component.css']
})
export class ChatComponent implements OnInit, OnChanges {
  @Input() contact: { name: string, title: string, id: string };
  @Input() ContactsList: any[];
  @Input() user: any;
  messages: any = [];
  constructor(private chat: ChatService) {
  }
  ngOnChanges(changes: SimpleChanges) {
    // try{
      if(changes.contact?.previousValue?.id != changes.contact?.currentValue?.id){
        this.getMessages();
      }
    // }catch(e){}

    // changes.prop contains the old and the new value...
  }
  ngOnInit() {
    this.chat.getLiveMessage(this.ContactsList, this.user).subscribe((message) => {
      this.messages.push(message)
    })
    this.getMessages();
  }
  getMessages() {
    this.chat.getMessages(this.user.id, this.contact.id).subscribe((ele: any) => {
      if (ele != null) {
        let msg:[] = ele.messages
        this.messages = []
        msg.forEach((element: any) => {
          this.messages.push(
            {
              text: element.text,
              date: new Date(),
              files: element.files,
              reply: element.user.name == this.user.username ? true : false,

              user: {
                name: element.user.name,
                avatar: element.user.avatar,
                receiver: element.user.receiver,
                sender:this.user.id

              }

            })
        });
      }
    })
  }
  sendMessage(event: any) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });

    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: !event.reply,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: this.user.username,
        avatar: 'https://i.gifer.com/no.gif',
        receiver: this.contact.id,
        sender:this.user.id

      },
    });
    this.chat.sendMessage({
      text: event.message,
      date: new Date(),
      reply: this.contact.name == this.user.username ? true : false,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: this.user.username,
        avatar: 'https://i.gifer.com/no.gif',
        receiver: this.contact.id,
        sender:this.user.id
      },
    }, this.user.id, this.contact.id)
  }
}
