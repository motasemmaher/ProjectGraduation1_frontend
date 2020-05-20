import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';
import { Session } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class StoreApiService {

  baseUrl = "http://localhost:4445"
  constructor(private http: HttpClient) { }


  createGarageOwner(user: any, store: any) {
    return this.http.post(`${this.baseUrl}/user/garage-owner/create`, { user: user, store: store }).pipe(catchError(this.error))

  }

  getStoreInfo(storeId) {
    return this.http.get(`${this.baseUrl}/store/${storeId}`).pipe(catchError(this.error))
  }

  createContact(userId, userName, storeId, storeName,token) {
    return this.http.post(`${this.baseUrl}/user/v-contact/${userId}`, { storeId: storeId, storeName: storeName, userName: userName },{headers:{
      Authorization: `Bearer ${token}`,
    }}).pipe(catchError(this.error))
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
