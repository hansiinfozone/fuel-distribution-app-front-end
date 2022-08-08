import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})


export class OrderService {

  private baseUrl: string;
  private saveUrl: string;
  private viewUrl: string;
  private getrefUrl: string;
  private dispatchfUrl: string;
  

  constructor(private http: HttpClient) {

    this.baseUrl = "http://localhost:8082/orders/all";
    this.saveUrl = "http://localhost:8082/orders/create";
    this.viewUrl = "http://localhost:8082/orders/order";
    this.getrefUrl = "http://localhost:8082/orders/ref";
    this.dispatchfUrl = "http://localhost:8087/dispatch/update";


  }

  public findAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl);
  }


  public save(order: Order) {
    return this.http.post<Order>(this.saveUrl, order);
  }

  getOrder(referenceNumber: string): Observable<any> {
    return this.http.get(`${this.viewUrl}/?referenceNumber=${referenceNumber}`);
  }

  createOrder(order: Object): Observable<Object> {
    return this.http.post(`${this.saveUrl}`, order);

  }

  updateDispatch(referenceNumber: String) {
    return this.http.put(`${this.dispatchfUrl}/?referenceNumber=$`, referenceNumber);
  }

  

}
