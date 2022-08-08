import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service'
import { Order } from '../order';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService) {
  
  }

  ngOnInit() {
    this.orderService.findAll().subscribe(data => {
      this.orders = data;
    
    });
  }
}
