import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Location } from '@angular/common';
import { Router } from '@angular/router'
import { NbAuthService, } from '@nebular/auth';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  isLogin = false

  constructor(private http: HttpClient) {
  }
  url = "http://localhost:4445/user/"

  getContact(ownusernameId: string): Observable<any> {
    return this.http.get(this.url + "v-contact/" + ownusernameId).pipe(catchError(this.error))
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
