import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from './modules/material-module/material-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    CommonModule,
    MaterialModuleModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
