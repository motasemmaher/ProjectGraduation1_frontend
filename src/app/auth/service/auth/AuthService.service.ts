import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:4445/user';

  createGarageOwner(user: any, store: any) {
    return this.http.post(`${this.baseUrl}/garage-owner/create`, { user, store }).pipe(catchError(this.error));

  }
  createCarOwner(user: any, car: any) {
    return this.http.post(`${this.baseUrl}/car-owner/create`, { user, car }).pipe(catchError(this.error));

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
