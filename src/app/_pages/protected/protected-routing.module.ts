import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentMarksComponent } from './marks/student-marks/student-marks.component';
import { ProtectedComponent } from './protected.component';
import { TestboardComponent } from './testboard/testboard.component';
// import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ViewUsersComponent } from './users/view-users/view-users.component';

const routes: Routes = [
  {
    path: '',
    component:ProtectedComponent,
    children: [
      // {
      //   path: 'dashboard',
      //   redirectTo: 'dashboard',
      //   pathMatch:'full'
      // },
      {
        path: 'dashboard',
        component:DashboardComponent
      },
      {
        path:'testboard',
        component: TestboardComponent
      },
      {
        path:'user',
        component: ViewUsersComponent //EditUserComponent
      },
      {
        path:'studentmarks',
        component: StudentMarksComponent
      },
      {
        path: '**',
        redirectTo:"dashboard",
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
