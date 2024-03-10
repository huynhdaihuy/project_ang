import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangeGoodsPageComponent } from './pages/mange-goods-page/mange-goods-page.component';
import { AddGoodsComponent } from './pages/add-goods/add-goods.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddGoodsComponent,
  },
  {
    path: '',
    component: MangeGoodsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageGoodsRoutingModule {}
