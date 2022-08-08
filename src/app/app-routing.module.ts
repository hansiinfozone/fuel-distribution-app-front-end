import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderViewComponent } from './order-view/order-view.component';




const routes: Routes = [
  { path: 'all', component: OrderListComponent },
  { path: 'create', component: OrderFormComponent },
  { path: 'order/:referenceNumber', component: OrderViewComponent },
  { path: 'dispatch/update', component: OrderViewComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
