import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChefRoutingModule } from './chef-routing.module';
import { MaterialModuleModule } from 'src/app/shared/modules/material-module/material-module.module';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeEditPrompComponent } from './components/recipe-edit-promp/recipe-edit-promp.component';
import { FormsModule } from '@angular/forms';
import { OrderComponent } from './components/order/order.component';
import { OrderItemComponent } from './components/order/components/order-item/order-item.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { OrderDetailItemComponent } from './components/order-detail/components/order-detail-item/order-detail-item.component';

@NgModule({
  declarations: [HomeComponent, DashboardComponent, RecipeComponent, RecipeEditPrompComponent, OrderComponent, OrderItemComponent, OrderDetailComponent, OrderDetailItemComponent],
  imports: [CommonModule, ChefRoutingModule, MaterialModuleModule],
})
export class ChefModule {}
