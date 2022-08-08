import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderService } from './order.service';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { FormsModule } from '@angular/forms';
import { DispatchService } from './dispatch.service';


@NgModule({
  declarations: [
    AppComponent,
    OrderFormComponent,
    OrderListComponent,
    OrderViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
