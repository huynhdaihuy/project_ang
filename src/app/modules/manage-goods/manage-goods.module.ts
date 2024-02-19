import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageGoodsRoutingModule } from './manage-goods-routing.module';
import { MangeGoodsPageComponent } from './pages/mange-goods-page/mange-goods-page.component';
import { AddGoodsComponent } from './pages/add-goods/add-goods.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MangeGoodsPageComponent, AddGoodsComponent],
  imports: [CommonModule, ManageGoodsRoutingModule, SharedModule],
})
export class ManageGoodsModule {}
