import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from './modules/material-module/material-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartComponent } from './components/chart/chart.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ChartComponent, LoginPageComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    MaterialModuleModule,
    FormsModule,
    ChartComponent,
    LoginPageComponent,
  ],
})
export class SharedModule {}
