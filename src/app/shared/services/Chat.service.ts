import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, throwError } from 'rxjs';
import { Message } from '../../../model/Message';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { HttpClient, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';
import { element } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  user: any = {}
  constructor(private http: HttpClient, private socket: Socket, private authService: NbAuthService) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable 
        }
      });


  }

  public sendMessage(message) {
    if (this.user.user.username > message.user.receiver) {
      this.socket.emit(this.user.user.username + "-" + message.user.receiver, message);

    } else {
      this.socket.emit(message.user.receiver + "-" + this.user.user.username, message);
    }
  }

  public getLiveMessage = (contacts): Observable<any> => {   
    return Observable.create((observer) => {
      contacts.forEach(element => {
        let chatbetweem = ""
        if (this.user.user.username > element) {
          chatbetweem = this.user.user.username + "-" + element
        } else {
          chatbetweem = element + "-" + this.user.user.username
        }
        this.socket.on(chatbetweem, (message) => {
          observer.next(message);
        });
      })
    });
  }

  getMessages(contactID,user) {
    let url ="http://localhost:4445/user/chat/"+contactID+"/"+user
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
