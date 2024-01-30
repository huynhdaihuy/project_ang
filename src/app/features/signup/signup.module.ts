import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { MaterialModuleModule } from 'src/app/shared/modules/material-module/material-module.module';

@NgModule({
  declarations: [SignUpPageComponent],
  imports: [CommonModule, SignupRoutingModule, MaterialModuleModule],
})
export class SignupModule {}
