import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';
import { TransportStatisticPageComponent } from './pages/transport-statistic-page/transport-statistic-page.component';
import { WarehouseStatisticPageComponent } from './pages/warehouse-statistic-page/warehouse-statistic-page.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewPageComponent,
  },
  {
    path: 'transport',
    component: TransportStatisticPageComponent,
  },
  {
    path: 'warehouse',
    component: WarehouseStatisticPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverviewRoutingModule {}
