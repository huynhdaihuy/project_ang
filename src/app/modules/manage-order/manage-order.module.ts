import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageOrderRoutingModule } from './manage-order-routing.module';
import { ManageOrderPageComponent } from './pages/manage-order-page/manage-order-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InforOrderComponent } from './components/infor-order/infor-order.component';

@NgModule({
  declarations: [ManageOrderPageComponent, InforOrderComponent],
  imports: [CommonModule, ManageOrderRoutingModule, SharedModule],
})
export class ManageOrderModule {}
