import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, throwError } from 'rxjs';
import { Message } from '../../../model/Message';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private http: HttpClient, private socket: Socket) {
  }

  public sendMessage(message,userId,contactID) {
    if (userId > contactID) {
      this.socket.emit(userId + "-" + contactID, message);
    } else {
      this.socket.emit(contactID + "-" + userId, message);
    }
  }

  public getLiveMessage = (contacts,user): Observable<any> => {  
    return Observable.create((observer) => {
      contacts.forEach(element => {
        let chatbetweem = ""
        if (user.id > element.id) {
          chatbetweem = user.id + "-" + element.id
        } else {
          chatbetweem = element.id + "-" + user.id
        }
        this.socket.on(chatbetweem, (message) => {
          observer.next(message);
        });
      })
    });
  }

  getMessages(userId,contactID) {
    let url ="http://localhost:4445/user/chat/"+userId+"/"+contactID
    return this.http.get(url)

  }
  private error(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try aga<  in later.');
  }
}


// url ="http://localhost:4445/user/v-contact/"

//   contacts = []
//   chat
//   this.getContact(this.user.user.username).subscribe(contacts=>{
//     let chatbetweem =""
//     contacts[0].username.forEach(element=>{
//         if(this.user.user.username > element){
//           chatbetweem = this.user.user.username +"-"+ element
//         }else {
//           chatbetweem = element +"-"+ this.user.user.username
//         }

//       this.contacts.push(chatbetweem)
//       this.contacts.push(chatbetweem)

//     })
//   })
//   getContact(ownusernameId:string):Observable<any>{
//      return this.http.get(this.url+ownusernameId).pipe(catchError(this.error))
//   }
