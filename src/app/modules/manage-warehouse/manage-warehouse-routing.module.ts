import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageWarehouseComponent } from './pages/manage-warehouse/manage-warehouse.component';

const routes: Routes = [{ path: '', component: ManageWarehouseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageWarehouseRoutingModule {}
