import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../order.service';
import { Order } from '../order';



@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  order: Order = new Order;
  submitted = false;
  referenceNumber: string;

  constructor(private router: Router,
    private orderService: OrderService) {
    this.referenceNumber = "";
 
  }

  ngOnInit(): void {
  }

  newOrder(): void {
    this.submitted = false;
    this.order = new Order();
  }

  save() {
    this.orderService
      .createOrder(this.order).subscribe(data => {
        console.log(data)
        this.order = new Order();
        this.order = data;
      });
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    
  }


  gotoList() {
    this.router.navigate(['/all']);
  }


}
