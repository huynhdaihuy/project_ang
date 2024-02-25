import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from './modules/material-module/material-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [ChartComponent],
  imports: [],
  exports: [
    CommonModule,
    MaterialModuleModule,
    FormsModule,
    ReactiveFormsModule,
    ChartComponent,
  ],
})
export class SharedModule {}
