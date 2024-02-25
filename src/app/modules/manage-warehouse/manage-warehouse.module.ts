import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageWarehouseRoutingModule } from './manage-warehouse-routing.module';
import { ManageWarehouseComponent } from './pages/manage-warehouse/manage-warehouse.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ManageWarehouseComponent],
  imports: [CommonModule, ManageWarehouseRoutingModule, SharedModule],
})
export class ManageWarehouseModule {}
