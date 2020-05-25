import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  bodyData;
  oneAPIUrl = 'https://api.s0.t.hmny.io';
  constructor(private http: HttpClient) { }

  getValidatorDetails(oneAddress)
  {    
    this.bodyData = {
      "jsonrpc":"2.0",
      "method":"hmyv2_getValidatorInformation",
      "params":[
        oneAddress
      ],
      "id":1
    }
    return this.http.post(this.oneAPIUrl, this.bodyData)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
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
      'Something bad happened; please try again later.');
  };

}
