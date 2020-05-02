import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket){ }
public sendMessage(message) {
  this.socket.emit(message.sender, message);
}
public getLiveMessage = (user:any) => {
  return Observable.create((observer) => {
    this.socket.on(user.username, (message) => {
      observer.next(message);
    });
  });
}
getMessages() {

}
}
