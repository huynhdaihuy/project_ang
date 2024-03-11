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
import { GoodsStatisticPageComponent } from './pages/goods-statistic-page/goods-statistic-page.component';
import { SaleGoodsTableComponent } from './components/components/sale-goods-table/sale-goods-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BestSaleChartComponent } from './components/components/best-sale-chart/best-sale-chart.component';
import { TopSaleTableComponent } from './components/components/top-sale-table/top-sale-table.component';

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
    WarehouseStatisticTableComponent,
    GoodsStatisticPageComponent,
    SaleGoodsTableComponent,
    BestSaleChartComponent,
    TopSaleTableComponent,
  ],
  imports: [CommonModule, OverviewRoutingModule, SharedModule],
})
export class OverviewModule {}
