import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_core/guard/auth/auth.guard';
import { AuthComponent } from './_pages/auth/auth.component';
import { LoginComponent } from './_pages/auth/login/login.component';
import { SetPasswordComponent } from './_pages/auth/set-password/set-password.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'',
    pathMatch:"full"
  },
  {
    path: 'login',
    component:AuthComponent,
    // canActivate:[AuthGuard]
  },
  {
    path:"reset-password",
    component:SetPasswordComponent
  },
  {
    path: '',
    loadChildren: () => import('./_pages/protected/protected.module').then((m => m.ProtectedModule)),
    canActivate:[AuthGuard]
  },
  // {
  //   path: '**',
  //   redirectTo:'dashboard',
  //   pathMatch:'full'

  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
