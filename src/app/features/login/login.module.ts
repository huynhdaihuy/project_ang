import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MaterialModuleModule } from 'src/app/shared/modules/material-module/material-module.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, LoginRoutingModule, MaterialModuleModule],
  exports: [],
})
export class LoginModule {}
