import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../services/Chat.service';
import { Message } from '../../../model/Message';
import { Socket } from 'ngx-socket-io';
import { element } from 'protractor';

@Component({
  selector: 'app-Chat',
  templateUrl: './Chat.component.html',
  styleUrls: ['./Chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input() contact: { name: string, title: string };
  @Input() ContactsList: [];
  @Input() username: string;

  messages: any = [];
  constructor(private chat: ChatService) {

  }

  ngOnInit() {
    this.chat.getLiveMessage(this.ContactsList).subscribe((message) => {
      console.log(message)
      this.messages.push(message)
    })
    this.chat.getMessages(this.username, this.contact.name).subscribe((ele:any) => {
      let msg:[] = ele.messages
     // console.log(ele.messages)
     msg.forEach((element:any) => {
        this.messages.push(
          {
            text: element.text,
            date: new Date(),
            files: element.files,
            user: {
              name: element.user.name,
              avatar: element.user.avatar,
            }
  
          })
      });
    })
  }
  setContact(contact: any) {

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
      reply: event.reply,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: this.contact.name,
      },
    });
    this.chat.sendMessage({
      text: event.message,
      date: new Date(),
      reply: false,
    //  type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: this.contact.name,
        avatar: 'https://i.gifer.com/no.gif',
      },
    })
  }
}
