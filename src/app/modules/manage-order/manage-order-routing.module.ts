import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageOrderModule } from './manage-order.module';
import { ManageOrderPageComponent } from './pages/manage-order-page/manage-order-page.component';

const routes: Routes = [
  {
    path: '',
    component: ManageOrderPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageOrderRoutingModule {}
