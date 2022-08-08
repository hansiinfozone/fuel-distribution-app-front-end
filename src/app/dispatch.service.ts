import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dispatch } from './dispatch';
import { Order } from './order'

@Injectable({
  providedIn: 'root'
})
export class DispatchService {

  private dispatchfUrl: string;
  referenceNumber: string;

  constructor(private http: HttpClient) {
    this.dispatchfUrl = "http://localhost:8087/dispatch/update";
    this.referenceNumber = "";
  }

updateDispatch(referenceNumber:String): Observable<Object> {
  return this.http.put(`${this.dispatchfUrl}/?referenceNumber=`, referenceNumber);
  }

 
}
