import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';
import { InforOverviewComponent } from './components/components/infor-overview/infor-overview.component';
import { OperatingCostTableComponent } from './components/components/operating-cost-table/operating-cost-table.component';
import { OperatingRevenueTableComponent } from './components/components/operating-revenue-table/operating-revenue-table.component';
import { OverviewStatisticComponent } from './components/components/overview-statistic/overview-statistic.component';
import { OrderStatisticPageComponent } from './pages/order-statistic-page/order-statistic-page.component';
import { TransportStatisticPageComponent } from './pages/transport-statistic-page/transport-statistic-page.component';
import { WarehouseStatisticPageComponent } from './pages/warehouse-statistic-page/warehouse-statistic-page.component';
import { WarehouseStatisticTableComponent } from './components/components/warehouse-statistic-table/warehouse-statistic-table.component';


@NgModule({
  declarations: [
    OverviewPageComponent,
    InforOverviewComponent,
    OperatingCostTableComponent,
    OperatingRevenueTableComponent,
    OverviewStatisticComponent,
    OrderStatisticPageComponent,
    TransportStatisticPageComponent,
    WarehouseStatisticPageComponent,
    WarehouseStatisticTableComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule
  ]
})
export class OverviewModule { }
