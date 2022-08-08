import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service'
import { Order } from '../order';
import { HttpClient } from '@angular/common/http';
import { DispatchService } from '../dispatch.service'
import { Dispatch } from '../dispatch';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.scss']
})
export class OrderViewComponent implements OnInit {


  order: Order = new Order;
  referenceNumber: string = "";
  dispatch: Dispatch = new Dispatch;
  

  constructor(private route: ActivatedRoute, private router: Router,
    private orderService: OrderService, private dispatchService: DispatchService) { }

  ngOnInit() {
    this.order = new Order();

    this.referenceNumber = this.route.snapshot.params['referenceNumber'];

    this.orderService.getOrder(this.referenceNumber)
      .subscribe(data => {
        console.log(data)
        this.order = data;
      });
  }


  updateDispatch(referenceNUmber:string) {
    this.dispatchService.updateDispatch(referenceNUmber)
      .subscribe();
      
  }

  onSubmit() {
    this.updateDispatch(this.referenceNumber);
  }




  }

 
