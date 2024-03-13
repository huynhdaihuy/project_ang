import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './shared/components/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'overview',
    loadChildren: () =>
      import('./modules/overview/overview.module').then(
        (m) => m.OverviewModule
      ),
  },

  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'goods',
    loadChildren: () =>
      import('./modules/manage-goods/manage-goods.module').then(
        (m) => m.ManageGoodsModule
      ),
  },
  {
    path: 'warehouse',
    loadChildren: () =>
      import('./modules/manage-warehouse/manage-warehouse.module').then(
        (m) => m.ManageWarehouseModule
      ),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./modules/manage-order/manage-order.module').then(
        (m) => m.ManageOrderModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
