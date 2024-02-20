import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageGoodsRoutingModule } from './manage-goods-routing.module';
import { MangeGoodsPageComponent } from './pages/mange-goods-page/mange-goods-page.component';
import { AddGoodsComponent } from './pages/add-goods/add-goods.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InventoryFormComponent } from './components/inventory-form/inventory-form.component';
import { TagsFormComponent } from './components/tags-form/tags-form.component';
import { VariantsFormComponent } from './components/variants-form/variants-form.component';

@NgModule({
  declarations: [MangeGoodsPageComponent, AddGoodsComponent, InventoryFormComponent, TagsFormComponent, VariantsFormComponent],
  imports: [CommonModule, ManageGoodsRoutingModule, SharedModule],
})
export class ManageGoodsModule {}
