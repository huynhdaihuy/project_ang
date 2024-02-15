import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth-guard.guard';
import { RoleGuard } from './shared/guards/role-guard.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
    // canActivate: [AuthGuard, RoleGuard],
    // data: {
    //   expectedRole: 'user',
    // },
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./features/signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: 'chef',
    loadChildren: () =>
      import('./features/chef/chef.module').then((m) => m.ChefModule),
  },
  // {
  //   path: '**',
  //   redirectTo: '/home',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
