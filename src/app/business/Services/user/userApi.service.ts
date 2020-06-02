import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UserApiService {
  isLogin = false;
  url = 'http://localhost:4445/user/';

  constructor(private http: HttpClient) {
  }

  getContact(ownusernameId: string): Observable<any> {
    return this.http.get(this.url + 'contact/get/' + ownusernameId).pipe(catchError(this.error));
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
