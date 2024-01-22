import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MaterialModuleModule } from 'src/app/shared/modules/material-module/material-module.module';
import { HomeRecipeListComponent } from './components/home-recipe-list/home-recipe-list.component';
import { HomeRecipeListItemComponent } from './components/home-recipe-list-item/home-recipe-list-item.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HomePageComponent,
    HomeRecipeListComponent,
    HomeRecipeListItemComponent,
    LoginDialogComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModuleModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [],
})
export class HomeModule {}
